import './Card.css';

export const Card = ({ title, meta, image, children }) => {
  return (
    <article className="card">
      {image && <div className="card-image">{image}</div>}
      <div className="card-content">
        {meta && <p className="card-meta">{meta}</p>}
        {title && <h3 className="card-title">{title}</h3>}
        {children && <div className="card-body">{children}</div>}
      </div>
    </article>
  );
};
