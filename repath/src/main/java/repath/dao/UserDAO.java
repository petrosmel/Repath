package repath.dao;

import java.util.List;
import repath.entity.User;

public interface UserDAO {

    public List<User> findAll();

    public void save(User user);

    public void deleteUserById(int id);

    public List<User> findUserByCompany(String company);
}
