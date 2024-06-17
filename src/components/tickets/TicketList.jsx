import { useEffect, useState } from "react";
import { getAllTickets } from "../../services/ticketService";
import './Tickets.css'
import { Ticket } from "./Ticket";
import { TicketFilter } from "./TicketFilter";

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([]);
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
    const [filteredTickets, setFilteredTickets] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showOpenOnly, setShowOpenOnly] = useState(false);
    


    const getAndSetTickets = () => {
        getAllTickets()
            .then((ticketArray) => {
                if (currentUser.isStaff) {
                    setAllTickets(ticketArray)
                }
                else {
                    const customerTickets = ticketArray.filter((ticket) => ticket.userId === currentUser.id)
                    setAllTickets(customerTickets)
                }
            })
    }


    useEffect(() => {
        getAndSetTickets();
    }, [currentUser])

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter((ticket) => ticket.emergency === true);
            setFilteredTickets(emergencyTickets)
        }
        else {
            setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
        const foundTickets = allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredTickets(foundTickets)
    }, [searchTerm, allTickets])

    useEffect(() => {
        if (showOpenOnly) {
            const openTickets = allTickets.filter((ticket) => ticket.dateCompleted === '')
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    },[showOpenOnly, allTickets])


    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilter 
            setSearchTerm={setSearchTerm} 
            setShowEmergencyOnly={setShowEmergencyOnly} 
            currentUser={currentUser}
            setShowOpenOnly={setShowOpenOnly}
            />
            <article className="tickets">
                {filteredTickets.map((ticketObject) => {
                    return (
                        <Ticket key={ticketObject.id} 
                        ticket={ticketObject} 
                        currentUser={currentUser} 
                        getAndSetTickets={getAndSetTickets}
                        />
                    )
                })}
            </article>
        </div>
    )

}