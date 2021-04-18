import { Provider } from 'react-redux';
import store from './components/store';
import { Home } from './pages/index';
import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <Home />
    </Provider>
  </>
);

export default App;
