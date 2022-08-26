import "./BranchGeneral.css";

export const BranchGeneral = ({ Branch }) => {
  return (
    <div className="Branch_General">
      <h3>{Branch.Name}</h3>
      <p>Type: {Branch.Type}</p>
    </div>
  );
};
