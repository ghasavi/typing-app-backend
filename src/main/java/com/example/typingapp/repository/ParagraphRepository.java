package com.example.typingapp.repository;

import com.example.typingapp.model.Paragraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParagraphRepository extends JpaRepository<Paragraph, Long> {
}
