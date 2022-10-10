import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterColor , selectTodo } from "../../features/todos/todoSlice";   


const Search = () => {

    const [formValue, setFormValue] = useState("")
    const { filter } = useSelector(selectTodo);
    const dispatch = useDispatch();
    const handleClickSearch = (searchKey) => {
        dispatch(filterColor({ searchKey, backgroundColor: filter?.color }))
    }
    
    return (
        <div>
            <input 
            type = "search" 
            placeholder = "Search Item" 
            onChange = {(e) => setFormValue(e.target.value)}
            />
            <button onClick={() => handleClickSearch(formValue)} > Search</button>
        </div>
    )

}

export default Search