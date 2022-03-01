package com.alisa.bakery.order.service.controller;

import com.alisa.bakery.order.service.dto.OrderRequest;
import com.alisa.bakery.order.service.dto.OrderResponse;
import com.alisa.bakery.order.service.exception.BaseException;
import com.alisa.bakery.order.service.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/orders")
@AllArgsConstructor
public class OrderController {

    private OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest orderRequest) {
        return ResponseEntity.ok(orderService.createOrder(orderRequest));
    }

    @GetMapping("{id}")
    public ResponseEntity<OrderResponse> getOrderById(@PathVariable("id") String id) throws BaseException {
        return ResponseEntity.ok(orderService.getOrderById(id));
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<List<OrderResponse>> getOrderByCustomerId(
            @PathVariable("id") String id) throws BaseException {
        return ResponseEntity.ok(orderService.getOrdersByCustomerId(id));
    }
}
