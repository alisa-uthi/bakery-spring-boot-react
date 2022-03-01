package com.alisa.bakery.inventory.service.config;

import com.alisa.bakery.inventory.service.dto.ErrorResponse;
import com.alisa.bakery.inventory.service.exception.BaseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorHandling {

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponse> handleException(BaseException e) {
        ErrorResponse response = new ErrorResponse();
        response.setStatus(HttpStatus.EXPECTATION_FAILED.value());
        response.setMessage(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    }
}
