import { useState, useEffect } from "react";

function Form() {
  const [medicineFilter, setMedicineFilter] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setMedicineFilter(e.target.value);
    console.log(e.target.value)
  };
  
  return (
    <form className="form">
      <label>
        <input id="medicine" value={medicineFilter} name="medicine" type="text" placeholder="Name of medicine" onChange={handleInput} />
        <input type="number" placeholder="Quantity of medicine" />
      </label>
      <div className="form-buttons">
        <button>Add</button>
        <button>Remove</button>
      </div>
    </form>
  );
}

export default Form;
