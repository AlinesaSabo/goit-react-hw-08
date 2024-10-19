import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../redux/contacts/selector";

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading && (
        <h2 className="grid justify-items-center mt-10">
          <span className=" loading loading-spinner text-primary "></span>
        </h2>
      )}
      {error && <h2>Error...</h2>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
