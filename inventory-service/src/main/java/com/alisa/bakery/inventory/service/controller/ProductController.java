package com.alisa.bakery.inventory.service.controller;

import com.alisa.bakery.inventory.service.dto.ProductRequest;
import com.alisa.bakery.inventory.service.dto.ProductResponse;
import com.alisa.bakery.inventory.service.exception.BaseException;
import com.alisa.bakery.inventory.service.model.Product;
import com.alisa.bakery.inventory.service.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/products")
@AllArgsConstructor
@Slf4j
public class ProductController {
    private ProductService productService;

    @GetMapping()
    public ResponseEntity<List<ProductResponse>> getProducts(
            @RequestParam(value = "category", required = false) String category
    ) throws BaseException {
        if(category != null) {
            if(category.equals("bread")) {
                List<ProductResponse> breads = productService.getProductsByCategory(category);
                List<ProductResponse> bagels = productService.getProductsByCategory("bagel");
                breads.addAll(bagels);
                return ResponseEntity.ok(breads);
            }
            return ResponseEntity.ok(productService.getProductsByCategory(category));
        }
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @PostMapping(
            consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE },
            produces = { MediaType.APPLICATION_JSON_VALUE }
    )
    public ResponseEntity<ProductResponse> addProduct(
            @RequestPart("product") ProductRequest addedProduct,
            @RequestPart("image") MultipartFile image) throws BaseException, IOException {
        return new ResponseEntity<>(productService.addProduct(addedProduct, image), HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable("id") String id) throws BaseException {
        return ResponseEntity.ok(productService.getProductById(id));
    }

    @PutMapping(
            path = "{id}",
            consumes = { MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE },
            produces = { MediaType.APPLICATION_JSON_VALUE }
    )
    public ResponseEntity<ProductResponse> updateProductById(
            @PathVariable("id") String id,
            @RequestPart(value = "product", required = false) ProductRequest productRequest,
            @RequestPart(value = "image", required = false) MultipartFile image
    ) throws BaseException, IOException {
        return ResponseEntity.ok(productService.updateProduct(id, Optional.ofNullable(productRequest), Optional.ofNullable(image)));
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteProductById(@PathVariable("id") String id) throws BaseException {
        productService.deleteProductById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("categories")
    public ResponseEntity<List<String>> getProductCategories() throws BaseException {
        return ResponseEntity.ok(productService.getAllProductCategories());
    }

    @GetMapping("name/{name}")
    public ResponseEntity<ProductResponse> getProductByName(@PathVariable("name") String name) throws BaseException {
        return ResponseEntity.ok(productService.getProductByName(name));
    }


}
