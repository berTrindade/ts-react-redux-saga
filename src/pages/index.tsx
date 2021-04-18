/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
import { useSelector } from 'react-redux';
import { DataTable } from '../components/layout';
import { ApplicationState } from '../components/store';
import RepositoryItem from '../components/RepositoryItem';
import { Container, OwnerContainer } from '../styles/styles';
import avatarFallbackImage from '../assets/icons/GitHub-Mark-120px-plus.png';
import Search from '../components/Search';

export const Home: React.FC = () => {
  const repositories = useSelector((state: ApplicationState) => state.repositories);

  const { data } = repositories || {};

  const { owner } = data[0] || {};

  function hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash * 100;
  }

  function intToRGB(i: any) {
    const c = (i & 0x00ffffff).toString(16).toUpperCase();
    const colorString = '00000'.substring(0, 6 - c.length) + c;
    return colorString;
  }

  return (
    <Container>
      <OwnerContainer>
        <img src={owner ? owner.avatar_url : avatarFallbackImage} alt="Avatar" />
        <h1>{owner && owner.login}</h1>
      </OwnerContainer>
      <Search />

      {repositories

      && (
      <DataTable columns={['NAME', 'DESCRIPTION', 'TOPICS']} widths={['auto', '', '']}>
        {data.map((repository) => (
          <tr key={repository.id}>
            <RepositoryItem key={repository.id} repository={repository} />
            <td>
              {repository.description}
            </td>
            <td>
              {repository.topics.map((topic) => (
                <span style={{ backgroundColor: `#${intToRGB(hashCode(topic))}` }}>
                  {topic}
                </span>
              ))}

            </td>
          </tr>
        ))}
      </DataTable>
      ) }
    </Container>
  );
};
