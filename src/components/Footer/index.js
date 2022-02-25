import React from "react";
//import coverImage from "../../assets/cover/cover-image.jpg";
//import coverImage from "../../assets/bubble_framed_pike_pic.png";
import gitIcon from "../../assets/github_icon.png";
import linkedIcon from "../../assets/linkedin_icon_bubble.png";
import mailIcon from "../../assets/mail_icon_bubble.png";
import phoneIcon from "../../assets/phone_icon_bubble.png";

function Footer() {
  return (
    <section
      id="contact-me"
      class="contact flex-row justify-space-between"
    >
      <div>
        <h4>Contact Me:</h4>
      </div>
      <div>
        <img
          //src="../../assets/images/phone_icon_bubble.png"
          src={phoneIcon}
          height="30"
          width="30"
        />
        <span>517-599-1138</span>
      </div>

      <div>
        <img
          //src="../../assets/images/mail_icon_bubble.png"
          src={mailIcon}
          height="30"
          width="30"
        />
        <a href="mailto:tg.tiburon@gmail.com">tg.tiburon@gmail.com</a>
      </div>

      <div>
        <img
          //src="../../assets/images/linkedin_icon_bubble.png"
          src={linkedIcon}
          height="30"
          width="30"
        />

        <a
          href="https://www.linkedin.com/in/tony-gendreau-503309223/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div>
        {/* <img src="../../assets/images/github_icon.png" height="30" width="30" /> */}
        <img src={gitIcon} height="30" width="30"></img>
        <a href="https://tgtiburon.github.io/portfolio/">Portfolio</a>
      </div>
    </section>
  );
}

export default Footer;
