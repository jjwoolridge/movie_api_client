import React, {useState} from 'react';
import PropTypes from 'prop-types';

//import .scss for view'
import "./login-view.scss";

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = () => {
        event.preventDefault();
 //       console.log(username,password);
        /* send req. for validation to server then call props.onLoggedIn*/
        props.onLoggedIn(username);
    };

    return (
      <div className = "login-view">
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    );
}

LoginView.propTypes = {
    username: PropTypes.string,
    setUsername: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    handleSubmit: PropTypes.func
  };