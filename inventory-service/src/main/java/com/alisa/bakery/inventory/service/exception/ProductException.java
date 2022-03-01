package com.alisa.bakery.inventory.service.exception;


public class ProductException extends BaseException{
    public ProductException(String message) {
        super(message);
    }

    public static ProductException ProductNotFound() {
        return new ProductException("Product not found.");
    }

    public static ProductException ProductAlreadyExist(String productName) {
        return new ProductException(productName + " is already exist.");
    }

    public static ProductException UnsupportedImageType() {
        return new ProductException("Unsupported image type. The image should be in JPEG or PNG.");
    }

    public static ProductException ImageNotProvided() {
        return new ProductException("Product image is not provided.");
    }
}
