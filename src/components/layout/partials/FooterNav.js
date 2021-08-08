import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href='https://charts.zoocoin.cash/?exchange=ZooDex&pair=BITB-WFTM'>Chart</a>
        </li>
        <li>
          <a href='https://linktr.ee/bitbean'>Links</a>
        </li>
        <li>
          <a href='https://dex.zoocoin.cash/farms/community'>Farms</a>
        </li>
        <li>
          <a href='https://dex.zoocoin.cash/orders/market?outputCurrency=0xbAc5d43A56696e5D0CB631609E85798f564b513b&inputCurrency=FTM'>Buy BITB</a>
        </li>
        <li>
          <a href='https://dex.zoocoin.cash/orders/market?inputCurrency=FTM&outputCurrency=0x08D2043219223c6b4f9FC3B9f09f3771395307B8'>Buy gBEANS</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;