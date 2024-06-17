import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCustomerDetails } from "../../services/customerService";
import './Customers.css'

export const CustomerDetails = () => {

    const { customerId } = useParams();
    const [customer, setCustomer] = useState({});
    
    useEffect(() =>{
        getCustomerDetails(customerId).then((data) => {
            const customerObject = data[0]
            setCustomer(customerObject)
        })
    }, [customerId])


    return <section className="customer">
        <header className="customer-header">{customer.user?.fullName}</header>
        <div>
            <span className="customer-info">Email : </span>
            {customer.user?.email}
        </div>
        <div>
            <span className="customer-info">Address : </span>
            {customer.address}
        </div>
        <div>
            <span className="customer-info">Phone Number : </span>
            {customer.phoneNumber}
        </div>
    </section>
}