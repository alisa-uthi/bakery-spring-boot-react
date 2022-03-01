package com.alisa.bakery.order.service.dto;

import com.alisa.bakery.order.service.model.CartItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartResponse {
    private String id;
    private List<CartItem> cartItems;
    private Double subTotal;
    private String customerId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
