import { Link } from "react-router-dom";

export type supplementProps = {
  name: string;
  slug: string;
  category?: string;
  description?: string;
  photo_url?: string;
  unit_price?: number;
  benefits?: string[];
};

function Supplement({ name, slug, unit_price, photo_url }: supplementProps) {
  return (
    <Link to={`/${slug}`} className="text-decoration-none text-dark">
      <div className="card">
        <img
          src={photo_url}
          className="card-img-top"
          alt={`Photo of ${name} supplement`}
        />
        <div className="card-body text-center">
          <div className="card-title">{name}</div>
          <p className="card-text">${unit_price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Supplement;
