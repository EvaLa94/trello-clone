import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { EditableTypes } from '../types';

interface EditableTitleProps {
  callback: Function; // TODO: set a proper type
  data: EditableTypes;
}

export const EditableTitle = ({ callback, data }: EditableTitleProps) => {
  const [text, setText] = useState(data.title);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setText(data.title);
  }, [data]);

  const onClick = () => {
    setIsEdit(true);
  };

  const onBlur = () => {
    dispatch(callback({ ...data, title: text }));
    setIsEdit(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <>
      {isEdit ? (
        <input value={text} onBlur={onBlur} onChange={onChange} autoFocus />
      ) : (
        <h1 onClick={onClick}>{text}</h1>
      )}
    </>
  );
};
