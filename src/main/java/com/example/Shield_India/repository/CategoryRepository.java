package com.example.Shield_India.repository;

import com.example.Shield_India.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Category findByName(String name);
    
    List<Category> findByProtectionTypeId(Long protectionTypeId);
    
    @Query("SELECT c FROM Category c WHERE c.name LIKE %:keyword%")
    List<Category> findByNameContainingIgnoreCase(@Param("keyword") String keyword);
    
    boolean existsByName(String name);
}
