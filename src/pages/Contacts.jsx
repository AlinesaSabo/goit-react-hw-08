import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../redux/contacts/slice";

const Contacts = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading...</h2>}
      {error && <h2>Error...</h2>}
      <ContactList />
    </div>
  );
};

export default Contacts;
