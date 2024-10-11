import css from "../HomePage/HomePage.module.css";

export default function HomePage() {
  return (
    <div>
      <h1>
        Welcome to Phonebook <span className={css.wrapper}>App</span>{" "}
      </h1>
    </div>
  );
}
