import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="content-sidebar">
      <div className="content-sidebar__info">
        <h4 className="content-sidebar__info--title">
          Подборки фильмов и сериалов
        </h4>
        <div className="content-sidebar__info__wrapper">
          <div className="content-sidebar__info__item">
            <h5>Топ-250</h5>
            <p>Подборка фильмов и сериалов с наивысшими оценками зрителей</p>
          </div>
          <div className="content-sidebar__info__item">
            <h5>Посмеяться от души</h5>
            <p>Подборка комедий, которые помогут расслабиться после работы</p>
          </div>
          <div className="content-sidebar__info__item">
            <h5>Запутанный сюжет</h5>
            <p>
              Триллеры и прключения с запутанным и интересным сюжетом.
              Невозможно оторваться!
            </p>
          </div>
        </div>
      </div>
      <div className="content-sidebar__footer">
        <p>© ООО «Неткликс», 2024</p>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Обработка персональных данных</a>
      </div>
    </div>
  );
}
