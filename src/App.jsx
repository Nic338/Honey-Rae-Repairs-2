import { useEffect, useState } from "react";
import { getAllTickets } from "./services/ticketService";
import './App.css'
import { TicketList } from "./components/tickets/TicketList";

export const App = () => {
  return (
    <>
      <TicketList />
    </>
  )
}
