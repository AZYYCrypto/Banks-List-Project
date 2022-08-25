import BranchDetails from "../components/BranchDetails";
import { useParams } from "react-router-dom";
const BankDetails = () => {
  let { id } = useParams();

  return <BranchDetails />;
};
export default BankDetails;
