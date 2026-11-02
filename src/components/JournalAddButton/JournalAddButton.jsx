import './JournalAddButton.css';

function JournalAddButton({ onClick }) {
  return (
    <button className="journal-add-button" type="button" onClick={onClick}>
      <span className="journal-add-button__plus">+</span>
      <span>Новое воспоминание</span>
    </button>
  );
}

export default JournalAddButton;