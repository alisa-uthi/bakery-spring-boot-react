package com.alisa.bakery.inventory.service.mapper;

import com.alisa.bakery.inventory.service.dto.ProductRequest;
import com.alisa.bakery.inventory.service.dto.ProductResponse;
import com.alisa.bakery.inventory.service.model.Product;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class ProductMapper {
    @Autowired
    public ModelMapper modelMapper;

    public ProductResponse toProductResponse(Product product) {
        ProductResponse map = modelMapper.map(product, ProductResponse.class);
        String encoded = Base64.getEncoder().encodeToString(product.getImage().getData());
        map.setImage(encoded);
        return map;
    }

    public Product toProduct(ProductRequest request) {
        return modelMapper.map(request, Product.class);
    }
}
