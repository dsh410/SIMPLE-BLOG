const NavBar = ({ title }) => {
  return (
    <div className="menu">
      <h3 className=" title">
        {" "}
        {title}
        <a href="#" className="log glow link">
          Login
        </a>
        <a href="#" className="sign glow link">
          Signup
        </a>
      </h3>
    </div>
  );
};

export default NavBar;
