package com.example.Shield_India.config;

import com.example.Shield_India.model.Employee;
import com.example.Shield_India.model.ProtectionType;
import com.example.Shield_India.model.Category;
import com.example.Shield_India.model.Item;
import com.example.Shield_India.repository.EmployeeRepository;
import com.example.Shield_India.repository.ProtectionTypeRepository;
import com.example.Shield_India.repository.CategoryRepository;
import com.example.Shield_India.repository.ItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final EmployeeRepository employeeRepository;
    private final ProtectionTypeRepository protectionTypeRepository;
    private final CategoryRepository categoryRepository;
    private final ItemRepository itemRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(EmployeeRepository employeeRepository,
                          ProtectionTypeRepository protectionTypeRepository,
                          CategoryRepository categoryRepository,
                          ItemRepository itemRepository,
                          PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.protectionTypeRepository = protectionTypeRepository;
        this.categoryRepository = categoryRepository;
        this.itemRepository = itemRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        // Initialize sample data only if no data exists
        if (employeeRepository.count() == 0) {
            initializeSampleData();
        }
    }

    private void initializeSampleData() {
        // Create Protection Types
        ProtectionType fireProtection = new ProtectionType();
        fireProtection.setName("Fire Protection");
        fireProtection.setDescription("Equipment and systems for fire prevention and suppression");
        fireProtection = protectionTypeRepository.save(fireProtection);

        ProtectionType electricalProtection = new ProtectionType();
        electricalProtection.setName("Electrical Protection");
        electricalProtection.setDescription("Safety equipment for electrical hazards");
        electricalProtection = protectionTypeRepository.save(electricalProtection);

        ProtectionType chemicalProtection = new ProtectionType();
        chemicalProtection.setName("Chemical Protection");
        chemicalProtection.setDescription("Protective equipment for chemical hazards");
        chemicalProtection = protectionTypeRepository.save(chemicalProtection);

        // Create Categories
        Category fireExtinguishers = new Category();
        fireExtinguishers.setName("Fire Extinguishers");
        fireExtinguishers.setProtectionType(fireProtection);
        fireExtinguishers = categoryRepository.save(fireExtinguishers);

        Category fireAlarms = new Category();
        fireAlarms.setName("Fire Alarms");
        fireAlarms.setProtectionType(fireProtection);
        fireAlarms = categoryRepository.save(fireAlarms);

        Category circuitBreakers = new Category();
        circuitBreakers.setName("Circuit Breakers");
        circuitBreakers.setProtectionType(electricalProtection);
        circuitBreakers = categoryRepository.save(circuitBreakers);

        Category safetyGloves = new Category();
        safetyGloves.setName("Safety Gloves");
        safetyGloves.setProtectionType(chemicalProtection);
        safetyGloves = categoryRepository.save(safetyGloves);

        // Create Items
        Item fireExtinguisher1 = new Item();
        fireExtinguisher1.setName("ABC Fire Extinguisher 5kg");
        fireExtinguisher1.setProductCode("FE-ABC-5KG");
        fireExtinguisher1.setSpecifications("5kg ABC powder fire extinguisher, suitable for Class A, B, and C fires");
        fireExtinguisher1.setProtectionType(fireProtection);
        fireExtinguisher1.setCategories(Arrays.asList(fireExtinguishers));
        itemRepository.save(fireExtinguisher1);

        Item fireAlarm1 = new Item();
        fireAlarm1.setName("Smoke Detector");
        fireAlarm1.setProductCode("SD-001");
        fireAlarm1.setSpecifications("Ionization smoke detector with 9V battery backup");
        fireAlarm1.setProtectionType(fireProtection);
        fireAlarm1.setCategories(Arrays.asList(fireAlarms));
        itemRepository.save(fireAlarm1);

        Item circuitBreaker1 = new Item();
        circuitBreaker1.setName("MCB 32A");
        circuitBreaker1.setProductCode("MCB-32A");
        circuitBreaker1.setSpecifications("32A Miniature Circuit Breaker, Type C");
        circuitBreaker1.setProtectionType(electricalProtection);
        circuitBreaker1.setCategories(Arrays.asList(circuitBreakers));
        itemRepository.save(circuitBreaker1);

        Item safetyGlove1 = new Item();
        safetyGlove1.setName("Chemical Resistant Gloves");
        safetyGlove1.setProductCode("CRG-001");
        safetyGlove1.setSpecifications("Nitrile chemical resistant gloves, size L");
        safetyGlove1.setProtectionType(chemicalProtection);
        safetyGlove1.setCategories(Arrays.asList(safetyGloves));
        itemRepository.save(safetyGlove1);

        // Create Admin Employee
        Employee admin = new Employee();
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setFirstName("Admin");
        admin.setLastName("User");
        admin.setEmail("admin@shieldindia.com");
        admin.setRole(Employee.Role.ADMIN);
        admin.setDepartment("IT");
        admin.setDesignation("System Administrator");
        admin.setPhoneNumber("+91-9876543210");
        admin.setActive(true);
        employeeRepository.save(admin);

        System.out.println("Sample data initialized successfully!");
        System.out.println("Admin login: username=admin, password=admin123");
    }
} 