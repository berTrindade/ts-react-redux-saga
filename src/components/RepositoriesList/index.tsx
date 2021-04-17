import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ApplicationState } from '../store';
import RepositoryItem from '../RepositoryItem';
import { loadRequest } from '../store/ducks/repositories/actions';

const RepositoriesList: React.FC = () => {
  const { data } = useSelector((state: ApplicationState) => state.repositories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <ul>
      {data.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  );
};

export default RepositoriesList;
