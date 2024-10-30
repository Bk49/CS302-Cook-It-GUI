import React from "react";
import PlaceholderImage from "../../../assets/images/recipe-placeholder.jpg";

interface RecipeImageProps {
    img: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ img }) => {
    return (
        <img
            src={img}
            width="100%"
            height="auto"
            style={{ maxHeight: 600, objectFit: "cover", borderRadius: 16 }}
            onError={(e) => (e.currentTarget.src = PlaceholderImage)}
        />
    );
};

export default RecipeImage;
