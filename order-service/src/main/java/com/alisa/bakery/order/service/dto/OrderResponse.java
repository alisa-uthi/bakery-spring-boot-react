package com.alisa.bakery.order.service.dto;

import com.alisa.bakery.order.service.model.Cart;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private String id;
    private LocalDateTime pickupDate;
    private Double totalAmount;
    private Cart cart;
    private String customerId;
    private BillingAddress billingAddress;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
