import { useId } from "react";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";


const SearchBox = () => {
  const serchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.container}>
      <label className={css.serchLabel} htmlFor={serchId}>
        Find contacts by name
      </label>
      <input
        className={css.serchInput}
        type="text"
        id={serchId}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
