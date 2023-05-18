import React, { useState } from "react";
import "./MorphApp.css";

const MorphLogic = () => {
    const [images, setImages] = useState([]);
    const [morphedImages, setMorphedImages] = useState([]);

    const handleImage = (image) => {
        setImages((prevImages) => {
            if (prevImages.includes(image)) {
                return prevImages.filter((img) => img !== image);
            } else {
                return [...prevImages, image];
            }
        });
    };

    const displayMorph = () => {
        const morphedImages = [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300?grayscale",
            "https://picsum.photos/200/300/?blur=2",
        ];
        setMorphedImages(morphedImages);
    };

    return (
        <div className="morph-main">
            <h1>Click on both images to select</h1>
            <div className="image-selection">

                <img
                    src="https://picsum.photos/200/300?random=1"
                    onClick={() => handleImage("picsum1.jpg")}
                />
                <img
                    src="https://picsum.photos/200/300?random=2"
                    onClick={() => handleImage("picsum2.jpg")}
                />

            </div>

            <button onClick={displayMorph} disabled={images.length !== 2}>
                Generate Morph
            </button>

            {morphedImages.length > 0 && (
                <div className="morphed-images">


                    {morphedImages.map((image, index) => (
                        <img src={image} alt={`Morphed ${index + 1}`} key={index} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MorphLogic;
