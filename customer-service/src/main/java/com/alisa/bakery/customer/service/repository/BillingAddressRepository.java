package com.alisa.bakery.customer.service.repository;

import com.alisa.bakery.customer.service.model.BillingAddress;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BillingAddressRepository extends MongoRepository<BillingAddress, String> {
}
