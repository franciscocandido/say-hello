/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  background: var(--dark);
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const BrandIcon = styled.h1`
  color: var(--white);
  padding-left: 50px;
  font-size: 30px;
  font-weight: 800;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 25px;
    padding-left: 0;
  }
`;
