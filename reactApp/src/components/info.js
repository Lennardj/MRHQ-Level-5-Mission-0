import styles from "../styles/Info.module.css";
import logo from "../images/logo.png";
function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.topsection}>
        <h1>
          We Don't Just Clean <br />
          We Make It Sparkle
        </h1>
        <div>
          <img className={styles.img} src={logo} alt="photo" />
        </div>
      </div>
      <div className={styles.bottomsection}>
        <div>
          <input type="text" placeholder="Deep clean, pressure wash"></input>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Info;
