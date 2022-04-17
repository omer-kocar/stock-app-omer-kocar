import { useState, useEffect } from "react";

function Form(props) {
  const [medicineFilter, setMedicineFilter] = useState("");
  const [ change, setChange] = useState();

  const handleInput = (e) => {
    e.preventDefault();
    setMedicineFilter(e.target.value);
    console.log(e.target.value)
  };

  
  return (
    <form className="form">
      <label>
        <input id="medicine" value={medicineFilter} name="medicine" type="text" placeholder="Name of medicine" onChange={handleInput} />
        <input type="number" onChange={(e)=>{setChange(e.target.value)}} placeholder="Quantity of medicine" />
      </label>
      <div className="form-buttons">
        <button type="button" onClick={()=>{props.addNewMedicine(medicineFilter, change)}} >Add</button>
        <button type="button" onClick={()=>{props.removeMedicine(medicineFilter, change)}} >Remove</button>
      </div>
    </form>
  );
}

export default Form;
