package com.alisa.bakery.order.service.exception;

public class OrderException extends BaseException {
    public OrderException(String message) {
        super(message);
    }

    public static OrderException OrderNotFound() {
        return new OrderException("Order not found");
    }
}
