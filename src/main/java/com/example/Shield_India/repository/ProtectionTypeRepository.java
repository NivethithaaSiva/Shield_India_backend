package com.example.Shield_India.repository;

import com.example.Shield_India.model.ProtectionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProtectionTypeRepository extends JpaRepository<ProtectionType, Long> {
    ProtectionType findByName(String name);

    
    @Query("SELECT pt FROM ProtectionType pt WHERE pt.name LIKE %:keyword% OR pt.description LIKE %:keyword%")
    List<ProtectionType> findByNameOrDescriptionContainingIgnoreCase(@Param("keyword") String keyword);
    
    boolean existsByName(String name);
}
