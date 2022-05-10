import style from "./SelectContainer.module.css";

const SelectContainer = (props) => {
  return <div className={style.selectContainer}>
      {props.children}
  </div>;
};

export default SelectContainer;
