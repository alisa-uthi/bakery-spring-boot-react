package com.alisa.bakery.customer.service.dto;

import com.alisa.bakery.customer.service.model.BillingAddress;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerResponse {
    private String id;
    private String firstName;
    private String lastName;
    private String company;
    private String phoneNumber;
    private String email;
    private Boolean isJoiningMailingList = false;
    private List<BillingAddress> billingAddresses;
}
