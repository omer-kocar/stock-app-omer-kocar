import React, { useContext, useState } from "react";
import medicineContext from "../context/MedicineContext";
import Form from "./Form";

function MedicineList() {
  const medicines = [
    // Static list of medicines
    { name: "ALDOLAN ", quantity: 89, price: 20, value: 1 },
    { name: "BİTERAL", quantity: 12, price: 30, value: 2 },
    { name: "AKİNETON", quantity: 100, price: 10, value: 3 },
    { name: "DİDERAL", quantity: 93, price: 40, value: 4 },
    { name: "ALPHAN D3 TAB", quantity: 123, price: 50, value: 5 },
    { name: "CİFLOSİN", quantity: 542, price: 60, value: 6 },
    { name: "KETALAR", quantity: 44, price: 23, value: 7 },
    { name: "LASONİL", quantity: 23, price: 5, value: 8 },
    { name: "PANTENOL", quantity: 74, price: 17, value: 9 },
  ];

  const [medicineItems, setMedicineItems] = useState(medicines);

  function addNewMedicine(medicineFilter, change) {
    const existMedicine = medicineItems.find(
      (medicine) => medicine.name === medicineFilter.name
    );
    if (existMedicine === undefined) {
      setMedicineItems(...medicineItems, {
        name: medicineFilter,
        quantity: change,
      });
    } else {
      console.log();
    }
  }
  function removeMedicine(medicineFilter, change) {}
  return (
    <div>
      <Form addNewMedicine={addNewMedicine} removeMedicine={removeMedicine} />
      <div className="table-container">
        <div className="stock-left">
          <h3>
            Total Medicines in inventory:
            {function sumOfMedicines() {
              const quantity = medicines.quantity;
              quantity.forEach((item) => {
                item += item;
                console.log(item);
              });
            }}
            {}
          </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Medicine</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          {medicineItems.map((item, index) => {
            // console.log(item);
            // console.log(index)
            return (
              <tbody key={item.name}>
                <tr>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}$</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default MedicineList;
