import './App.css';
import {useState} from 'react';
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

  const handleTextChange = (e) =>{
    setText(e.target.value);
  }
  const handleClick = (e) => {
    alert("Button was clicked");
  }


  return (
    <div className="App">
      <form>
        <label>
          Text Field:
          <input type="text" value={text} name="text" onChange={handleTextChange}/>
        </label><br/><br/>

        <label>
          Button:
          <input type="button" value="Click Me!" onClick={handleClick}/>
        </label><br/><br/>

        <label>
          checkbox:
          <input type="checkbox" />
        </label><br/><br/>

        <label>
          Color:
          <input type="color"  />
        </label><br/><br/>

        <label>
          Date:
          <input type="date" />
        </label><br/><br/>

        <label>
          Email:
          <input type="email" />
        </label><br/><br/>

        <label>
          File:
          <input type="file" />
        </label><br/><br/>

        <label>
          Hidden:
          <input type="hidden"/>
        </label><br/><br/>

        <label>
          Month:
          <input type="month"/>
        </label><br/><br/>

        <label>
          Number:
          <input type="number"/>
        </label><br/><br/>

        <label>
          Password:
          <input type="password"/>
        </label><br/><br/>

        <label>
          Radio:
          <input type="radio" />
        </label><br/><br/>

        <input type="submit" value="Submit" />
      </form>

    </div>
  );
}

export default App;
