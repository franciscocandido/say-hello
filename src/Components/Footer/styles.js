import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PageFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background: var(--primary);
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  padding-left: 50px;
  @media (max-width: 800px) {
    padding-left: 20px;
    width: 100px;
  }
`;

export const FooterIcon = styled(FontAwesomeIcon)`
  color: var(--white);
  font-size: 30px;
  transition: 0.2s;
  &:hover {
    color: var(--support);
  }
`;

export const CopyText = styled.small`
  color: var(--white);
  font-weight: 700;
  padding-right: 50px;
  font-size: 15px;
  @media (max-width: 800px) {
    padding-right: 20px;
  }
`;
