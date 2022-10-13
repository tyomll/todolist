import { useState } from "react";
import "./Input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Input = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([])
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };
    const handleValueAdd = () => {
        const updatedList = [...list]
        updatedList.push(inputValue)
        if(inputValue !== ""){
            setList(updatedList)
        }
        setInputValue("")  
    }
    const deleteDiv = (i) => {
        let listCopy = [...list];
        listCopy.splice(i, 1)
        setList(listCopy)
    }
    return (
        <div className="container">
            <div>
                <h1>Enter Task</h1>
                <input type="text" value = {inputValue}onChange={handleInputChange} placeholder="Add new..."></input>
                <button className="add" onClick={handleValueAdd}>Add</button>
                <hr />
                {list.map((item, index) => {
                    return <div key = {index} className="taskDiv">{item}<button onClick={() => deleteDiv(index)}><FontAwesomeIcon class="delete-icon"icon={faTrash} /></button></div>  
                })}
            </div>
        </div>
    );
};

export default Input;
