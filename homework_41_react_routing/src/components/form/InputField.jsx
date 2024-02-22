import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function InputField({ liftValue, type, input, defVal }) {
    const [value, setValue] = useState(defVal || '');

    useEffect(() => {
        setValue(defVal || '');
      }, [defVal]);
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleBlur = () => {
      liftValue(value);
    };
    
    return (
      <FormControl>
        <InputLabel htmlFor="component-outlined">{input}</InputLabel>
        <OutlinedInput
          required
          id="component-outlined"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          label={input}
          type={type}
        />
      </FormControl>
    );
  }
