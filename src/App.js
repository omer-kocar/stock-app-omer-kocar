import "./App.css";
import medicineContext from "./context/MedicineContext";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className='header'>
      Pharmacy Medicine List</div>
      <medicineContext.Provider>
        <Body />
      </medicineContext.Provider>
    </div>
  );
}

export default App;
