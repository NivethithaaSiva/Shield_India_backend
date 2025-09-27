package com.example.Shield_India.service;

import com.example.Shield_India.model.Category;
import com.example.Shield_India.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public Category create(Category category) {
        return categoryRepository.save(category);
    }

    public Category update(Long id, Category category) {
        Optional<Category> existing = categoryRepository.findById(id);
        if (existing.isPresent()) {
            Category cat = existing.get();
            cat.setName(category.getName());
            // Set other fields as needed
            return categoryRepository.save(cat);
        }
        return null;
    }

    public void delete(Long id) {
        categoryRepository.deleteById(id);
    }
}
//package com.example.Shield_India.service;
//
//import com.example.Shield_India.model.Category;
//import com.example.Shield_India.repository.CategoryRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class CategoryService {
//    private final CategoryRepository categoryRepository;
//
//    @Autowired
//    public CategoryService(CategoryRepository categoryRepository) {
//        this.categoryRepository = categoryRepository;
//    }
//
//    public List<Category> getAllCategories() {
//        return categoryRepository.findAll();
//    }
//
//    public Optional<Category> getCategoryById(Long id) {
//        return categoryRepository.findById(id);
//    }
//
//    public Category saveCategory(Category category) {
//        return categoryRepository.save(category);
//    }
//
//    public void deleteCategory(Long id) {
//        categoryRepository.deleteById(id);
//    }
//
//    public Category getCategoryByName(String name) {
//        return categoryRepository.findByName(name);
//    }
//}
//
