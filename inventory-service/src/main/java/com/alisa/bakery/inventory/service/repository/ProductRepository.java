package com.alisa.bakery.inventory.service.repository;

import com.alisa.bakery.inventory.service.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
    Optional<Product> findByName(String name);
    Optional<List<Product>> findByCategory(String category);

}
