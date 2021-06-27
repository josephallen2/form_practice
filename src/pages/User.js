import {useState} from 'react';
import axios from 'axios';

function User (){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        let data = {username, password}
        axios.post('http://localhost:8080/form', data)
        .then()
        .catch();
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div> 
            <h1>User Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} name="username" onChange={handleUsername} />
                </label><br /><br />
                <label>
                    Password:
                    <input type="text" value={password} name="password" onChange={handlePassword} />
                </label><br /><br />
            </form>
        </div>
    );
}
export default User;