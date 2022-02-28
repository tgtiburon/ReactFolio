import React from "react";
// Import images
import gitIcon from "../../assets/github_icon.png";
import linkedIcon from "../../assets/linkedin_icon_bubble.png";
import mailIcon from "../../assets/mail_icon_bubble.png";
import phoneIcon from "../../assets/phone_icon_bubble.png";
import stackOverflow from "../../assets/stackOverflow.png";

function Footer() {
  return (
    <section id="contact-container">
      <div>
        <div className="flex-row space-evenly">
          <h1>Contact Me:</h1>
        </div>

        <div className="contact flex-row space-evenly">
          <div>
            <a href="tel:+1-517-599-1138">
              <img src={phoneIcon} height="30" width="30" alt="" />
              <span p>517-599-1138</span>
            </a>
          </div>

          <div>
            <a href="mailto:tg.tiburon@gmail.com">
              <img src={mailIcon} height="30" width="30" alt="" />
              <span p> tg.tiburon@gmail.com </span>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/tony-gendreau-503309223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIcon} height="30" width="30" alt="" />
              <span p> Linkedin </span>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/tgtiburon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitIcon} height="30" width="30" alt=""></img>
              <span p> Github </span>
            </a>
          </div>
          <div>
            <a
              href="https://stackoverflow.com/users/17146519/tgtiburon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={stackOverflow} height="30" width="30" alt=""></img>
              <span p> Stack Overflow </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
