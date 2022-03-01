package com.alisa.bakery.order.service.model;

import com.alisa.bakery.order.service.dto.BillingAddress;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document(collection = "order")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private String _id;

    @Field("pickup_date")
    private LocalDateTime pickupDate;

    @Field("total_amount")
    private Double totalAmount;

    private Cart cart;

    @Field("customer_id")
    private String customerId;

    @Field("billing_address")
    private BillingAddress billingAddress;

    @CreatedDate
    @Field("created_at")
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Field("updated_at")
    private LocalDateTime updatedAt;
}

