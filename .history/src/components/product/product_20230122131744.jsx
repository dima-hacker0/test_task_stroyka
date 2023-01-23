import Svg from "../../svg";
import classes from "./product.module.css";

const Product = ({ name, images, characteristics }) => {
  const imagesArr = images.map((item) => (
    <li>
      <img className={classes.image} src={item} alt="product_photo" />
    </li>
  ));

  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photosProduct}>
        <div className={classes.photosSlider}>
          <ul className={classes.photosSlider__content}>{imagesArr}</ul>
        </div>
        <div className={classes.mainPhotoBlock}>
          <img className={classes.mainPhoto} src={images[1]} alt="main_photo" />
          <div className={classes.svgWrapper}>
            <Svg name="magnifier"></Svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
