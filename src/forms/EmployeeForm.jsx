import { useEffect, useState } from 'react'
import './Form.css'
import { getEmployeeDetails, updateEmployee } from '../services/employeeService'
import { useNavigate } from 'react-router-dom';

export const EmployeeForm = ({ currentUser }) => {
    const [currentEmployee, setCurrentEmployee] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        getEmployeeDetails(currentUser.id)
            .then((data) => {
                setCurrentEmployee(data[0])
            })
    }, [currentUser])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const editedEmployee = {
            id: currentEmployee.id,
            specialty: currentEmployee.specialty,
            rate: currentEmployee.rate,
            userId: currentEmployee.userId,
        }

        updateEmployee(editedEmployee)
            .then(() => {
                navigate(`/employees/${currentUser.id}`)
            })
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...currentEmployee }
        stateCopy[event.target.name] = event.target.value
        setCurrentEmployee(stateCopy)
      }

    return (
        <form className='profile'>
            <h2>Update Profile</h2>
            <fieldset>
                <div className='form-group'>
                    <label>Specialty:</label>
                    <input
                        type='text'
                        name='specialty'
                        required
                        className='form-control'
                        value={currentEmployee.specialty ? currentEmployee.specialty : ''}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <label>Hourly Rate:</label>
                    <input
                        type='number'
                        name='rate'
                        required
                        className='form-control'
                        value={currentEmployee.rate ? currentEmployee.rate : 0}
                        onChange={handleInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className='form-group'>
                    <button className='form-btn btn-primary' onClick={handleSaveButtonClick}>Save Profile</button>
                </div>
            </fieldset>
        </form>
    )
}