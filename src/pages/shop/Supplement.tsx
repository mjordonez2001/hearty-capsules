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
    <Link to="/">
      <div className="card">
        <img src={photo_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example .</p>
        </div>
      </div>
    </Link>
  );
}

export default Supplement;
