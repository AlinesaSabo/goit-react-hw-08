import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";

import { motion } from "framer-motion";
import { slideInFromBot } from "../../motion/motion";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBot(1)}
      className={s.wrapper}
    >
      <label className={s.box}>
        <span>Find contacts by name</span>
        <input name="username" type="text" onChange={onChange} value={filter} />
      </label>
    </motion.div>
  );
};

export default SearchBox;
