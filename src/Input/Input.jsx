import { useState } from "react";

const Input = () => {
    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([])
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };
    const handleValueAdd = () => {
        debugger
        const updatedList = [...list]
        updatedList.push(inputValue)
        setList(updatedList)
        setInputValue("")
        
        
    }
    const deleteDiv = (i) => {
        let listCopy = [...list];
        listCopy.splice(i, 1)
        setList(listCopy)
    }
    return (
        <div>
        <input type="text" value = {inputValue}onChange={handleInputChange}></input>
        <button onClick={handleValueAdd}>Add</button>
        {list.map((item, index) => {
            return <div key = {index}>{item}<button onClick={() => deleteDiv(index)}>Delete</button></div> 
        })}
        </div>
    );
};

export default Input;
