package repath.service;

import java.util.List;
import repath.entity.User;

public interface UserService {

    public List<User> findAll();

    public void save(User user);

    public void deleteUserById(int id);

    public List<User> findUserByCompany(String company);
}
