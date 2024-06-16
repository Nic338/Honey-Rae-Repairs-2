import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService";

export const Ticket = ({ ticketObject }) => {
    const [employees, setEmployees] = useState([]);
    const [assignedEmployee, setAssignedEmployee] = useState({});

    useEffect(() => {
        getAllEmployees()
            .then((employeesArray) => {
                setEmployees(employeesArray)
            })
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find((employee) => employee.id === ticketObject.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    }, [employees, ticketObject])


    return (
        <>
            <section className="ticket">
                <header className="ticket-info">#{ticketObject.id}</header>
                <div>{ticketObject.description}</div>
                <footer>
                    <div>
                        <div className="ticket-info">Assignee:</div>
                        <div>
                            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
                        </div>
                    </div>
                    <div>
                        <div className="ticket-info">emergency</div>
                        <div>{ticketObject.emergency ? "yes" : "no"} </div>
                    </div>
                </footer>
            </section>
        </>
    )
}