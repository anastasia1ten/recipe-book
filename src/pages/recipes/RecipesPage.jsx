import { recipes } from '../../data/recipes';
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
            {recipes.map((recipe) => (
              <article key={recipe.id} className="recipe-card">
                <img className="recipe-card-image" src={recipe.image} alt={recipe.title} />
                <div className="recipe-card-body">
                  <p className="recipe-card-meta">
                    {recipe.time} · {recipe.level}
                  </p>
                  <h3>{recipe.title}</h3>
                  <p className="recipe-card-desc">{recipe.description}</p>
                  <div className="recipe-card-details">
                    <h4>Ингредиенты</h4>
                    <ul>
                      {recipe.ingredients.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <h4>Приготовление</h4>
                    <ol>
                      {recipe.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
