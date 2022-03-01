package com.alisa.bakery.customer.service.mapper;

import com.alisa.bakery.customer.service.dto.BillingAddressRequest;
import com.alisa.bakery.customer.service.model.BillingAddress;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BillingAddressMapper {
    @Autowired
    public ModelMapper modelMapper;

    public BillingAddress toBillingAddress(BillingAddressRequest request) {
        return modelMapper.map(request, BillingAddress.class);
    }
}
