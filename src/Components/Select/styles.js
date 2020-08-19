import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: var(--text);
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SelectField = styled.select`
  border: none;
  color: var(--text);
  background: var(--primary);
  font-weight: 600;
  padding: 10px 0 10px 0;
`;
