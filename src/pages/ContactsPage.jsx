import { useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectIsError, selectIsLoading } from "../redux/contacts/selectors";
import { slideInFromLeft } from "../motion/motion";
import { motion } from "framer-motion";

const ContactsPage = () => {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  return (
    <motion.div
      exit="exit"
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft()}
    >
      <ContactForm />
      <SearchBox />
      {loading && (
        <h2 className="grid justify-items-center mt-10">
          <span className=" loading loading-spinner text-primary "></span>
        </h2>
      )}
      {error && <h2>Error...</h2>}
      <ContactList />
    </motion.div>
  );
};

export default ContactsPage;
