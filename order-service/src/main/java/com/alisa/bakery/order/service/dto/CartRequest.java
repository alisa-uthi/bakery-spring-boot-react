package com.alisa.bakery.order.service.dto;

import com.alisa.bakery.order.service.model.CartItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartRequest {
    private List<CartItem> cartItems;
    private Double subTotal;
    private String customerId;
}
