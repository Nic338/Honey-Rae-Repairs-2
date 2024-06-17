import { useState } from 'react'
import './Form.css'
import { createTicket } from '../services/ticketService'
import { useNavigate } from 'react-router-dom'

export const TicketForm = ({ currentUser }) => {
    const navigate = useNavigate();
    const [ticket, setTicket] = useState({
        description: '',
        emergency: false
    })

    const handleInputChange = (event) => {
        const stateCopy = { ...ticket }
        stateCopy[event.target.name] = event.target.value
        setTicket(stateCopy)
    }

    const handleSave = (event) => {
        event.preventDefault()

        if (ticket.description) {
            const newTicket = {
                userId: currentUser.id,
                description: ticket.description,
                emergency: ticket.emergency,
                dateCompleted: '',
            }
            createTicket(newTicket)
                .then(() => {
                    navigate('/tickets')
                })
        } else {
            window.alert('Please fill out the description!')
        }
    }

    return (
        <form>
            <h2>New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label>Description</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Enter a brief description of your problem'
                        name='description'
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Emergency?
                        <input
                            type='checkbox'
                            onChange={(event) => {
                                const copy = { ...ticket }
                                copy.emergency = event.target.checked
                                setTicket(copy)
                            }} />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <button className='form-btn btn-info' onClick={handleSave}>Submit Ticket</button>
                </div>
            </fieldset>
        </form>
    )
}