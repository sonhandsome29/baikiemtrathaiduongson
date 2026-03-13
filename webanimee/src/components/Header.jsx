function Header() {
  return (
    <header className="header">
      <h1 className="logo">Anonime</h1>

      <nav className="nav">
        <a className="nav-link" href="#home">
          Home
        </a>
        <a className="nav-link" href="#list-anime">
          List anime
        </a>
      </nav>

      <input
        className="search-input"
        aria-label="Search anime or movie"
        type="text"
        placeholder="Search anime or movie"
      />
    </header>
  );
}

export default Header;
