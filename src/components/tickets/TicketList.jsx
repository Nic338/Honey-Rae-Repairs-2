import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import './Tickets.css'
import { Ticket } from "./Ticket";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);


  useEffect(() => {
    getAllTickets()
    .then((ticketArray) => {
      setAllTickets(ticketArray)
    })
  }, [])

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true);
      setFilteredTickets(emergencyTickets)
    }
    else {
      setFilteredTickets(allTickets)
    }
  },[showEmergencyOnly, allTickets])


  return (
  <div className="tickets-container">
    <h2>Tickets</h2>
    <div>
      <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>Emergency</button>
      <button className="filter-btn btn-secondary" onClick={() => {setShowEmergencyOnly(false)}}>Show All</button>
    </div>
    <article className="tickets">
      {filteredTickets.map((ticket) => {
        return (
          <Ticket key={ticket.id} ticketObject={ticket}/>
        )
      })}
    </article>
  </div>
  )
  
}