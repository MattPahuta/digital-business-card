import TwitterIcon from '../assets/twitter-icon.svg'
import InstagramIcon from '../assets/instagram-icon.svg'
import GitHubIcon from '../assets/github-icon.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="socials-list">
        <li className="social-item">
          <a href="https://twitter.com/MattPahuta" className="social-link" target="true">
            <img src={TwitterIcon} alt="Twitter logo" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://instagram.com/MattPahuta" className="social-link" target="true">
            <img src={InstagramIcon} alt="Instagram logo" />
          </a>
        </li>
        <li className="social-item">
          <a href="https://github.com/MattPahuta" className="social-link" target="true">
            <img src={GitHubIcon} alt="Github logo" />
          </a>
        </li>
      </ul>
    </footer>
  )
}