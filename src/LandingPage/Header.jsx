import { useIntl } from 'react-intl';
import { memo, useState, useEffect } from 'react';
import stylex from '@serpa-cloud/stylex';

import { ReactComponent as IconLogo } from '../shared/images/icon_codegen.svg';
import { Icon, Modal } from '../shared';

import './Header.scss'; // Import the SASS file

type Props = {};

export default function Header(): React$Node {
  const intl = useIntl();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="mainLinks">
          <a href="/">
            <div className="logo">
              <IconLogo width={36} />
              <div className="logoText">Serpa AI</div>
            </div>
          </a>

          <div className="links">
            <a href="/contact" rel="noopener noreferrer" className="singleLink">
              Contact
            </a>
          </div>
        </div>

        <div className="links">
          <a href="#waitinglist" className="button buttonDownload">
            Request Access
          </a>
        </div>

        <button
          className={`button buttonMenu ${open ? 'buttonActive' : ''}`}
          onClick={() => setOpen((x) => !x)}
        >
          <Icon icon={open ? 'close' : 'menu'} color="--neutral-color-800" />
        </button>
      </header>
      {open && (
        <nav className="menu">
          <a href="/contact" target="_blank" rel="noopener noreferrer" className="singleLinkMenu">
            Contact
          </a>
        </nav>
      )}
    </>
  );
}
