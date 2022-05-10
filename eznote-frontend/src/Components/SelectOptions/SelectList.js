import style from "./SelectList.module.css";

const SelectList = (props) => {
    return (
        <ul className={style.selectList}>
            {props.children}
        </ul>
    )
}

export default SelectList;