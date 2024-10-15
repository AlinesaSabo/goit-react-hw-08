import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <ul className={s.contact}>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
