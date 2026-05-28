import './Recipes.css';

export const RecipesPage = () => {
  return (
    <div className="recipes-page page">
      <div className="container">
        <header className="page-hero">
          <h1>Каталог рецептов</h1>
          <p>Здесь собраны домашние блюда с описанием ингредиентов и шагов приготовления.</p>
        </header>

        <section className="recipes-catalog section">
          <div className="recipes-grid" id="recipes-grid">
            <article className="recipe-slot">
              <div className="recipe-slot-image">Фото</div>
              <div className="recipe-slot-body">
                <h3>Рецепт 1</h3>
                <p>Описание появится на следующем этапе.</p>
              </div>
            </article>
            <article className="recipe-slot">
              <div className="recipe-slot-image">Фото</div>
              <div className="recipe-slot-body">
                <h3>Рецепт 2</h3>
                <p>Описание появится на следующем этапе.</p>
              </div>
            </article>
            <article className="recipe-slot">
              <div className="recipe-slot-image">Фото</div>
              <div className="recipe-slot-body">
                <h3>Рецепт 3</h3>
                <p>Описание появится на следующем этапе.</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};
