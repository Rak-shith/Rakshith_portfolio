import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
        <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm text-lt">Rakshith Kotian</h2>
            <p class="main-footer__short-desc">
              A Frontend Web Developer building the Websites
              and Web Applications that leads to the success of the overall
              product. <br/> <br/>
              If you have a good opportunity that
              matches my skills and experience then don't hesitate to 
              <strong> contact </strong> me.
            </p>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h2 class="heading heading-sm text-lt">Address</h2>
            <p class="main-footer__short-desc">
              Place: Udupi, Karnataka <br/>
              Email : kotian412@gmail.com <br/>
              Phone : +91 9535147470 <br/>
            </p>
          </div>
          <div class="main-footer__row main-footer__row-3">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Stay Connected</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rakshith-kotian-7ab14a157/"
              >
                <img
                  class="main-footer__icon"
                  src="https://rakshithkotian-portfolio.netlify.app/images/linkedin.png"
                  alt="Rakshith Linkedin Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Rak-shith/Rak-shith"
              >
                <img
                  class="main-footer__icon"
                  src="https://rakshithkotian-portfolio.netlify.app/images/github.png"
                  alt="Rakshith Github Profile"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/rakshith_kotian_/?hl=en"
              >
                <img
                  class="main-footer__icon"
                  src="https://rakshithkotian-portfolio.netlify.app/images/instagram.png"
                  alt="RammCodes Twitter Profile"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
