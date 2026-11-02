import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm({ item, onSave }) {
  const [title, setTitle] = useState(item?.title || '');
  const [date, setDate] = useState(item?.date || new Date().toISOString().slice(0, 10));
  const [tag, setTag] = useState(item?.tag || '');
  const [post, setPost] = useState(item?.post || '');

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    onSave(formProps);
  };

  if (!item && !title && !post && !tag) {
    return (
      <form className="journal-form journal-form--empty" onSubmit={addJournalItem}>
        <div className="journal-form__empty-state">
          <div className="journal-form__empty-icon"><span>▦</span></div>
          <h2>Новое воспоминание</h2>
          <p>Заполните поля, чтобы сохранить новую запись в журнале.</p>
        </div>
        <div className="journal-form__fields">
          <input name="title" type="text" placeholder="Название воспоминания" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <div className="journal-form__row">
            <label className="journal-form__input-wrap"><span className="journal-form__icon">▦</span><input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
            <label className="journal-form__input-wrap"><span className="journal-form__icon">◇</span><input name="tag" type="text" placeholder="Метка" value={tag} onChange={(e) => setTag(e.target.value)} /></label>
          </div>
          <textarea name="post" placeholder="О чём хотите запомнить?" value={post} onChange={(e) => setPost(e.target.value)} rows="12" />
          <div className="journal-form__actions"><Button text="Сохранить" type="submit" /></div>
        </div>
      </form>
    );
  }

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <div className="journal-form__top">
        <input className="journal-form__title" name="title" type="text" placeholder="Название воспоминания" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <button className="journal-form__delete" type="button" aria-label="Очистить форму" onClick={() => { setTitle(''); setTag(''); setPost(''); }}><span>×</span></button>
      </div>
      <div className="journal-form__row journal-form__metadata">
        <label className="journal-form__input-wrap"><span className="journal-form__icon">▦</span><span>Дата</span><input name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
        <label className="journal-form__input-wrap"><span className="journal-form__icon">◇</span><span>Метка</span><input name="tag" type="text" placeholder="Добавить метку" value={tag} onChange={(e) => setTag(e.target.value)} /></label>
      </div>
      <textarea className="journal-form__post" name="post" placeholder="Начните писать..." value={post} onChange={(e) => setPost(e.target.value)} rows="16" />
      <div className="journal-form__actions"><Button text="Сохранить" type="submit" /></div>
    </form>
  );
}

export default JournalForm;