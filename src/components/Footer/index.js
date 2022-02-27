import React from "react";
//import coverImage from "../../assets/cover/cover-image.jpg";
//import coverImage from "../../assets/bubble_framed_pike_pic.png";
import gitIcon from "../../assets/github_icon.png";
import linkedIcon from "../../assets/linkedin_icon_bubble.png";
import mailIcon from "../../assets/mail_icon_bubble.png";
import phoneIcon from "../../assets/phone_icon_bubble.png";

function Footer() {
  return (
    <section id="contact-container">
      <div>
        <div className="flex-row space-evenly">
          <h4>Contact Me:</h4>
        </div>

        <div class="contact flex-row space-evenly">
          <div>
            <a href="tel:+1-517-599-1138">
              <img
                //src="../../assets/images/phone_icon_bubble.png"
                src={phoneIcon}
                height="30"
                width="30"
              />
              <span p>517-599-1138</span>
            </a>
          </div>

          <div>
            <a href="mailto:tg.tiburon@gmail.com">
              {" "}
              <img src={mailIcon} height="30" width="30" />
              <span p> tg.tiburon@gmail.com </span>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/tony-gendreau-503309223/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIcon} height="30" width="30" />
              <span p> Linkedin </span>
            </a>
          </div>

          <div>
            <a href="https://tgtiburon.github.io/portfolio/">
              <img src={gitIcon} height="30" width="30"></img>
              <span p> Github </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
