import React from "react";

interface RecipeImageProps {
    img: string;
}

const RecipeImage: React.FC<RecipeImageProps> = ({ img }) => {
    return <img src={img} width="100%" height="auto" style={{maxHeight: 600, objectFit:"cover", borderRadius: 16}} />;
};

export default RecipeImage;
