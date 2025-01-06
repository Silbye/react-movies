import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <div className="header-logo">
            <h1>NETKLIKS</h1>
            <p>всё о сериалах</p>
          </div>
          <div className="header-controls">
            <a href="#">Вход и регистрация</a>
          </div>
          <div className="header-controls--mob">
            <img src="./img/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
    </header>
  );
}
