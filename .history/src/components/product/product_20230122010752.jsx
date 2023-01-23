import classes from "./product.module.css";

const Product = ({ name, images }) => {
  images = images.map((item) => (
    <li>
      <img src={item} alt="product_photo" />
    </li>
  ));
  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photosProduct}>
        <div className={classes.photosSlider}>
          <ul className={classes.photosContent}>{images}</ul>
        </div>
      </div>
    </section>
  );
};

export default Product;
