import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournailItem from './components/JournailItem/JournailItem'; 
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';

const initialData = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    date: '2025-12-31',
    tag: 'Обучение',
    post: 'Сегодня провёл весь день за подготовкой материалов для новых курсов. Хочу сделать программу более интересной и полезной.'
  },
  {
    id: 2,
    title: 'Поход в горы',
    date: '2025-06-21',
    tag: 'Спорт',
    post: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя частью удивительного мира.\n\nРазличают одиночный и групповой туризм. Если в альпинизме главная цель — покорение вершины, то горный туризм — это длительное путешествие в горах, связанное с преодолением многочисленных препятствий.\n\nПоход по горам — это следование определённому, заранее продуманному маршруту через ущелья, перевалы, долины и ледники.'
  },
  {
    id: 3,
    title: 'Первая заметка',
    date: '2025-04-11',
    tag: 'Личное',
    post: 'Создал первую заметку, чтобы записывать важные мысли и события.'
  }
];


function App() {
  const [data, setData] = useState(initialData);
  const [selectedId, setSelectedId] = useState(2);
  const [isCreating, setIsCreating] = useState(false);

  const selectedItem = data.find((item) => item.id === selectedId) || null;

  const createJournalItem = () => {
    setIsCreating(true);
    setSelectedId(null);
  };

  const selectJournalItem = (id) => {
    setSelectedId(id);
    setIsCreating(false);
  };

  const saveJournalItem = (formProps) => {
    if (!formProps.title.trim()) return;

    if (isCreating || !selectedItem) {
      const newItem = {
        id: Date.now(),
        title: formProps.title,
        date: formProps.date,
        tag: formProps.tag,
        post: formProps.post
      };
      setData((current) => [newItem, ...current]);
      setSelectedId(newItem.id);
      setIsCreating(false);
      return;
    }

    setData((current) =>
      current.map((item) =>
        item.id === selectedId
          ? { ...item, ...formProps }
          : item
      )
    );
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton onClick={createJournalItem} />
        <JournalList>
          {data.map((item) => (
            <JournailItem
              key={item.id}
              item={item}
              selected={item.id === selectedId && !isCreating}
              onClick={() => selectJournalItem(item.id)}
            />
          ))}
        </JournalList>
      </LeftPanel>

      <Body>
        <JournalForm
          key={isCreating ? 'new' : selectedItem?.id || 'empty'}
          item={isCreating ? null : selectedItem}
          onSave={saveJournalItem}
        />
      </Body>
    </div>
  );
}

export default App;