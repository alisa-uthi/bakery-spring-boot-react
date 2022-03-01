package com.alisa.bakery.order.service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {
    @JsonIgnore
    private String _id;

    @Field("product_id")
    private String productId;

    @Field("product_name")
    private String productName;

    private Integer quantity;
    private Double price;

    @Field("total_price")
    private Double totalPrice;

    @CreatedDate
    @Field("created_at")
    @JsonIgnore
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Field("updated_at")
    @JsonIgnore
    private LocalDateTime updatedAt;
}
