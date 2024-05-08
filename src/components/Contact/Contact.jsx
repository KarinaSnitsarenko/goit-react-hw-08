import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { apiDeleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = (userId) => {
    dispatch(apiDeleteContact(userId));
  };
  return (
    <li className={css.contactItem}>
      <div className={css.container}>
        <p className={css.textContainer}> 👤 {name}</p>
        <p className={css.textContainer}> 📞 {number}</p>
      </div>
      <div className={css.container}>
        <button
          className={css.contactButon}
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete ❌
        </button>
      </div>
    </li>
  );
};

export default Contact;
