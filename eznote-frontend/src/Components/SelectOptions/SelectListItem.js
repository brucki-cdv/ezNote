import style from "./SelectListItem.module.css";

const SelectListItem = (props) => {
  function add3Dots(string, limit) {
    var dots = "...";
    if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
    }

    return string;
  }

  return (
    <li className={style.selectListItem} onClick={props.onClick}>
      <span>{props.children}</span>
    </li>
  );
};

export default SelectListItem;
