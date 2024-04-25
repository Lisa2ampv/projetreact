import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Accueil</Link>
        </li>
        <li>
          <Link to='/products'>Produits</Link>
        </li>
      </ul>
    </nav>
  );
}
