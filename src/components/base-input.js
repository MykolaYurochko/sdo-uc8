import React, { useRef } from "react";
import PropTypes from "prop-types";

const BaseInput = ({ name, placeholder, onKeyDown, onBlur, label, value }) => {
  const fieldRef = useRef(null);
  return (
    <label>
      {label}
      <input
        ref={fieldRef}
        name={name}
        placeholder={placeholder}
        onKeyDown={ev => {
          if (ev.key === "Enter") onKeyDown(ev.value);
        }}
        onBlur={() => {
          onBlur(name, fieldRef.current.value);
        }}
      />
    </label>
  );
};

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
};
export default BaseInput;
