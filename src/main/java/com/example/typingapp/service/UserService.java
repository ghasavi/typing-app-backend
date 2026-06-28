package com.example.typingapp.service;

import com.example.typingapp.model.User;
import com.example.typingapp.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repo, PasswordEncoder passwordEncoder) {
        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
    }

    public String register(String username, String password) {

        if (repo.findByUsername(username).isPresent()) {
            return "Username already exists!";
        }

        User user = new User();
        user.setUsername(username);

        // Encrypt password
        user.setPassword(passwordEncoder.encode(password));

        repo.save(user);

        return "User registered successfully!";
    }

    public String login(String username, String password) {

        Optional<User> userOpt = repo.findByUsername(username);

        if (userOpt.isEmpty()) {
            return "Invalid username or password!";
        }

        User user = userOpt.get();

        // Compare encrypted password
        if (!passwordEncoder.matches(password, user.getPassword())) {
            return "Invalid username or password!";
        }

        return "Login successful!";
    }
}