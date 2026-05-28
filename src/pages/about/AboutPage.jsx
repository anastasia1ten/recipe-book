import { Card } from '../../components/card/Card';
import './About.css';

const team = [
  { name: 'Участник 1', role: 'Каркас и навигация' },
  { name: 'Участник 2', role: 'Структура страниц' },
  { name: 'Участник 3', role: 'Рецепты' },
  { name: 'Участник 4', role: 'Стили' },
];

export const AboutPage = () => {
  return (
    <div className="about-page page">
      <div className="container">
        <header className="page-hero">
          <h1>О нас</h1>
          <p>
            Мы - команда студентов, которая создаёт учебный проект «Книга рецептов» на React.
          </p>
        </header>

        <section className="about-intro section">
          <div className="about-intro-text">
            <h2 className="section-title">Наша цель</h2>
            <p className="section-text">
              Сделать удобный сайт с домашними рецептами: понятная навигация, каталог блюд,
              новости проекта и форма для связи с пользователями.
            </p>
          </div>
          <div className="image-placeholder">О проекте</div>
        </section>

        <section className="section">
          <h2 className="section-title">Команда</h2>
          <div className="about-team-grid">
            {team.map((member) => (
              <Card
                key={member.name}
                title={member.name}
                image={<span>Фото</span>}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
