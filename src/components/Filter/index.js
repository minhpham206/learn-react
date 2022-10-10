import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterColor, selectTodo } from "../../features/todos/todoSlice";   
import './style.scss' 

const OPTION = [
    {label: "Default", backgroundColor: "#000000", value: "default"},
    {label: "Red", backgroundColor: "#f44336", value: "red"}, 
    {label: "Green", backgroundColor: "#8fce00", value: "green"}, 
    {label: "Blue", backgroundColor: "#2986cc", value: "blue"},
    {label: "Yellow", backgroundColor: "#ffd966", value: "yellow"}
]

const Filter = () => {

    const { filter } = useSelector(selectTodo);
    const dispatch = useDispatch();

    const handleClickFilter = (backgroundColor) => {
        dispatch(filterColor({ backgroundColor, searchKey: filter?.searchKey }))
      }
    
    return (
        <div className="filter-container">
            {OPTION?.map((option) => 
                <div 
                    className={ filter.color.includes(option.value) ? "filter-container-button--active" : "filter-container-button"}
                    style={{color: option.backgroundColor}}
                    key={option.value}
                    value = {option.color}
                    onClick={() => handleClickFilter(option.value)}
                    >{option.label}
                </div>)
            }
        </div>
    );
};

export default Filter;