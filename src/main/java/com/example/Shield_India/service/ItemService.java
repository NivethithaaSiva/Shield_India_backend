package com.example.Shield_India.service;


import com.example.Shield_India.model.Category;
import com.example.Shield_India.model.Item;
import com.example.Shield_India.model.ProtectionType;
import com.example.Shield_India.repository.CategoryRepository;
import com.example.Shield_India.repository.ItemRepository;
import com.example.Shield_India.repository.ProtectionTypeRepository;
import lombok.RequiredArgsConstructor;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {
    private final ItemRepository itemRepository;
    private final ProtectionTypeRepository protectionTypeRepository;
    private final CategoryRepository categoryRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Item getItemById(Long id) {
        return itemRepository.findById(id).orElse(null);
    }

    public Item createItem(Item item) {
        ProtectionType pt = protectionTypeRepository.findById(item.getProtectionType().getId()).orElse(null);
        if (pt == null) return null;
        item.setProtectionType(pt);

        if (item.getCategories() != null) {
            List<Category> validCategories = new ArrayList<>();
            for (Category c : item.getCategories()) {
                categoryRepository.findById(c.getId()).ifPresent(validCategories::add);
            }
            item.setCategories(validCategories);
        }

        return itemRepository.save(item);
    }

    public Item updateItem(Long id, Item details) {
        return itemRepository.findById(id).map(item -> {
            item.setName(details.getName());
            item.setProductCode(details.getProductCode());
            item.setSpecifications(details.getSpecifications());
            item.setImageUrl(details.getImageUrl());

            if (details.getProtectionType() != null) {
                protectionTypeRepository.findById(details.getProtectionType().getId())
                        .ifPresent(item::setProtectionType);
            }

            if (details.getCategories() != null) {
                List<Category> validCategories = new ArrayList<>();
                for (Category c : details.getCategories()) {
                    categoryRepository.findById(c.getId()).ifPresent(validCategories::add);
                }
                item.setCategories(validCategories);
            }

            return itemRepository.save(item);
        }).orElse(null);
    }

    public boolean deleteItem(Long id) {
        return itemRepository.findById(id).map(item -> {
            itemRepository.delete(item);
            return true;
        }).orElse(false);
    }
}
