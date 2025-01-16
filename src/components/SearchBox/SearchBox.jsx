import s from './SearchBox.module.css';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <div className={s.inputContainer}>
        <FaMagnifyingGlass className={s.icon} size="20" />
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
