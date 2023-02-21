import { FC, useState } from 'react';

interface ISortDropdownProps {
  selected: string;
  filters: { id: string; text: string; }[];
  setFilter: (filter: string) => void;
}

const SortDropdown: FC<ISortDropdownProps> = ({ selected, filters, setFilter }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className='sort-item'>
      <button
        className='sort-main-button'
        type='button'
        onClick={() => setIsListOpen(!isListOpen)}
      >Sort By
      </button>
      <ul>
        {isListOpen && filters.map(({ id, text }) => (
          <li key={id} className={selected === id ? 'selected-filter' : ''}>
            <button
              className='sort-button'
              type='button'
              onClick={() => setFilter(id)}
            >{text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortDropdown;
