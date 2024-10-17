import { useDispatch, useSelector } from "react-redux";

import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/filter/selectors";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.box}>
        <span>Find contacts by name</span>
        <input name="username" type="text" onChange={onChange} value={filter} />
      </label>
    </div>
  );
};

export default SearchBox;
