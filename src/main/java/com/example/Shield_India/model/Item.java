package com.example.Shield_India.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="Item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "protection_type_id", nullable = false)
    private ProtectionType protectionType;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String productCode;

    private String imageUrl;

    @Column(columnDefinition = "TEXT")
    private String specifications;

    @ManyToMany
    @JoinTable(
            name = "item_category",
            joinColumns = @JoinColumn(name = "item_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;

}
