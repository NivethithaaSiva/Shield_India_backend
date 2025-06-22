package com.example.Shield_India.controller;

import com.example.Shield_India.model.Category;
import com.example.Shield_India.service.CategoryService;
import com.example.Shield_India.service.ProtectionTypeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService categoryService;
    private final ProtectionTypeService protectionTypeService;

    public CategoryController(CategoryService categoryService, ProtectionTypeService protectionTypeService) {
        this.categoryService = categoryService;
        this.protectionTypeService = protectionTypeService;
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = categoryService.getAllCategories();
        return ResponseEntity.ok(categories);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id);
        if (category != null) {
            return ResponseEntity.ok(category);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        if (category.getProtectionType() == null || category.getProtectionType().getId() == null) {
            return ResponseEntity.badRequest().build();
        }
        
        var protectionType = protectionTypeService.getById(category.getProtectionType().getId());
        if (protectionType == null) {
            return ResponseEntity.badRequest().build();
        }
        category.setProtectionType(protectionType);

        Category saved = categoryService.saveCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Long id, @RequestBody Category categoryDetails) {
        Category existingCategory = categoryService.getCategoryById(id);
        if (existingCategory == null) {
            return ResponseEntity.notFound().build();
        }
        
        existingCategory.setName(categoryDetails.getName());
        if (categoryDetails.getProtectionType() != null && categoryDetails.getProtectionType().getId() != null) {
            var protectionType = protectionTypeService.getById(categoryDetails.getProtectionType().getId());
            if (protectionType != null) {
                existingCategory.setProtectionType(protectionType);
            }
        }
        
        Category updated = categoryService.saveCategory(existingCategory);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id);
        if (category == null) {
            return ResponseEntity.notFound().build();
        }
        
        categoryService.deleteCategory(id);
        return ResponseEntity.noContent().build();
    }
}
