import './Card.css';

export const Card = ({ title, children }) => {
  return (
    <article className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
    </article>
  );
};
