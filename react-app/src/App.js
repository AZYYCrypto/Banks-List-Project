import "./App.css";
import BankList from "./views/BankList";
import BankDetails from "./views/BankDetails";
import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [heading, setHeading] = useState(null);
  const url =
    "https://europe-west1-proto-rn-frbs-4242.cloudfunctions.net/loadBranches";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setHeading(result.data[0].Brand[0].BrandName));
  }, []);
  return (
    <div className="App">
      <h1>{heading}</h1>
      <Routes>
        <Route path="/" element={<BankList />} />
        <Route path="/bank-details/:id" element={<BankDetails />} />
      </Routes>
    </div>
  );
}
