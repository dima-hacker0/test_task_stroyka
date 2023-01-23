import classes from "./recommendations.module.css";

const RecProduct = ({
  image,
  name,
  countPeople,
  prevPrice,
  newPrice,
  characteristics,
}) => {
  characteristics = characteristics.map((item, i) => {
    return (
      <li key={i} className={classes.characteristics__item}>
        <p className={classes.characteristic}>{item.characteristic}</p>
        <p className={classes.characteristicValue}>{item.value}</p>
      </li>
    );
  });
  return (
    <div className={classes.recProduct}>
      <img src={image} alt="product_image" />
      <div className={classes.description}>
        <p className={classes.name}>{name}</p>
        <p className={classes.countPeople}>Дo {countPeople} человек</p>
        <div className={classes.prices}>
          <p className={classes.prices__prev}>{prevPrice}</p>
          <p className={classes.prices__new}>{newPrice}</p>
        </div>
        <ul className={classes.characteristics}>{characteristics}</ul>
      </div>
    </div>
  );
};

export default RecProduct;
