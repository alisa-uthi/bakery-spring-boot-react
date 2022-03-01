package com.alisa.bakery.customer.service.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document("customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id
    private String id;

    @Field("first_name")
    private String firstName;

    @Field("last_name")
    private String lastName;

    private String company;

    @Field("phone_number")
    private String phoneNumber;

    private String email;

    private String password;

    @Field("is_joining_mailing_list")
    private Boolean isJoiningMailingList = false;

    @CreatedDate
    @Field("created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Field("updated_at")
    private LocalDateTime updatedAt;

    @Field("billing_address")
    private List<BillingAddress> billingAddresses = new ArrayList<>();

    public void setBillingAddresses(BillingAddress billingAddress) {
        this.billingAddresses.add(billingAddress);
    }
}
