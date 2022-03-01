package com.alisa.bakery.customer.service.controller;

import com.alisa.bakery.customer.service.dto.CustomerRegisterRequest;
import com.alisa.bakery.customer.service.dto.CustomerResponse;
import com.alisa.bakery.customer.service.exception.BaseException;
import com.alisa.bakery.customer.service.service.CustomerService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
@AllArgsConstructor
@Slf4j
public class CustomerController {
    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<CustomerResponse> register(
            @RequestBody CustomerRegisterRequest registerRequest) throws BaseException {
        log.info("Register new customer");
        return new ResponseEntity<>(customerService.registerCustomer(registerRequest), HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable("id") String id)
            throws BaseException {
        log.info("Get customer by id: {}", id);
        return ResponseEntity.ok(customerService.getCustomerById(id));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<CustomerResponse> getCustomerByEmail(@PathVariable("email") String email)
            throws BaseException {
        log.info("Get customer by email: {}", email);
        return ResponseEntity.ok(customerService.getCustomerByEmail(email));
    }

}
