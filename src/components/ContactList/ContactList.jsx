import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";

import { motion } from "framer-motion";
import { slideInFromBot } from "../../motion/motion";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBot(1.3)}
      className={s.wrapper}
    >
      <ul className={s.contact}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </motion.div>
  );
};

export default ContactList;
