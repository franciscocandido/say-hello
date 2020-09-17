import React from 'react';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/FurFlespspspsps"
        >
          <FooterIcon icon={faTwitter} />
        </a>
      </IconsDiv>
      <Thanks>Special thanks for Lealder04</Thanks>
    </PageFooter>
  );
}

export default Footer;
