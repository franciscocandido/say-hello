import React from 'react';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  PageFooter, IconsDiv, FooterIcon, Thanks,
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
      </IconsDiv>
      <Thanks>Special thanks for Lealder04</Thanks>
    </PageFooter>
  );
}

export default Footer;
