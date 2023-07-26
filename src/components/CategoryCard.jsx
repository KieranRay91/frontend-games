import { Link } from "react-router-dom";
import "../categories.css";

function CategoryCard({ slug, description }) {
  return (
  
      <li className="category-card" >
          <Link to={`/categories/${slug}`}>
        <div>
          <h2>{slug}</h2>
          <p>{description}</p>
        </div>
        </Link>
      </li>
    
  );
}

export default CategoryCard;
