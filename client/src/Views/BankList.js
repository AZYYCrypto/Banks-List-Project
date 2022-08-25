import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const BankList = () => {
  const [banks, setBanks] = useState();

  const banksUrl =
    "https://europe-west1-proto-rn-frbs-4242.cloudfunctions.net/loadBranches";

  useEffect(() => {
    fetch(banksUrl)
      .then((res) => res.json())
      .then((res) => setBanks(res.data[0].Brand[0].Branch));
  }, []);
  return (
    <div className="BankList">
      {banks &&
        banks.map((el, key) => (
          <div key={key}>
            <Link to={`/bank-details/${el.Identification}`} state={{ el }}>
              <div>{el.Name}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};
