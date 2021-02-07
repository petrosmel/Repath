package repath.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import repath.entity.User;
import repath.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
// Show all users from Database

    @GetMapping("/users")
    public List<User> findAll() {
        return userService.findAll();
    }

    // Add a new user to Database
    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        userService.save(user);
        return user;
    }

    // Update existing user to Database 
    @PutMapping("/users")
    public User updateUser(@RequestBody User user) {
        userService.save(user);
        return user;
    }

    // Delete existing user from Database 
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id) {
        userService.deleteUserById(id);
        return "User with ID: " + id + " was just deleted!";
    }

    // Find existing user  by company name from Database 
    @GetMapping("users/company/{company}")
    public List<User> findUserByCompany(@PathVariable String company) {
        return userService.findUserByCompany(company);
    }
}
