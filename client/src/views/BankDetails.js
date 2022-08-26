import { BranchDetails } from "../components/BranchDetails/BranchDetails";
import { useLocation } from "react-router-dom";
export const BankDetails = () => {
  const location = useLocation();

  return <BranchDetails location={location} />;
};
