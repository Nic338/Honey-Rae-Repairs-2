import { useEffect, useState } from "react"
import { User } from "../../users/User";
import './Employees.css'
import { getStaffUsers } from "../../services/userService";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getStaffUsers()
            .then((employeeArray) => setEmployees(employeeArray))
    }, [])

    return <div className="employees">
        {employees.map((employeeObject) => {
            return (
                <Link to={`/employees/${employeeObject.id}`}>
                <User key={employeeObject.id} user={employeeObject} />
                </Link>
            )
        })}
    </div>

}