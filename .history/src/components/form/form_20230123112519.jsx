import classes from "./form.module.css";
import generalClasses from "../../generalClasses.module.css";

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
            <input className={generalClasses.formInput} type="text" />
            <input className="formInput" type="text" />
            <input className={classes.form__inputQuestion} type="text" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
