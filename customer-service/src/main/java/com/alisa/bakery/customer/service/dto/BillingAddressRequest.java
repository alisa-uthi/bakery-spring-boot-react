package com.alisa.bakery.customer.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillingAddressRequest {
    private String streetAddress;
    private String landmark;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String specialInstruction;
}
