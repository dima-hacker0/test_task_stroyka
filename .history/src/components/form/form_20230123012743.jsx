import classes from "./form.module.css";

const Form = () => {
  return (
    <section className={classes.formSection}>
      <div className={classes.formSection__container}>
        <div>
          <h3 className={classes.formSection__header}>
            Не нашли то, что искали?
          </h3>
          <p className={classes.fillFormText}>
            Заполните форму и мы перезвоним вам в течение 30 минут!
          </p>
          <form className={classes.form}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
