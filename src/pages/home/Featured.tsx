import { Link } from "react-router-dom";

type FeaturedProps = {
  name: string;
  slug: string;
  photo_url: string;
  description?: string;
};

function Featured({ name, photo_url, slug, description }: FeaturedProps) {
  return (
    <Link to={`/supplement/${slug}`} className="text-decoration-none text-dark">
      <div className="card">
        <img
          src={photo_url}
          className="card-img-top"
          alt={`Photo of ${name} supplement`}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="text-start">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Featured;
