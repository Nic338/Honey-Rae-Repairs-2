import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getEmployeeDetails } from "../../services/employeeService";

export const EmployeeDetails = () => {
    const [employee, setEmployee] = useState({});
    const { employeeId } = useParams();

    useEffect(() => {
        getEmployeeDetails(employeeId)
            .then((data) => {
                const employeeObject = data[0]
                setEmployee(employeeObject);
            })
    }, [employeeId])

    const numberOfTickets = employee.employeeTickets?.length;

    return <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty : </span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info">Pay Rate : </span>
            {employee.rate}
        </div>
        {numberOfTickets === 1 ?
            <div className="employee-footer">Currently working on {numberOfTickets} ticket</div>
            :
            numberOfTickets === 0 ?
            <div className="employee-footer">Not currently assigned to any tickets</div>
            :
            <div className="employee-footer">Currently working on {numberOfTickets} tickets</div>
        }
    </section>
}