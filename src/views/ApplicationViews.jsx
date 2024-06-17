import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../users/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../forms/EmployeeForm"

export const ApplicationViews = () => {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localHoneyUser = localStorage.getItem('honey_user');
    const honeyUserObject = JSON.parse(localHoneyUser);
    setCurrentUser(honeyUserObject)
  },[])


  return <Routes>
  <Route path="/" element={
          <>
            <NavBar />
            <Outlet />
          </>
        }>
          <Route index element={<Welcome />} />
          <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </ Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
          <Route path="profile" element={<EmployeeForm currentUser={currentUser}/>}/>
        </Route>
        </Routes>
}
