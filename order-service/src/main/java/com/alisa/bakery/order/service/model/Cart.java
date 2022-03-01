package com.alisa.bakery.order.service.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "cart")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
    @JsonProperty("id")
    private String _id;

    @Field("cart_items")
    private List<CartItem> cartItems;

    @Field("sub_total")
    private Double subTotal;

    @Field("customer_id")
    private String customerId;

    @Field("flag_delete")
    @JsonIgnore
    private Boolean flagDelete = false;

    @CreatedDate
    @Field("created_at")
    @JsonIgnore
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Field("updated_at")
    @JsonIgnore
    private LocalDateTime updatedAt;

}
