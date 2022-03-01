package com.alisa.bakery.order.service.mapper;

import com.alisa.bakery.order.service.dto.OrderRequest;
import com.alisa.bakery.order.service.dto.OrderResponse;
import com.alisa.bakery.order.service.model.Order;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderMapper {
    @Autowired
    private ModelMapper modelMapper;

    public Order toOrder(OrderRequest request) {
        return modelMapper.map(request, Order.class);
    }

    public OrderResponse toOrderResponse(Order order) {
        OrderResponse map = modelMapper.map(order, OrderResponse.class);
        map.setId(order.get_id());
        return map;
    }
}
