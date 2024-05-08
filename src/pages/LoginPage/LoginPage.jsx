import { Helmet } from "react-helmet-async";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
