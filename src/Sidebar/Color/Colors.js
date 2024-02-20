import React from "react";
import "./Colors.css";
import Input from "../../components/Input";

const colorOptions = [
  { value: "black", title: "Black" },
  { value: "brown", title: "Brown" },
  { value: "blue", title: "Blue" },
  { value: "red", title: "Red" },
  { value: "green", title: "Green" },
  { value: "gray", title: "Gray" },
  { value: "yellow", title: "Yellow" },
  { value: "white", title: "White" },
  { value: "purple", title: "Purple" },
  { value: "pink", title: "Pink" },
  { value: "skin", title: "Skin" },
  { value: "multi", title: "Multi" },
];

const Colors = ({ handleChange }) => {
  const renderColorInputs = () => {
    return colorOptions.map((colorOption, index) => (
      <Input
        key={index}
        handleChange={handleChange}
        value={colorOption.value}
        title={colorOption.title}
        name="test1"
        color={colorOption.value}
      />
    ));
  };

  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>
        All
      </label>
      {renderColorInputs()}
    </div>
  );
};

export default Colors;
