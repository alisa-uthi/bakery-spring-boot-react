package com.alisa.bakery.customer.service.mapper;

import com.alisa.bakery.customer.service.dto.CustomerRegisterRequest;
import com.alisa.bakery.customer.service.dto.CustomerResponse;
import com.alisa.bakery.customer.service.model.Customer;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerMapper {
    @Autowired
    public ModelMapper modelMapper;

    public Customer toCustomer(CustomerRegisterRequest registerRequest) {
        return modelMapper.map(registerRequest, Customer.class);
    }

    public CustomerResponse toCustomerResponse(Customer customer) {
        CustomerResponse map = modelMapper.map(customer, CustomerResponse.class);
        map.setId(customer.getId().toString());
        return map;
    }
}
