import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
//import .scss for view'
import "./register-view.scss";

export function RegisterView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ birthday, setBirthday ] = useState(new Date());

    const handleSubmit = () => {
        event.preventDefault();
//       console.log(username,password, email, name, birthday);
        /* send req. for validation to server then call props.onRegister*/
        props.onRegister(username);
    };

    return (
        <form>
            <label>
                Username:
                <input type="text" value={username} onChange= {event => setUsername(event.target.value)} />
            </label>
            <br/>
            <label>
                Password:
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label> 
            <br/>
            <label>
                Email:
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <br/>
            <label>
                Name:
                <input type="text" value={name} onChange={event => setName(event.target.value)} />
            </label>
            <br/>
            <label>
                Birthday:
                <DatePicker selected = {2000-01-01} onChange={date => setBirthday(date)} />    
            </label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

RegisterView.propTypes = {
    username: PropTypes.string,
    setUsername: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    name: PropTypes.string,
    setName: PropTypes.func,
    birthday: PropTypes.string,
    setBirthday: PropTypes.func,
    handleSubmit: PropTypes.func
  };