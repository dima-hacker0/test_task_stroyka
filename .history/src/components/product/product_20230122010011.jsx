import classes from "./product.module.css";

const Product = ({ name, images }) => {
  return (
    <section className={`container ${classes.productBlock}`}>
      <h3 className={classes.productName}>{name}</h3>
      <div className={classes.photoProduct}></div>
    </section>
  );
};
export default Product;
