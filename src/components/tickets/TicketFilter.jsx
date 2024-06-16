export const TicketFilter = ({ setShowEmergencyOnly, setSearchTerm }) => {
    return (
        <>
            <div className="filter-bar">
                <button className="filter-btn btn-primary" onClick={() => { setShowEmergencyOnly(true) }}>Emergency</button>
                <button className="filter-btn btn-secondary" onClick={() => { setShowEmergencyOnly(false) }}>Show All</button>
                <input
                    type="text"
                    placeholder="Search Tickets"
                    className="ticket-search"
                    onChange={(event) => { setSearchTerm(event.target.value) }}
                />
            </div>
        </>
    )
}