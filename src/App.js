import "./App.css";
import medicineContext from "./context/MedicineContext";
import MedicineList from "./components/MedicineList"


function App() {
  return (
    <div className="App">
      <div className='header'>
      Pharmacy Medicine List</div>
      <medicineContext.Provider>
        <MedicineList />
       
      </medicineContext.Provider>
      
    </div>
  );
}

export default App;
