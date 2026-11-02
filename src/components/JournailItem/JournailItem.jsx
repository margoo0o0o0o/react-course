import './JournailItem.css';

function formatDate(date) {
  if (!date) return '';
  const parsed = new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat('ru-RU').format(parsed);
}

function JournalItem({ item, selected, onClick }) {
  const preview = item.post.replace(/\\s+/g, ' ').trim();

  return (
    <button
      className={`journal-item ${selected ? 'journal-item--selected' : ''}`}
      type="button"
      onClick={onClick}
    >
      <span className="journal-item__title">{item.title}</span>
      <span className="journal-item__meta">
        <span><span className="journal-item__icon">▦</span>{formatDate(item.date)}</span>
        {item.tag && <span><span className="journal-item__icon">◇</span>{item.tag}</span>}
      </span>
      <span className="journal-item__preview">{preview || 'Нет текста заметки'}</span>
    </button>
  );
}

export default JournalItem;