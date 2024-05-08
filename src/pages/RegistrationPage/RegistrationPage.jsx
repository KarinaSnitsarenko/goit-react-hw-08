import { Helmet } from "react-helmet-async";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Registration Page</title>
      </Helmet>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
