import { Card } from '../../components/card/Card';
import './About.css';

const team = [
  { name: 'Горбунов Даниил', role: 'Каркас и навигация', photo: '/images/members/danil.png' },
  { name: 'Тен Анастаия', role: 'Структура страниц', photo: '/images/members/ten.png' },
  { name: 'Кудряшова Светлана', role: 'Рецепты', photo: '/images/members/sveta.png' },
  { name: 'Темирбулатова Алиса', role: 'Стили', photo: '/images/members/alica.png' },
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
          <img
            className="about-intro-image"
            src="/images/recipes/food-1.jpg"
            alt="Блюда из нашего каталога"
          />
        </section>

        <section className="section">
          <h2 className="section-title">Команда</h2>
          <div className="about-team-grid">
            {team.map((member) => (
              <Card
                key={member.name}
                title={member.name}
                image={<img src={member.photo} alt={member.name} />}
              >
                <p>{member.role}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
