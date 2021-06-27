import './App.css';
import {useState} from 'react';
import axios from 'axios';
/*

    <input type="button">
    <input type="checkbox">
    <input type="color">
    <input type="date">
    <input type="datetime-local">
    <input type="email">
    <input type="file">
    <input type="hidden">
    <input type="image">
    <input type="month">
    <input type="number">
    <input type="password">
    <input type="radio">
    <input type="range">
    <input type="reset">
    <input type="search">
    <input type="submit">
    <input type="tel">
    <input type="text">
    <input type="time">
    <input type="url">
    <input type="week">

*/

function App() {

  const [text,setText] = useState("");
  const [checked,setChecked] = useState();
  const [color, setColor] = useState("#000000");
  const [date,setDate] = useState(new Date());
  const [email,setEmail] = useState("");
  const [file,setFile] = useState("");
  const [number,setNumber] = useState(0);
  const [password,setPassword] = useState("");

  const handleTextChange = (e) =>{
    setText(e.target.value);
  }
  const handleClick = (e) => {
    alert("Button was clicked");
  }
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  }
  const handleColor = (e) => {
    setColor(e.target.value);
    console.log(color);
  }
  const handleDate = (e) => {
    setDate(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleFile = (e) => {
    setFile(e.target.value);
  }
  const handleNumber = (e) => {
    setNumber(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e) => {
    let data = {text,checked,color,date,email,file,number,password};

    axios.post('http://localhost:8080/form',data)
    .then(function (response){
      console.log(response);
    })
    .catch(function (error){
        console.log(error);
    });
    e.preventDefault();
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Text Field:
          <input type="text" value={text} name="text" onChange={handleTextChange}/>
        </label><br/><br/>

        <label>
          Button:
          <input type="button" value="Click Me!" name="button" onClick={handleClick}/>
        </label><br/><br/>

        <label>
          Checkbox:
          <input type="checkbox" value={checked} name="checkbox" onChange={handleCheckbox} />
        </label><br/><br/>

        <label>
          Color:
          <input type="color" value={color} name="color" onChange={handleColor}/>
        </label><br/><br/>

        <label>
          Date:
          <input type="datetime-local" value={date} name="date" onChange={handleDate}/>
        </label><br/><br/>

        <label>
          Email:
          <input type="email" value={email} name="email" onChange={handleEmail}/>
        </label><br/><br/>

        <label>
          File:
          <input type="file" value={file} name="file" onChange={handleFile}/>
        </label><br/><br/>

        <label>
          Number:
          <input type="number" value={number} name="number" onChange={handleNumber}/>
        </label><br/><br/>

        <label>
          Password:
          <input type="password" value={password} name="password" onChange={handlePassword}/>
        </label><br/><br/>
        
        Radio:<br/>
        <div>
        <label>
          Yes:
          <input type="radio" value="yes" name="choice"/>
        </label><br/>
        <label>
          No:
          <input type="radio" value="no" name="choice"/>
        </label><br/><br/>
        </div>

        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;
