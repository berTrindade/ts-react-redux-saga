import { memo } from 'react';
import { Repository } from '../store/ducks/repositories/types';

interface OwnProps {
    repository: Repository;
}

const RepositoryItem: React.FC<OwnProps> = ({ repository }: OwnProps) => (
  <li>{repository.name}</li>
);

export default memo(RepositoryItem);
