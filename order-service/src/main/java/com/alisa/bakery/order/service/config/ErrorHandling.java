package com.alisa.bakery.order.service.config;

import com.alisa.bakery.order.service.dto.ErrorResponse;
import com.alisa.bakery.order.service.exception.BaseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorHandling {

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<ErrorResponse> handlingError(BaseException e) {
        ErrorResponse response = new ErrorResponse();
        response.setMessage(e.getMessage());
        response.setStatus(HttpStatus.EXPECTATION_FAILED.value());

        return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
    }
}
