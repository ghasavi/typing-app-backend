package com.example.typingapp.service;

import com.example.typingapp.model.User;
import com.example.typingapp.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) { this.repo = repo; }

    public String register(String username, String password) {
        if (repo.findByUsername(username).isPresent()) {
            return "Username already exists!";
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(password); // For now plain text; we’ll hash later
        repo.save(user);

        return "User registered successfully!";
    }

    public String login(String username, String password) {
        Optional<User> userOpt = repo.findByUsername(username);
        if (userOpt.isEmpty()) return "Invalid username or password!";

        User user = userOpt.get();
        if (!user.getPassword().equals(password)) return "Invalid username or password!";

        return "Login successful!";
    }
}