import { useState, useEffect } from "react";
import "./Header.css";
export const Header = () => {
  const [heading, setHeading] = useState();
  const url =
    "https://europe-west1-proto-rn-frbs-4242.cloudfunctions.net/loadBranches";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setHeading(result.data[0].Brand[0].BrandName));
  }, []);

  return (
    <header>
      <h1>{heading}</h1>
    </header>
  );
};
