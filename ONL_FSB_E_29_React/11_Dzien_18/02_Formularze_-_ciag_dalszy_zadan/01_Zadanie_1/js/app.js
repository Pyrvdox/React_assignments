import React, {useState} from "react";
import { createRoot } from "react-dom/client";

const PESELInput = () => {
  const [pesel, setPesel] = useState('');

  const handleInputChange = (e) => {
    setPesel(e.target.value);

    if (value.length === 11 && /^\d+$/.test(value)) {
      setPesel(value);
    } else {
      setPesel('');
    }
  };

  return (
    <form>
      <input type='text' value={pesel} onChange={handleInputChange} />
      <div>
        {pesel.length === 11 ? (
          <input type="submit" value="Prześlij" />
        ) : (
          <p>Niepoprawny numer PESEL</p>
        )}
      </div>
    </form>
  );
};

const App = () => {
  return <PESELInput />
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
