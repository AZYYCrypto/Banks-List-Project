import { useEffect, useState } from "react";
import BranchGeneral from "../components/BranchGeneral";
import { Link } from "react-router-dom";
const BankList = () => {
  const [data, setData] = useState(null);
  const url =
    "https://europe-west1-proto-rn-frbs-4242.cloudfunctions.net/loadBranches";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.data[0].Brand[0].Branch));
  }, []);

  return (
    <div className="BankList">
      {data &&
        data.map((el, key) => (
          <div key={key}>
            <Link to={`/bank-details/${el.Identification}`}>
              <BranchGeneral Branch={el} />
            </Link>
          </div>
        ))}
    </div>
  );
};
export default BankList;
