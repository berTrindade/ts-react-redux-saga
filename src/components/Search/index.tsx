import {
  ChangeEvent,
  FormEvent, useCallback, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { loadRequest } from '../store/ducks/repositories/actions';
import { Container } from './styles';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleInputChanges = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setUsername(value);
  };

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    dispatch(loadRequest(username));
  }, [dispatch, username]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="input"
          placeholder="Nome do usuário"
          value={username}
          onChange={(e) => handleInputChanges(e)}
        />
        <button
          className="submit-button"
          aria-label="Submit"
          type="submit"
          disabled={!username}
        >
          Pesquisar
        </button>
      </form>
    </Container>
  );
};

export default Search;
