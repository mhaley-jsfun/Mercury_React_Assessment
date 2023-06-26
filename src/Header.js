function Header({ onGetJoke }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <button className="get-joke-button" onClick={onGetJoke}>
        Get a New Random Joke
      </button>
      <a className="view-docs" href="/">
        View API Docs
      </a>
    </div>
  );
}

export default Header;
