import './Footer.css';

const footerLinks = [
  { id: 'home', label: 'Главная' },
  { id: 'recipes', label: 'Рецепты' },
  { id: 'news', label: 'Новости' },
  { id: 'about', label: 'О нас' },
  { id: 'feedback', label: 'Обратная связь' },
];

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h2 className="footer-logo">Книга рецептов</h2>
            <h6>О проекте</h6>
            <p>
              Сайт с домашними рецептами: удобный каталог блюд, новости и форма
              обратной связи для пользователей.
            </p>
            <button type="button" className="footer-cta" onClick={() => onNavigate('feedback')}>
              Написать нам
            </button>
          </div>
          <div className="footer-top-right">
            <nav className="footer-nav">
              <h6>Разделы</h6>
              {footerLinks.map((link) => (
                <button key={link.id} type="button" onClick={() => onNavigate(link.id)}>
                  {link.label}
                </button>
              ))}
            </nav>
            <nav className="footer-nav">
              <h6>Полезное</h6>
              <button type="button" onClick={() => onNavigate('recipes')}>
                Каталог рецептов
              </button>
              <button type="button" onClick={() => onNavigate('news')}>
                Новости
              </button>
            </nav>
          </div>
        </div>
        <div className="footer-line" />
        <div className="footer-bottom">
          <p>Сайт создан в рамках итогового проекта по сайтостроению.</p>
          <p>© 2026 Книга рецептов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
