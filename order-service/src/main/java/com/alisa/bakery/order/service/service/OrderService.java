package com.alisa.bakery.order.service.service;

import com.alisa.bakery.order.service.dto.OrderRequest;
import com.alisa.bakery.order.service.dto.OrderResponse;
import com.alisa.bakery.order.service.exception.BaseException;
import com.alisa.bakery.order.service.exception.OrderException;
import com.alisa.bakery.order.service.mapper.OrderMapper;
import com.alisa.bakery.order.service.model.Order;
import com.alisa.bakery.order.service.repository.CartRepository;
import com.alisa.bakery.order.service.repository.OrderRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class OrderService {
    @Autowired
    private OrderMapper orderMapper;

    private OrderRepository orderRepository;
    private CartService cartService;

    public OrderResponse createOrder(OrderRequest orderRequest) {
        log.info("Create order");
        try {
            Order newOrder = orderMapper.toOrder(orderRequest);
            Order saveOrder = orderRepository.save(newOrder);
            cartService.deleteCartByCartId(saveOrder.getCart().get_id());
            return orderMapper.toOrderResponse(saveOrder);
        } catch (Exception e) {
            throw new IllegalStateException(e.getMessage());
        }
    }

    public OrderResponse getOrderById(String orderId) throws BaseException {
        log.info("Get order by id: {}", orderId);
        Order order = orderRepository
                .findById(orderId)
                .orElseThrow(() -> OrderException.OrderNotFound());
        return orderMapper.toOrderResponse(order);
    }

    public List<OrderResponse> getOrdersByCustomerId(String customerId) throws BaseException {
        log.info("Get order by customer id: {}", customerId);

        List<Order> orders = orderRepository.findByCustomerId(customerId);

        return orders
                .stream()
                .map((order) -> orderMapper.toOrderResponse(order))
                .collect(Collectors.toList());
    }
}
