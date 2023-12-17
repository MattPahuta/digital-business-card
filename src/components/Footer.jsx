
import TwitterIcon from '../assets/twitter-icon.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="socials-list">
        <li className="social-item">
          <a href="" className="social-link">
            <img src={TwitterIcon} alt="Twitter logo" />
          </a>
        </li>
        <li className="social-item">
          <a href="" className="social-link">
            <img src={TwitterIcon} alt="Twitter logo" />
          </a>
        </li>
        <li className="social-item">
          <a href="" className="social-link">
            <img src={TwitterIcon} alt="Twitter logo" />
          </a>
        </li>
        <li className="social-item">
          <a href="" className="social-link">
            <img src={TwitterIcon} alt="Twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  )
}