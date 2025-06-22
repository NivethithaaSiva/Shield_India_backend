package com.example.Shield_India.repository;

import com.example.Shield_India.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByProtectionTypeId(Long protectionTypeId);
    
    List<Item> findByNameContainingIgnoreCase(String keyword);
    
    Item findByProductCode(String productCode);
    
    @Query("SELECT i FROM Item i JOIN i.categories c WHERE c.id = :categoryId")
    List<Item> findByCategoryId(@Param("categoryId") Long categoryId);
    
    @Query("SELECT i FROM Item i WHERE i.protectionType.id = :protectionTypeId AND i.name LIKE %:keyword%")
    List<Item> findByProtectionTypeIdAndNameContaining(@Param("protectionTypeId") Long protectionTypeId, @Param("keyword") String keyword);
    
    boolean existsByProductCode(String productCode);
}
