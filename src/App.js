import { useState } from "react";
import img from "/src/images/drawers.jpg";
import avatar from "/src/images/avatar-michelle.jpg";
import iconShare from "/src/images/icon-share.svg";
import iconPinterest from "/src/images/icon-pinterest.svg";
import iconTwitter from "/src/images/icon-twitter.svg";
import iconFacebook from "/src/images/icon-facebook.svg";

function App() {
  var [isSocialsOn, setIsSocialsOn] = useState(false);
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
            <button
              onClick={function toggleSocials() {
                if (isSocialsOn) {
                  return setIsSocialsOn(false);
                } else {
                  return setIsSocialsOn(true);
                }
              }}
              className={`article__button ${
                isSocialsOn ? "article__button--toggled" : ""
              }`}
            >
              <svg
                className="article__icon-share"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
              >
                <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
              </svg>
            </button>
            {isSocialsOn ? (
              <ul className="article__socials">
                <li className="article__socials-li">Share</li>
                <li className="article__socials-li">
                  <img
                    className="article_socials-icon"
                    src={iconFacebook}
                    alt="Facebook icon"
                  />
                </li>
                <li className="article__socials-li">
                  <img
                    className="article_socials-icon"
                    src={iconTwitter}
                    alt="Twitter icon"
                  />
                </li>
                <li className="article__socials-li">
                  <img
                    className="article_socials-icon"
                    src={iconPinterest}
                    alt="Pinterest icon"
                  />
                </li>
              </ul>
            ) : (
              ""
            )}
          </footer>
        </div>
      </article>
    </div>
  );
}

export default App;
