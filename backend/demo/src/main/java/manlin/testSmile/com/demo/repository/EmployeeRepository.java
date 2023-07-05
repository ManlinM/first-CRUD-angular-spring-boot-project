package manlin.testSmile.com.demo.repository;

import manlin.testSmile.com.demo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //used to indicate that an interface or class provides the mechanism for storing,retrieving,
// and manipulating data from a data source
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    /*
    *<TableName,Id type>
    *extending JpaRepository, the EmployeeRepository inherits a set of predefined methods for performing
    *  common database operations, such as saving, updating, deleting, and querying entities.
    *for CRUD
    * */
}
