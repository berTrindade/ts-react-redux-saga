import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1120px;
    width: 100vw;
    min-height: 100vh;
`;

export const Wrapper = styled.table`
  margin-bottom: 0;
  border-top: 1px solid #ebebea;
  border-bottom: 1px solid #ebebea;

  thead {
    tr {
      th {
        padding: 1rem;
        border-bottom: 2px solid #ebebea;
      }
    }
  }

  tbody {
        tr {
            &:nth-child(even) {
                background: #b2b2b2;
            }

            td {
              padding: 0.5rem 1rem;

                span {
                  border-radius: .2rem;
                  padding: .2rem;
                  margin-left: .3rem;
                  color: #fff;
                }
            }
        }
    }
`;

export const OwnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;
    margin: 1rem auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5rem;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 0.5rem;
      color: var(--color-item-font);
    }
`;
