import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { Helmet } from "react-helmet-async";
import { fetchAllContacts } from "../../redux/contactsOps";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Contacts Page</title>
      </Helmet>
      <h2 className={css.title}> Contact book</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
