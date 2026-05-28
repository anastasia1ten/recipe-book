import { Card } from '../../components/card/Card';
import './Home.css';

export const HomePage = ({ onNavigate }) => {
  return (
      <div className="home-page page">
        <div className="container">
          <section className="home-hero section">
            <div className="home-hero-content">
              <h1>Добро пожаловать в книгу рецептов</h1>
              <p>
                Собираем лучшие домашние блюда в одном месте: от быстрых завтраков до праздничных
                ужинов. Выбирайте рецепт и готовьте с удовольствием.
              </p>
              <div className="home-hero-actions">
                <button type="button" className="btn-primary" onClick={() => onNavigate('recipes')}>
                  Смотреть рецепты
                </button>
              </div>
            </div>
            <img
            className="home-hero-image"
            src="/images/recipes/food-11.jpg"
            alt="Домашние блюда"
          />
          </section>

          <section className="section">
            <h2 className="section-title">Что вы найдёте на сайте</h2>
            <div className="grid-3">
              <Card title="Каталог рецептов">
                <p>Подборка блюд с описанием ингредиентов и времени приготовления.</p>
              </Card>
              <Card title="Новости">
                <p>Обновления проекта, сезонные подборки и полезные советы.</p>
              </Card>
              <Card title="Обратная связь">
                <p>Напишите нам - предложите рецепт или задайте вопрос.</p>
              </Card>
            </div>
          </section>

          <section className="home-story section">
            <div className="home-story-text">
              <h3>О проекте</h3>
              <p>
                «Книга рецептов» - это учебный проект по сайтостоению. Команда из четырех человек разрабатывает сайт
                на Reac.
              </p>
              <button type="button" className="btn-secondary" onClick={() => onNavigate('about')}>
                Читать о команде
              </button>
            </div>
          </section>
        </div>

        <section className="home-cta">
          <div className="container home-cta-inner">
            <h2>Готовы выбрать рецепт?</h2>
            <p>Перейдите в каталог и найдите блюдо на сегодня.</p>
            <button type="button" className="btn-primary" onClick={() => onNavigate('recipes')}>
              Перейти к рецептам
            </button>
          </div>
        </section>
      </div>
  );
};
