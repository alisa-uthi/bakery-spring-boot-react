package com.alisa.bakery.customer.service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "billing_address")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BillingAddress {
    @Field("street_address")
    private String streetAddress;

    private String landmark;

    private String city;

    private String state;

    private String country;

    @Field("postal_code")
    private String postalCode;

    @Field("special_instruction")
    private String specialInstruction;

    @JsonIgnore
    private Customer customer;
}
