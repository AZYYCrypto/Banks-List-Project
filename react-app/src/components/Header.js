const Header = () => {
  return (
    <header>
      <h1>{heading}</h1>
      <button type="click">
        <Link to={"/bank-list"}>Bank-List</Link>
      </button>
    </header>
  );
};

export default Header;
