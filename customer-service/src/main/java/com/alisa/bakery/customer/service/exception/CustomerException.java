package com.alisa.bakery.customer.service.exception;

public class CustomerException extends BaseException {

    public CustomerException(String message) {
        super(message);
    }

    public static CustomerException CustomerNotFound() {
        return new CustomerException("Customer not found");
    }

    public static CustomerException EmailIsTaken() {
        return new CustomerException("This email is already taken");
    }

    public static CustomerException InvalidPhoneNumber() {
        return new CustomerException("Invalid phone number");
    }

    public static CustomerException InvalidPassword() {
        return new CustomerException("Invalid password");
    }
}
