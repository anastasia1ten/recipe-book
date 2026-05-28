import './Header.css';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'recipes', label: 'Рецепты' },
  { id: 'news', label: 'Новости' },
  { id: 'about', label: 'О нас' },
  { id: 'feedback', label: 'Обратная связь' },
];

export const Header = ({ currentPage, onNavigate }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <button type="button" className="header-logo-btn" onClick={() => onNavigate('home')}>
          Книга рецептов
        </button>
      </div>
      <nav className="header-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
