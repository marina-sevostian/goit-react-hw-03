import s from './Contact.module.css';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.contactContainer}>
      <div className={s.contactData}>
        <h2 className={s.contactName}>{name}</h2>
        <p className={s.contactPhone}>{number}</p>
      </div>
      <button className={s.contactBtnDelete} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
