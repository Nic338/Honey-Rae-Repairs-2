import { useEffect, useState } from "react"
import { User } from "../../users/User";
import './Employees.css'
import { getStaffUsers } from "../../services/userService";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getStaffUsers()
            .then((employeeArray) => setEmployees(employeeArray))
    }, [])

    return <div className="employees">
        {employees.map((employeeObject) => {
            return (
                <User key={employeeObject.id} user={employeeObject} />
            )
        })}
    </div>

}