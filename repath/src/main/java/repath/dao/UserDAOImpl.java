package repath.dao;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import repath.entity.User;

@Repository
public class UserDAOImpl implements UserDAO {

    private EntityManager entityManager;

    @Autowired
    public UserDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<User> findAll() {
        Session session = entityManager.unwrap(Session.class);
        Query<User> findAllQuery = session.createQuery("from User", User.class);
        List<User> users = findAllQuery.getResultList();
        return users;
    }

    @Override
    public void save(User user) {
        Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(user);

    }

    @Override
    public void deleteUserById(int id) {
        Session session = entityManager.unwrap(Session.class);
        Query deleteQuery = session.createQuery("delete from User where id=:userId");
        deleteQuery.setParameter("userId", id);
        deleteQuery.executeUpdate();
    }

    @Override
    public List<User> findUserByCompany(String company) {
        Session session = entityManager.unwrap(Session.class);
        Query<User> findUserByCompany = session.createQuery("from User where company=:userByCompany", User.class);
        findUserByCompany.setParameter("userByCompany", company);
        List<User> usersByCompany = findUserByCompany.getResultList();
        return usersByCompany;
    }

}
