package com.alisa.bakery.order.service.repository;

import com.alisa.bakery.order.service.model.Cart;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartRepository extends MongoRepository<Cart, String> {
    List<Cart> findByCustomerId(String customerId);

    @Query("{ 'customer_id' : ?0, 'flag_delete' : false }")
    Optional<Cart> findByCustomerIdAndFlagDeleteIsFalse(String customerId);

}
