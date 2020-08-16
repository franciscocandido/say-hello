import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonField = styled.button`
  padding: 15px;
  width: 100%;
  border: 4px solid var(--primary);
  font-size: 25px;
  font-weight: bold;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: var(--primary)
  }
`;
