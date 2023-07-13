import logo from "./logo.svg";
import "./App.css";
import AccountCreationForm from "./components/AccountCreationForm";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [skinModels, setSkinModels] = useState([
    {
      description: "Epidermal Model",
      additionalInformation:
        "Used for studying skin barrier function, drug permeation, and toxicity testing",
      cellOrigin: "Keratinocytes",
      quantity: 0,
    },
    {
      description: "Full Thickness Model",
      additionalInformation:
        "Used for studying wound healing, skin aging, and skin cancer",
      cellOrigin: "Fibroblasts",
      quantity: 0,
    },
    {
      description: "Pigmented Model",
      additionalInformation:
        "Used for studying the effects of UV radiation on skin pigmentation and the development of skin cancer",
      cellOrigin: "Melanocytes",
      quantity: 0,
    },
    {
      description: "Full Thickness Model with Langerhans Cells",
      additionalInformation:
        "Used for studying immune responses in the skin and the development of skin diseases",
      cellOrigin: "Langerhans cells",
      quantity: 0,
    },
  ]);
  const changeSkinModel = (_skin_models) => {
    setSkinModels(_skin_models);
  };
  return (
    <div className="App">
      <Navbar />
      <AccountCreationForm
        skinModels={skinModels}
        changeSkinModel={changeSkinModel}
      />
    </div>
  );
}

export default App;
