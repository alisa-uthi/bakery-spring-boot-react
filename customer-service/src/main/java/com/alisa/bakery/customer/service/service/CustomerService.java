package com.alisa.bakery.customer.service.service;

import com.alisa.bakery.customer.service.dto.CustomerRegisterRequest;
import com.alisa.bakery.customer.service.dto.CustomerResponse;
import com.alisa.bakery.customer.service.exception.BaseException;
import com.alisa.bakery.customer.service.exception.CustomerException;
import com.alisa.bakery.customer.service.mapper.BillingAddressMapper;
import com.alisa.bakery.customer.service.mapper.CustomerMapper;
import com.alisa.bakery.customer.service.model.BillingAddress;
import com.alisa.bakery.customer.service.model.Customer;
import com.alisa.bakery.customer.service.repository.CustomerRepository;
import com.alisa.bakery.customer.service.validation.CustomPasswordValidator;
import com.alisa.bakery.customer.service.validation.PhoneValidator;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class CustomerService {

    @Autowired
    private CustomerMapper customerMapper;
    @Autowired
    private BillingAddressMapper billingAddressMapper;

    private CustomerRepository customerRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private PhoneValidator phoneValidator;
    private CustomPasswordValidator passwordValidator;

    public CustomerResponse registerCustomer(CustomerRegisterRequest customerRequest) throws BaseException {
        log.info("Register new customer: {}", customerRequest.getEmail());

        // find existing email
        Optional<Customer> existingCustomer = customerRepository.findByEmail(customerRequest.getEmail());
        if(existingCustomer.isPresent()) {
            throw  CustomerException.EmailIsTaken();
        }

        // validate contact number
        boolean isPhoneValid = phoneValidator.isPhoneNumberValid(customerRequest.getPhoneNumber());
        if(!isPhoneValid) {
            throw CustomerException.InvalidPhoneNumber();
        }

        // validate password
        boolean isPasswordValid = passwordValidator.validatePassword(customerRequest.getPassword());
        if(!isPasswordValid) {
            throw CustomerException.InvalidPassword();
        }

        // hash password
        customerRequest.setPassword(
                bCryptPasswordEncoder.encode(customerRequest.getPassword())
        );

        // Convert from DTO to Model
        BillingAddress billingAddress = billingAddressMapper
                .toBillingAddress(customerRequest.getBillingAddressRequest());

        // save new customer
        Customer newCustomer = customerMapper.toCustomer(customerRequest);
        newCustomer.setBillingAddresses(billingAddress);
        Customer saveCustomer = customerRepository.save(newCustomer);

        return customerMapper.toCustomerResponse(saveCustomer);
    }

    public CustomerResponse getCustomerById(String id) throws BaseException {
        log.info("Get customer with id: {}", id);
        Customer customer = customerRepository
                .findById(id)
                .orElseThrow(() -> CustomerException.CustomerNotFound());
        return customerMapper.toCustomerResponse(customer);
    }

    public CustomerResponse getCustomerByEmail(String email) throws BaseException {
        log.info("Get customer with email: {}", email);
        Customer customer = customerRepository
                .findByEmail(email)
                .orElseThrow(() -> CustomerException.CustomerNotFound());
        return customerMapper.toCustomerResponse(customer);
    }
}
