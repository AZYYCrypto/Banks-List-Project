import { BankList } from "./Views/BankList";
import { BankDetails } from "./Views/BankDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<BankList />} />
          <Route path="/bank-details/:id" element={<BankDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
