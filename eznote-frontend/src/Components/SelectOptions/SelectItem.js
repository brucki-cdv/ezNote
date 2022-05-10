import style from "./SelectOptions.module.css";
import SelectContainer from "./SelectContainer";
import SelectHeader from "./SelectHeader";
import SelectListContainer from "./SelectListContainer";
import SelectList from "./SelectList";
import SelectListItem from "./SelectListItem";
import SelectLabel from "./SelectLabel";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const SelectItem = ({ options, defaultValue, label, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: defaultValue,
    name: defaultValue,
  });
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value, name) => () => {
    console.log("VALUE = ", value);
    console.log("NAME = ", name);

    onChange(value);
    setSelectedOption({ value: value, name: name });
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <SelectHeader onClick={toggling}>
        {icon}
        {selectedOption.name}
        {isOpen ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
      </SelectHeader>
      {isOpen && (
        <SelectListContainer>
          <SelectList>
            {options.length < 0 ? (
              <SelectListItem>Lack of data</SelectListItem>
            ) : (
              <>
                {options.map((option) => {
                  return (
                    <SelectListItem
                      onClick={onOptionClicked(option.value, option.name)}
                    >
                      {option.name}
                    </SelectListItem>
                  );
                })}
              </>
            )}
          </SelectList>
        </SelectListContainer>
      )}
    </SelectContainer>
  );
};

export default SelectItem;
