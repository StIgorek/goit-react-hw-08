import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const selectNameFilter = useSelector(selectFilters);
  const dispatch = useDispatch();

  const changeFilter = (value) => {
    dispatch(filter(value));
  };

  return (
    <div className={css.container}>
      <div className={css.text}>Find contacts by name</div>
      <input
        type="text"
        className={css.input}
        value={selectNameFilter}
        onChange={(evt) => changeFilter(evt.target.value)}
      />
    </div>
  );
}
