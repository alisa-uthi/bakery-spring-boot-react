package com.alisa.bakery.customer.service.repository;

import com.alisa.bakery.customer.service.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
    Optional<Customer> findByEmail(String email);
    Optional<List<Customer>> findByisJoiningMailingList(boolean isJoiningMailingList);
}
