package com.example.Shield_India.repository;

import com.example.Shield_India.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Optional<Employee> findByUsername(String username);
    
    Optional<Employee> findByEmail(String email);
    
    List<Employee> findByRole(Employee.Role role);
    
    List<Employee> findByDepartment(String department);
    
    @Query("SELECT e FROM Employee e WHERE e.isActive = true")
    List<Employee> findAllActive();
    
    @Query("SELECT e FROM Employee e WHERE e.firstName LIKE %:keyword% OR e.lastName LIKE %:keyword% OR e.email LIKE %:keyword%")
    List<Employee> searchEmployees(@Param("keyword") String keyword);
    
    boolean existsByUsername(String username);
    
    boolean existsByEmail(String email);
} 