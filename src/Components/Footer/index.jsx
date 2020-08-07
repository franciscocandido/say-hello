import React from 'react';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import {
  PageFooter, IconsDiv, FooterIcon, CopyText,
} from './styles';

function Footer() {
  return (
    <PageFooter>
      <IconsDiv>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/franciscocandido"
        >
          <FooterIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_FurFles_"
        >
          <FooterIcon icon={faTwitter} />
        </a>
      </IconsDiv>
      <CopyText>&copy; 2020 - Francisco Cândido</CopyText>
    </PageFooter>
  );
}

export default Footer;
