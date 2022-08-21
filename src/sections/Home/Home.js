import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <section class="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hello, I'm <br/> <span class="hero-name">Rakshith Kotian</span></h1>
        <div class="home-hero__info">
          <p class="text-primary">
            A focused Frontend Web Developer. 
          </p>
        </div>
      </div> 
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a
            href="https://www.linkedin.com/in/rakshith-kotian-7ab14a157/"
            class="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://rakshithkotian-portfolio.netlify.app/images/linkedin.png"
              alt="Rakshith Linkedin Profile"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://www.instagram.com/rakshith_kotian_/?hl=en"
            class="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://rakshithkotian-portfolio.netlify.app/images/instagram.png"
              alt="Rakshith Twitter Profile"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://app.netlify.com/teams/rak-shith/overview"
            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://rakshithkotian-portfolio.netlify.app/images/netlify.png"
              alt="Netlify page"
              class="home-hero__social-icon"
            />
          </a>
        </div>
        <div class="home-hero__social">
          <a
            href="https://github.com/Rak-shith/Rak-shith"
            class="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://rakshithkotian-portfolio.netlify.app/images/github.png"
              alt="Rakshith Github Profile"
              class="home-hero__social-icon"
            />
          </a>
        </div>

        <div class="home-hero__social">
          <a
            href="https://1lib.in/"
            class="home-hero__social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/e978c8491d93813aa00b3dc80b9abfb0d64a9086/3c187/assets/svg/book-dark.svg"
              alt="RammCodes DEV.to Blog Profile"
              class="home-hero__social-icon"
            />
          </a>
        </div>
      </div>
      
    </section>
    </>
  );
}

export default Home;
