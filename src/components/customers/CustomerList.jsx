import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import "./Customers.css"
import { Link } from "react-router-dom";

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers()
            .then((users) => setCustomers(users))
    }, [])

    return <div className="customers">
        {customers.map((customerObject) => {
            return (
                <Link to={`/customers/${customerObject.id}`}>
                <User key={customerObject.id} user={customerObject}/>
                </Link>
            )
        })}
    </div>
}