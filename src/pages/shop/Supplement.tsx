import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/format";
import { supplementProps } from "../../utils/types";

function Supplement({ name, slug, unit_price, photo_url }: supplementProps) {
  return (
    <Link to={`/supplement/${slug}`} className="text-decoration-none text-dark">
      <div className="card">
        <img
          src={photo_url}
          className="card-img-top"
          alt={`Photo of ${name} supplement`}
        />
        <div className="card-body text-center">
          <div className="card-title">{name}</div>
          <p className="card-text">{unit_price && formatPrice(unit_price)}</p>
        </div>
      </div>
    </Link>
  );
}

export default Supplement;
