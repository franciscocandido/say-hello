import React from 'react';

import {
  PageFooter,
  IconsDiv,
  FooterIcon,
  CopyText,
} from './styles';

function Footer() {
  return (
    <PageFooter>
      <IconsDiv>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/franciscocandido">
          <FooterIcon className="fab fa-github" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_FurFles_">
          <FooterIcon className="fab fa-twitter" />
        </a>
      </IconsDiv>
      <CopyText>
        &copy; 2020 - Francisco Cândido
      </CopyText>
    </PageFooter>
  );
}

export default Footer;
