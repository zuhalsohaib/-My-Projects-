function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>◉</span> net<span className="red">links</span>
      </div>

      <div className="menu">
        <a href="#">Solutions⌄</a>
        <a href="#">Services⌄</a>
        <a href="#">Industries⌄</a>
        <a href="#">Partners</a>
        <a href="#">Company⌄</a>
      </div>

      <button className="start-btn">Get started ↗</button>
    </nav>
  );
}

export default Navbar;
