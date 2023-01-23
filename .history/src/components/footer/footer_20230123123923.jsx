import classes from "./footer.module.css";
import generalClasses from "../../generalClasses.module.css";
import logo from "../../png/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`${generalClasses.container} ${classes.footer__content}`}>
        <div className={classes.footer__1column}>
          <img className={classes.firstLogo} src={logo} alt="logo" />
          <button className={classes.buttonOrderCall}>Заказать звонок</button>
        </div>
        <div className={classes.footer__2column}>
          <nav className={classes.navigation}>
            <ul className={classes.navigation__1column}>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
            </ul>
            <ul className={classes.navigation__2column}>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
              <li className={classes.navigation__item}></li>
            </ul>
          </nav>
        </div>
        <div className={classes.footer__3column}></div>
      </div>
    </footer>
  );
};

export default Footer;
