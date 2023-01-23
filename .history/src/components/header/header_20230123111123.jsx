import classes from "./header.module.css";
import logo from "../../png/logo.png";
import Svg from "../../svg";
import generalClasses from "../../generalClasses.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.content}`}>
        <div className={classes.upperHeader}>
          <img className={classes.logo} src={logo} alt="logo" />
          <div className={classes.workingHours}>
            <p>Пн-Сб: c 10:00 до 20:00</p>
            <p>Выходной: воскресенье</p>
          </div>
          <div className={classes.orderLayoutBlock}>
            <div className={classes.wrapperModelSvg}>
              <Svg name="3d"></Svg>
            </div>
            <p className={classes.orderLayoutBlock__text}>
              Заказать 3D-макет дома
            </p>
          </div>
          <div className={classes.socialMediaBlock}>
            <div className={classes.wrapperTelephoneSvg}>
              <Svg name="telephone"></Svg>
              <div className={classes.wrapperTelephoneSvg__shadow}></div>
            </div>
            <div className={classes.blockNumberSocMedia}>
              <p className={classes.phoneNumber}>+7 (915) 168-55-50</p>
              <ul className={classes.messengers}>
                <li>
                  <Svg name="messenger1"></Svg>
                </li>
                <li>
                  <Svg name="messenger2"></Svg>
                </li>
                <li>
                  <Svg name="messenger3"></Svg>
                </li>
              </ul>
            </div>
          </div>
          <button className={classes.orderCallButton}>Заказать звонок</button>
        </div>
        <div className={classes.lowerHeader}>
          <ul className={classes.pages}>
            <li className={classes.pages__item}>Католог домов</li>
            <li className={classes.pages__item}>Услуги</li>
            <li className={classes.pages__item}>О нас</li>
            <li className={classes.pages__item}>Контакты</li>
            <li className={classes.pages__item}>Блог</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
