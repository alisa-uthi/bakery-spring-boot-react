package com.alisa.bakery.order.service.exception;

public class CartException extends BaseException {
    public CartException(String message) {
        super(message);
    }

    public static CartException CartNotFound() {
        return new CartException("Cart not found");
    }

    public static CartException CartWithOrderNotFound(String orderId) {
        return new CartException("Cart with order id " + orderId + " is not found");
    }

    public static CartException AliveCartWithCustomerIdNotFound(String customerId) {
        return new CartException("Alive Cart with customer id " + customerId + " is not found");
    }
}
