package com.alisa.bakery.inventory.service.service;

import com.alisa.bakery.inventory.service.dto.ProductRequest;
import com.alisa.bakery.inventory.service.dto.ProductResponse;
import com.alisa.bakery.inventory.service.exception.BaseException;
import com.alisa.bakery.inventory.service.exception.ProductException;
import com.alisa.bakery.inventory.service.mapper.ProductMapper;
import com.alisa.bakery.inventory.service.model.Product;
import com.alisa.bakery.inventory.service.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
@Slf4j
public class ProductService {
    @Autowired
    private ProductMapper productMapper;

    private ProductRepository productRepository;

    private final List<String> acceptedImageTypes = Arrays.asList(MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE);

    public List<ProductResponse> getAllProducts() {
        log.info("Get all products");
        List<Product> allProducts = productRepository.findAll();
        return allProducts
                .stream()
                .map((product) -> productMapper.toProductResponse(product))
                .collect(Collectors.toList());
    }

    public ProductResponse getProductById(String id) throws BaseException {
        log.info("Get product by id: {}", id);
        Product product = productRepository
                .findById(id)
                .orElseThrow(() -> ProductException.ProductNotFound());
        return productMapper.toProductResponse(product);
    }

    public ProductResponse getProductByName(String name) throws BaseException {
        log.info("Get product by name: {}", name);
        Product product = productRepository
                .findByName(name)
                .orElseThrow(() -> ProductException.ProductNotFound());
        return productMapper.toProductResponse(product);
    }

    public List<ProductResponse> getProductsByCategory(String category) throws BaseException{
        log.info("Get product by category: {}", category);
        List<Product> allProducts = productRepository
                .findByCategory(category)
                .orElseThrow(() -> ProductException.ProductNotFound());
        return allProducts
                .stream()
                .map((product) -> productMapper.toProductResponse(product))
                .collect(Collectors.toList());
    }

    public List<String> getAllProductCategories() throws BaseException {
        log.info("Get all product categories");
        return productRepository.findDistinctCategory();
    }

    public ProductResponse addProduct(ProductRequest productRequest, MultipartFile file) throws BaseException, IOException {
        log.info("Add new product: {}", productRequest.getName());

        // Find existing product
        Optional<Product> existingProduct = productRepository.findByName(productRequest.getName());
        if(existingProduct.isPresent()) {
            throw ProductException.ProductAlreadyExist(productRequest.getName());
        }

        if(!file.isEmpty()) {
            // Ensure File type is image
            if(acceptedImageTypes.contains(file.getContentType())) {
                // Prepare data to save
                Product productToSave = productMapper.toProduct(productRequest);
                productToSave.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));

                // Save product
                Product saveProduct = productRepository.save(productToSave);
                return productMapper.toProductResponse(saveProduct);
            } else {
                throw ProductException.UnsupportedImageType();
            }
        } else {
            throw ProductException.ImageNotProvided();
        }
    }

    public ProductResponse updateProduct(String id, Optional<ProductRequest> productRequest, Optional<MultipartFile> file)
            throws BaseException, IOException {
        log.info("Update product: {}", id);

        // Find existing product
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isEmpty()) {
            throw ProductException.ProductNotFound();
        }

        Product product = existingProduct.get();

        // If update image
        if(file.isPresent()) {
            if(acceptedImageTypes.contains(file.get().getContentType())) {
                product.setImage(new Binary(BsonBinarySubType.BINARY, file.get().getBytes()));
            } else {
                throw ProductException.UnsupportedImageType();
            }
        }

        if(productRequest.isPresent()) {
            ProductRequest request = productRequest.get();
            product.setName(request.getName());
            product.setPrice(request.getPrice());
            product.setCategory(request.getCategory());
        }

        productRepository.save(product);

        return productMapper.toProductResponse(product);
    }

    public void deleteProductById(String id) throws BaseException {
        log.info("Delete product by id: {}", id);

        // Find existing product
        Optional<Product> existingProduct = productRepository.findById(id);
        if(existingProduct.isEmpty()) {
            throw ProductException.ProductNotFound();
        }

        // Delete product
        productRepository.deleteById(id);
    }
}
