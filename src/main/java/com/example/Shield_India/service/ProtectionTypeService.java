package com.example.Shield_India.service;

import com.example.Shield_India.model.ProtectionType;
import com.example.Shield_India.repository.ProtectionTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


import com.example.Shield_India.model.ProtectionType;
import com.example.Shield_India.repository.ProtectionTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class ProtectionTypeService {
    private final ProtectionTypeRepository protectionTypeRepository;

    public List<ProtectionType> getAllProtectionTypes() {
        return protectionTypeRepository.findAll();
    }

    public ProtectionType getById(Long id) {
        return protectionTypeRepository.findById(id).orElse(null);
    }

    public ProtectionType save(ProtectionType protectionType) {
        return protectionTypeRepository.save(protectionType);
    }

    public void delete(Long id) {
        protectionTypeRepository.deleteById(id);
    }
}
