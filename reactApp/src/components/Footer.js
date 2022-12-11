import styles from "../styles/Footer.module.css";
import logo from "../images/SM/Facebook.png";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="small logo" />

      <h2>Address</h2>
      <p>Flat 1, 2 Rangitira Avenue, Takapuna, Auckland, 0622, NZ</p>
    </div>
  );
}

export default Footer;
