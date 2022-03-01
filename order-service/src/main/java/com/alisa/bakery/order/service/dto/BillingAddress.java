package com.alisa.bakery.order.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillingAddress {
    private String streetAddress;
    private String landmark;
    private String city;
    private String state;
    private String country;
    private String postalCode;
    private String specialInstruction;
}
