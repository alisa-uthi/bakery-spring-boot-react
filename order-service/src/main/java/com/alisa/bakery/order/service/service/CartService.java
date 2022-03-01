package com.alisa.bakery.order.service.service;

import com.alisa.bakery.order.service.dto.CartRequest;
import com.alisa.bakery.order.service.dto.CartResponse;
import com.alisa.bakery.order.service.exception.BaseException;
import com.alisa.bakery.order.service.exception.CartException;
import com.alisa.bakery.order.service.mapper.CartMapper;
import com.alisa.bakery.order.service.model.Cart;
import com.alisa.bakery.order.service.repository.CartRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class CartService {
    @Autowired
    private CartMapper cartMapper;

    private CartRepository cartRepository;

    public CartResponse createCartByCustomerId(CartRequest cartRequest) throws BaseException {
        log.info("Create cart by customer id: {}", cartRequest.getCustomerId());
        Cart cart = cartMapper.toCart(cartRequest);
        Cart savedCart = cartRepository.save(cart);
        return cartMapper.toCartResponse(savedCart);
    }

    public CartResponse getCartById(String id) throws BaseException {
        log.info("Get cart by cart id: {}", id);
        Cart cart = cartRepository
                .findById(id)
                .orElseThrow(() -> CartException.CartNotFound());
        return cartMapper.toCartResponse(cart);
    }

    public CartResponse getAliveCartByCustomerId(String customerId) throws BaseException {
        log.info("Get alive cart by customer id: {}", customerId);
        Cart cart = cartRepository
                .findByCustomerIdAndFlagDeleteIsFalse(customerId)
                .orElseThrow(() -> CartException.AliveCartWithCustomerIdNotFound(customerId));
        return cartMapper.toCartResponse(cart);
    }

    public List<CartResponse> getAllCartByCustomerId(String customerId) throws BaseException {
        log.info("Get all carts by customer id: {}", customerId);
        List<Cart> carts = cartRepository.findByCustomerId(customerId);
        return carts
                .stream()
                .map((cart) -> cartMapper.toCartResponse(cart))
                .collect(Collectors.toList());
    }

    public void deleteCartByCartId(String id) throws BaseException {
        log.info("Delete cart by cart id: {}", id);
        // Update flag delete of cart
        Cart cart = cartRepository.findById(id).orElseThrow(() -> CartException.CartNotFound());
        cart.setFlagDelete(true);
        Cart updatedCart = cartRepository.save(cart);
    }
}
