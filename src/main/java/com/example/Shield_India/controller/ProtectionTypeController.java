package com.example.Shield_India.controller;

import com.example.Shield_India.model.ProtectionType;
import com.example.Shield_India.service.ProtectionTypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/protection-types")
@CrossOrigin(origins = "*")
public class ProtectionTypeController {

    private final ProtectionTypeService protectionTypeService;

    public ProtectionTypeController(ProtectionTypeService protectionTypeService) {
        this.protectionTypeService = protectionTypeService;
    }

    @GetMapping
    public ResponseEntity<List<ProtectionType>> getAllProtectionTypes() {
        List<ProtectionType> protectionTypes = protectionTypeService.getAllProtectionTypes();
        return ResponseEntity.ok(protectionTypes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProtectionType> getProtectionTypeById(@PathVariable Long id) {
        ProtectionType protectionType = protectionTypeService.getById(id);
        if (protectionType != null) {
            return ResponseEntity.ok(protectionType);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<ProtectionType> createProtectionType(@RequestBody ProtectionType protectionType) {
        ProtectionType saved = protectionTypeService.save(protectionType);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProtectionType> updateProtectionType(@PathVariable Long id, @RequestBody ProtectionType updatedProtectionType) {
        ProtectionType existingType = protectionTypeService.getById(id);
        if (existingType == null) {
            return ResponseEntity.notFound().build();
        }
        
        existingType.setName(updatedProtectionType.getName());
        existingType.setDescription(updatedProtectionType.getDescription());
        
        ProtectionType updated = protectionTypeService.save(existingType);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProtectionType(@PathVariable Long id) {
        ProtectionType existingType = protectionTypeService.getById(id);
        if (existingType == null) {
            return ResponseEntity.notFound().build();
        }
        
        protectionTypeService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
