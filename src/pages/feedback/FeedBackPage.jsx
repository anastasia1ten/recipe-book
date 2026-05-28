import './FeedBack.css';

export const FeedBackPage = () => {
  return (
    <div className="feedback-page page">
      <div className="container">
        <header className="page-hero">
          <h1>Обратная связь</h1>
          <p>
            Есть вопрос, идея для рецепта или замечание по сайту? Заполните форму и мы ответим
            в ближайшее время.
          </p>
        </header>

        <section className="feedback-content section">
          <div className="feedback-info">
            <h2 className="section-title">Напишите нам</h2>
            <p className="section-text">
              Заполните поля формы справа. Можно предложить свой рецепт - выберите тему
              «Предложить рецепт».
            </p>
          </div>

          <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Форма сообщения</h2>
            <label>
              <span>Ваше имя</span>
              <input type="text" name="name" placeholder="Иван" />
            </label>
            <label>
              <span>Тема</span>
              <select name="topic" defaultValue="question">
                <option value="question">Вопрос</option>
                <option value="recipe">Предложить рецепт</option>
                <option value="bug">Ошибка на сайте</option>
                <option value="other">Другое</option>
              </select>
            </label>
            <label>
              <span>Сообщение</span>
              <textarea name="message" rows="6" placeholder="Напишите ваше сообщение..." />
            </label>
            <button type="submit" className="btn-primary">
              Отправить
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};
