import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNav } from "../nav/CustomerNav"

export const CustomerViews = ({ currentUser }) => {
    return <Routes>
        <Route path="/" element={
            <>
            <CustomerNav />
            <Outlet />
            </>
        }>
            <Route index element={<Welcome />} />
        </Route>
    </Routes>
}