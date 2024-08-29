import './App.css';
import { AppProvider } from './components/providers/AppProvider';
import { Title } from './components/blocks/Title';

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Title>つぶやき</Title>
      </AppProvider>
    </div>
  );
};

export default App;
