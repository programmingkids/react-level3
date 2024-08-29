import './App.css';
import { Title } from './components/blocks/Title';
import { useGetItems } from './components/hooks/useGetItems';

const App = () => {
  const { items, onClickGetItems } = useGetItems();

  return (
    <div className="App">
      <Title>アイテム取得</Title>
      <div>
        <button onClick={onClickGetItems}>アイテム取得</button>
        <div>
          {items.map((item) => (
            <p key={item.id}>
              {item.id} : {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
