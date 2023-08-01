// Import dependencies from react
import {  useState } from "react";
// importing Style 
import Style from './style.module.css';

function Dropdown() {
  

  // Declaring an array for option display
  const list = ["excellent", "very good", "good", "average", "worst"];

  // Using  hook for displaying the selected item
  const [selectedOption, setSelectedOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);
  
  // This function will run when we we will click on the Select button
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  // This funciton will run when we click outside of that select button
  const handleClick = ()=>{
    setOptionArray([]);
  }
  // funciton for selected Item
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }

  // UI
  return (
    <>
      <div onClick={handleClick}>
        <h1>Rate Coding Ninja</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
