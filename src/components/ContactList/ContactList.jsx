import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { nanoid } from 'nanoid';

const ContactList = ({ dataListContact, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {dataListContact.map(data => (
        <li className={s.contactItem} key={nanoid()}>
          <Contact data={data} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
