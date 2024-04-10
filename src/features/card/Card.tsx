import { useAppSelector } from '../../app/hooks';
import { selectCards } from './cardSlice';
import './Card.css';
import '../../App.css';

interface cardProps {
  cardId: string;
}

export const Card = ({ cardId }: cardProps) => {
  const currentCard = useAppSelector(selectCards).filter(
    (card) => card.cardId === cardId
  )[0];
  return (
    <div className="card-container">
      <p>{currentCard.title}</p>
    </div>
  );
};
