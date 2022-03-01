package com.alisa.bakery.order.service.repository;

import com.alisa.bakery.order.service.model.CartItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository extends MongoRepository<CartItem, String> {
}
