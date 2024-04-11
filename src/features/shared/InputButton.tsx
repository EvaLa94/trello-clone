import { useState, useRef, useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import './InputButton.css';
import { ListItemType } from '../listItem/listItemSlice';
import { CardType } from '../card/cardSlice';
import { DashboardType } from '../dashboard/dashboardSlice';

interface InputButtonProps {
  target: string;
  callback: Function; // TODO: set a proper type
  data: ListItemType | CardType | DashboardType;
}
export const InputButton = ({ target, callback, data }: InputButtonProps) => {
  const [value, setValue] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, [isHidden]);

  const onClick = () => {
    dispatch(callback({ ...data, title: value }));
    setValue('');
    setIsHidden(false);
  };

  const toggleHidden = () => setIsHidden(!isHidden);

  return (
    <div>
      <h2 className="input-title" hidden={isHidden} onClick={toggleHidden}>
        + Add a {target}
      </h2>
      <div>
        <input
          ref={inputRef}
          hidden={!isHidden}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="option-btns">
        <button hidden={!isHidden} onClick={onClick} className="add-btn">
          Add {target}
        </button>
        <button
          hidden={!isHidden}
          onClick={toggleHidden}
          className="cancel-btn"
        >
          X
        </button>
      </div>
    </div>
  );
};
