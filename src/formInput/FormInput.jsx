import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput" id="inputFormCommon">
       {!props.showLabel && <label><h6>{label}</h6></label>}
      <input
      className={props.readOnly ? 'customInput' : ''}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        placeholder ={props.placeholder}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
