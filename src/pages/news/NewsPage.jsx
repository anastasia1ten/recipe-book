import { Card } from '../../components/card/Card';
import './News.css';

const newsItems = [
  {
    id: 1,
    date: '15 мая 2026',
    title: 'Запуск проекта',
    text: 'Мы начали разработку сайта «Книга рецептов». Скоро появится полный каталог блюд.',
  },
  {
    id: 2,
    date: '20 мая 2026',
    title: 'Новые категории',
    text: 'В каталог добавятся разделы: супы, салаты, горячее и десерты.',
  },
  {
    id: 3,
    date: '25 мая 2026',
    title: 'Обратная связь',
    text: 'На сайте появилась форма - вы сможете предложить свой рецепт или задать вопрос.',
  },
];

export const NewsPage = () => {
  return (
    <div className="news-page page">
      <div className="container">
        <header className="page-hero">
          <h1>Новости</h1>
          <p>Новости и обновления проекта «Книга рецептов».</p>
        </header>

        <section className="section">
          <div className="news-list">
            {newsItems.map((item) => (
              <Card key={item.id} meta={item.date} title={item.title}>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="news-subscribe section">
          <h2 className="section-title">Подписка на новости</h2>
          <p className="section-text">Укажите имя - сообщим о новых рецептах и обновлениях.</p>
          <form className="news-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="name" placeholder="Ваше имя" />
            <button type="submit" className="btn-primary">
              Подписаться
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
