package com.alisa.bakery.customer.service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerRegisterRequest {
    private String firstName;
    private String lastName;
    private String company;
    private String phoneNumber;
    private String email;
    private String password;
    private Boolean isJoiningMailingList = false;

    @JsonProperty("billingAddress")
    private BillingAddressRequest billingAddressRequest;
}
