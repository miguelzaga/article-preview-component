import { useState } from "react";

function App() {
  return (
    <article className="article">
      <img className="article__img-top" src="" alt="" />
      <div className="article__main">
        <h1 className="article__title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="article__text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </div>
      <div className="article__author">Michelle Appleton 28 Jun 2020</div>
      <ul className="article__socials">Share</ul>
    </article>
  );
}

export default App;
