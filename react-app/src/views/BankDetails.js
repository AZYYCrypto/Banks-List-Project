import { useState, useEffect, useContext } from "react";
import axios from "axios";
import BranchDetails from "../components/BranchDetails";
import { useParams } from "react-router-dom";
const BankDetails = () => {
  const [bank, setBank] = useState();
  useEffect(() => {
    axios
      .get(
        "https://europe-west1-proto-rn-frbs-4242.cloudfunctions.net/loadBranches"
      )
      .then((res) => setBank(res.data.data[0].Brand[0].Branch));
  }, []);

  let { id } = useParams();

  return <BranchDetails Bank={bank} id={id} />;
};
export default BankDetails;
