import s from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.contactContainer}>
      <div className={s.contactData}>
        <h2 className={s.contactName}>
          <IoPerson size="20" />
          {name}
        </h2>
        <p className={s.contactPhone}>
          <FaPhoneAlt size="20" />
          {number}
        </p>
      </div>
      <button className={s.contactBtnDelete} onClick={() => onDelete(id)}>
        <MdDelete size="20" />
        Delete
      </button>
    </div>
  );
};

export default Contact;
