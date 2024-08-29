import './App.css';
import { AppProvider } from './components/providers/AppProvider';
import { Title } from './components/blocks/Title';
import { Header } from './components/blocks/Header';
import { Tweets } from './components/blocks/Tweets';
import { AddForm } from './components/blocks/AddForm';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Title>つぶやき</Title>
        <Header />
        <AddForm />
        <Tweets />
      </AppProvider>
    </div>
  );
};

export default App;
