import './CardButton.css';

function CardButton({ children }) {
  return (
    <button className="card-button" type="button">
      {children}
    </button>
  );
}

export default CardButton;