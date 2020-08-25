import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: var(--text);
  font-weight: bold;
  small {
    color: var(--support)
  }
`;

export const ErrorField = styled.div`
  font-weight: bold;
  color: #E3281B;
`;

export const InputField = styled.input`
  height: 80px;
  width: 300px;
  background: var(--primary);
  border: none;
  text-align: center;
  font-weight: bold;
  margin: 5px 0 5px 0;
  font-size: 20px;
  color: var(--text);
  &::placeholder {
    color: var(--text);
    opacity: 0.8;
  }
  @media (max-width: 800px) {
    width: 250px;
  }
`;
