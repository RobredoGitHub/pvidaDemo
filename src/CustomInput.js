import React, { useState } from 'react';
import "./minus.css"

const CustomInput = ({id, form, setForm}) => {
    const [value, setValue] = useState(form[id]);

    const handleChange = (event) => {
        setValue(event.target.value);
        setForm({...form, [id]: event.target.value});
    }


  const handleKeyDown = event => {
    if (event.keyCode === 40 || event.keyCode === 38 || event.keyCode === 189 || event.keyCode === 187 || event.keyCode === 69 || event.keyCode === 109 || event.keyCode === 107  ) {
      event.preventDefault();
    }
  }

  return (
    <input className="minus" type="number" value={form[id]} onChange={handleChange}  onKeyDown={handleKeyDown} />
  );
}


export default CustomInput;
