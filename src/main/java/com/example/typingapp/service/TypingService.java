package com.example.typingapp.service;

import com.example.typingapp.model.Paragraph;
import com.example.typingapp.repository.ParagraphRepository; // <-- THIS LINE
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
public class TypingService {
    private final ParagraphRepository repo;
    private final Random random = new Random();

    public TypingService(ParagraphRepository repo) {
        this.repo = repo;
    }

    public Paragraph getRandomParagraph() {
        List<Paragraph> list = repo.findAll();
        if (list.isEmpty()) {
            Paragraph p = new Paragraph();
            p.setText("The quick brown fox jumps over the lazy dog.");
            return p;
        }
        return list.get(random.nextInt(list.size()));
    }
}
