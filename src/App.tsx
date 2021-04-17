import { Provider } from 'react-redux';
import store from './components/store';
import RepositoryList from './components/RepositoriesList';

const App: React.FC = () => (
  <Provider store={store}>
    <RepositoryList />
  </Provider>
);

export default App;
