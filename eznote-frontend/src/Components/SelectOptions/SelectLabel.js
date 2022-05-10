import style from "./SelectLabel.module.css";

const SelectLabel = (props) => {
  return <span className={style.selectLabel}>{props.children}</span>;
};

export default SelectLabel;
