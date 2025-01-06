import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import { films } from "../../data/films";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Item.css";

export default function Item() {
  const { id } = useParams();
  const findArticle = films.find((p) => p.id === Number(id));

  return (
    <main>
      <Search />
      <section className="content">
        <div className="container">
          <div className="content-box">
            <div className="content-film">
              <div className="content-film__img">
                <img src={findArticle.image} alt={findArticle.title} />
              </div>
              <div className="content-film__info">
                <div className="content-film__info__content">
                  <div className="content-film__info__title">
                    <h1>{findArticle.title},</h1>
                    <p>{findArticle.original}</p>
                  </div>
                  <p className="content-film__info__desc">
                    {findArticle.category}
                  </p>
                  <p className="content-film__info__rating">
                    {findArticle.rating}
                  </p>
                  <p className="content-film__info__text">
                    {findArticle.description}
                  </p>
                </div>
                <div className="content-film__info__controls">
                  <button>Смотреть</button>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
