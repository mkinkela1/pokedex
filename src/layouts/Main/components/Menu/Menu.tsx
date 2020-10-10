import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  title: string,
  href: string
}

const Menu = () => {

  const links: MenuItem[] = [
    {title: 'Pokedex', href: '/pokedex'}
  ];

  return (
    <section className="s-menu">
      <ul>
        {links.map(({title, href}, idx: number) => (
          <li key={`${title}-${href}-${idx}`}>
            <Link to={location => ({ ...location, pathname: `${href}` })}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Menu;