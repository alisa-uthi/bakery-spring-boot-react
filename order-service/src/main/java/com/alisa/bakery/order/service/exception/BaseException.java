package com.alisa.bakery.order.service.exception;

public abstract class BaseException extends Exception {
    public BaseException(String message) {
        super(message);
    }
}
