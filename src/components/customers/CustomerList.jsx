import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService";
import { User } from "../../users/User";
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getNonStaffUsers()
            .then((users) => setCustomers(users))
    }, [])

    return <div className="customers">
        {customers.map((customerObject) => {
            return (
                <User key={customerObject.id} user={customerObject}/>
            )
        })}
    </div>
}