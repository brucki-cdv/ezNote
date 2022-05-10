import style from "./SelectHeader.module.css";

const SelectHeader = (props) => {
    return (
        <div className={style.selectHeader} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default SelectHeader;