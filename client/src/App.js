import { BankList } from "./views/BankList";
import { BankDetails } from "./views/BankDetails";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BankList />} />
          <Route path="/bank-details/:id" element={<BankDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
