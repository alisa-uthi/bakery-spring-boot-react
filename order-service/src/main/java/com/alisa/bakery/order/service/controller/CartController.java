package com.alisa.bakery.order.service.controller;

import com.alisa.bakery.order.service.dto.CartRequest;
import com.alisa.bakery.order.service.dto.CartResponse;
import com.alisa.bakery.order.service.exception.BaseException;
import com.alisa.bakery.order.service.service.CartService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/carts")
@AllArgsConstructor
public class CartController {
    private CartService cartService;

    @PostMapping
    public ResponseEntity<CartResponse> createCartByCustomerId(@RequestBody CartRequest cartRequest) throws BaseException {
        CartResponse cart = cartService.createCartByCustomerId(cartRequest);
        return ResponseEntity.ok(cart);
    }

    @GetMapping
    public ResponseEntity<CartResponse> getCartByOrderOrCustomerId(
            @RequestParam(value = "customer", required = false) String customerId
    ) throws BaseException {
        if (customerId != null) {
            return ResponseEntity.ok(cartService.getAliveCartByCustomerId(customerId));
        }
        return new ResponseEntity(null, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("{id}")
    public ResponseEntity<CartResponse> getCartById(@PathVariable("id") String id) throws BaseException {
        return ResponseEntity.ok(cartService.getCartById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteCartByCartId(@PathVariable("id") String id) throws BaseException {
        cartService.deleteCartByCartId(id);
        return ResponseEntity.ok().build();
    }

}
