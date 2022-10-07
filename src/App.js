import { useState } from "react";
import img from "/src/images/drawers.jpg";
import avatar from "/src/images/avatar-michelle.jpg";
import iconShare from "/src/images/icon-share.svg";

function App() {
  return (
    <div className="article__wrapper">
      <article className="article">
        <img className="article__img" src={img} alt="Green drawer" />
        <div className="article__container">
          <main className="article__main">
            <h1 className="article__title">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="article__text">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </main>
          <footer className="article__footer">
            <img
              className="article__avatar"
              src={avatar}
              alt="Avatar of Michelle Appleton"
            />
            <div className="article__info">
              <h2 className="article__author">Michelle Appleton</h2>
              <time dateTime="2020-05-28" className="article__date">
                28 Jun 2020
              </time>
            </div>
            <button className="article__button js-socials">
              <img
                className="article__icon-share"
                src={iconShare}
                alt="share icon"
              />
            </button>
          </footer>
          <ul className="article__socials hidden">Share</ul>
        </div>
      </article>
    </div>
  );
}

export default App;
