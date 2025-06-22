package com.example.Shield_India.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name="ProtectionType")
public class ProtectionType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "protectionType", cascade = CascadeType.ALL)
    private List<Item> items;

    @OneToMany(mappedBy = "protectionType", cascade = CascadeType.ALL)
    private List<Category> categories;

}