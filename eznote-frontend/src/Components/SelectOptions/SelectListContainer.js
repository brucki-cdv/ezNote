import style from "./SelectListContainer.module.css";

const SelectListContainer = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default SelectListContainer;