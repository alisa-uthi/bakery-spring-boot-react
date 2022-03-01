package com.alisa.bakery.order.service.mapper;

import com.alisa.bakery.order.service.dto.CartRequest;
import com.alisa.bakery.order.service.dto.CartResponse;
import com.alisa.bakery.order.service.model.Cart;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CartMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Cart toCart(CartRequest request) {
        return modelMapper.map(request, Cart.class);
    }

    public CartResponse toCartResponse(Cart cart) {
        CartResponse map = modelMapper.map(cart, CartResponse.class);
        map.setId(cart.get_id());
        return map;
    }
}
