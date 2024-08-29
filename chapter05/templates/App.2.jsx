import './App.css';
import { AppProvider } from './components/providers/AppProvider';
import { Title } from './components/blocks/Title';
import { Header } from './components/blocks/Header';
import { Tweets } from './components/blocks/Tweets';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Title>つぶやき</Title>
        <Header />
        <Tweets />
      </AppProvider>
    </div>
  );
};

export default App;
