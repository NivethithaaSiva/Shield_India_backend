package com.example.Shield_India.service;

import com.example.Shield_India.model.Employee;
import com.example.Shield_India.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public List<Employee> getAllActiveEmployees() {
        return employeeRepository.findAllActive();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    public Optional<Employee> getEmployeeByUsername(String username) {
        return employeeRepository.findByUsername(username);
    }

    public Optional<Employee> getEmployeeByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }

    public Employee createEmployee(Employee employee) {
        // Encode password before saving
        employee.setPassword(passwordEncoder.encode(employee.getPassword()));
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        return employeeRepository.findById(id).map(employee -> {
            employee.setFirstName(employeeDetails.getFirstName());
            employee.setLastName(employeeDetails.getLastName());
            employee.setEmail(employeeDetails.getEmail());
            employee.setDepartment(employeeDetails.getDepartment());
            employee.setDesignation(employeeDetails.getDesignation());
            employee.setPhoneNumber(employeeDetails.getPhoneNumber());
            employee.setRole(employeeDetails.getRole());
            employee.setActive(employeeDetails.isActive());
            
            // Only update password if provided
            if (employeeDetails.getPassword() != null && !employeeDetails.getPassword().isEmpty()) {
                employee.setPassword(passwordEncoder.encode(employeeDetails.getPassword()));
            }
            
            return employeeRepository.save(employee);
        }).orElse(null);
    }

    public boolean deleteEmployee(Long id) {
        return employeeRepository.findById(id).map(employee -> {
            employee.setActive(false);
            employeeRepository.save(employee);
            return true;
        }).orElse(false);
    }

    public List<Employee> searchEmployees(String keyword) {
        return employeeRepository.searchEmployees(keyword);
    }

    public List<Employee> getEmployeesByRole(Employee.Role role) {
        return employeeRepository.findByRole(role);
    }

    public List<Employee> getEmployeesByDepartment(String department) {
        return employeeRepository.findByDepartment(department);
    }

    public boolean existsByUsername(String username) {
        return employeeRepository.existsByUsername(username);
    }

    public boolean existsByEmail(String email) {
        return employeeRepository.existsByEmail(email);
    }

    public boolean authenticateEmployee(String username, String password) {
        return employeeRepository.findByUsername(username)
                .map(employee -> passwordEncoder.matches(password, employee.getPassword()))
                .orElse(false);
    }
} 