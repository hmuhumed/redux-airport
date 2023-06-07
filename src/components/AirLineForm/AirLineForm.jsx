import {useState} from 'react';
import { useDispatch } from 'react-redux';

function AirLineForm() {

    const dispatch = useDispatch();
    const [newAirline, setNewAirline] = useState('');

    const handleAirline = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_AIRLINE',
            payload: newAirline
        });

        setNewAirline('');
    }
    return (

        <form onSubmit={handleAirline}>
            <input 
             type="text"
             placeholder="Airline Name"
             onChange={event => setNewAirline(event.target.value)}
             value={newAirline}
             >
            </input>

            <button type='submit'>Add Airline</button>

        </form>

    )
}

export default AirLineForm;