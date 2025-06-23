
import linkedinIcon from '../../images/linkedin.png';
import githubIcon from '../../images/github.png';
import telegramIcon from '../../images/telegram.png';
import gmailIcon from '../../images/gmail.png'
import iphoneIcon from '../../images/iPhone.png'

import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSocial}>
          <p className={styles.footerContactsTitle}>My social profiles:</p>
          <div className={styles.footerSocialLinks}>
            <a 
              target="_blank" 
              href="http://www.linkedin.com/in/andrii-kryzhanivskyi/"
              className={styles.socialLink}
              rel="noopener noreferrer"
            >
              <img 
                className={styles.socialIcon} 
                src={linkedinIcon}
                alt="linkedin" 
                width="25" 
                height="28"
              />
            </a>
            <a 
              target="_blank" 
              href="https://github.com/Kryzhanivskyi89"
              className={styles.socialLink}
              rel="noopener noreferrer"
            >
              <img 
                className={styles.socialIcon} 
                src={githubIcon} 
                alt="github" 
                width="25" 
                height="28" 
              />
            </a>
            <a 
              target="_blank" 
              href="https://t.me/andrew_506"
              className={styles.socialLink}
              rel="noopener noreferrer"
            >
              <img 
                className={styles.socialIcon} 
                src={telegramIcon}
                alt="telegram" 
                width="25" 
                height="28" 
              />
            </a>
          </div>
        </div>

        <div className={styles.footerContacts}>
          <p className={styles.footerContactsTitle}>Contact with me:</p>
          <a 
            href="mailto:kryzhanivskyi.an@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer nofollow" 
            className={styles.footerMail}
          >
            <img 
              className={styles.footerMailIcon} 
              src={gmailIcon} 
              alt="gmail" 
              width="25" 
              height="28" 
            />
            <p>kryzhanivskyi.an@gmail.com</p>
          </a>
          <a 
            href="tel:+380990783060" 
            target="_blank" 
            rel="noopener noreferrer nofollow" 
            className={styles.footerMail}
          >
            <img 
              className={styles.footerMailIcon} 
              src={iphoneIcon} 
              alt="phone" 
              width="25" 
              height="28" 
            />
            <p>+380990783060</p>
          </a>
        </div>
      </div>
      
      <div className={styles.footerBrand}>
        <p className={styles.brandText}>&lt;AndrewDev/&gt;</p>
        <p className={styles.copyright}>© 2025 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;