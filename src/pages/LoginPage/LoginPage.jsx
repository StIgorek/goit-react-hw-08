import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../LoginPage/LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.wrapper}>
      <LoginForm />
    </div>
  );
}
