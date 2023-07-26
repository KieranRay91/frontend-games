import { useState, useEffect } from "react";
import { fetchCategories } from "../utils";
import CategoryCard from "./CategoryCard";
import"../categories.css"


function Categories() {
    const [currentCategories, setCurrentCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  

    useEffect(() => {
        fetchCategories().then((categories) => {
            setCurrentCategories(categories);
            setIsLoading(false);
        })
    }, [currentCategories]);

  if(isLoading) {
        return <p>Loading....</p>;  
    }

return (
    <div className="categories-container">
        <h1>Categories</h1>
       
        {currentCategories.map((category) => {
            return (
                <CategoryCard
                key={category.slug}
                slug={category.slug}
                description={category.description}
                />
            )
        })}
    </div>
)
}

export default Categories;