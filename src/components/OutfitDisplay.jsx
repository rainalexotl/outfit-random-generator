import topsImg from '/Tops.png';
import bottomsImg from '/Bottoms.png';
import outerwearImg from '/Outerwear.png';
import footwearImg from '/Footwear.png';
import accessoriesImg from '/Accessories.png';
import { useContext } from 'react';
import { WardrobeContext } from '../store/wardrobe-context';

const imgs = [ accessoriesImg, bottomsImg, footwearImg, outerwearImg, topsImg ];
const categoryImg = {
    "Tops": topsImg,
    "Bottoms": bottomsImg,
    "Outerwear": outerwearImg,
    "Footwear": footwearImg,
    "Accessories": accessoriesImg
};

export const OutfitDisplay = () => {

    const { suggestions } = useContext(WardrobeContext);


    return (
        <section className="flex flex-wrap justify-center items-center gap-6 w-35/100 p-[25px] bg-white rounded-[20px] ">
            {suggestions.map(suggestion =>
                <div key={suggestion.category} className="flex flex-col items-center max-w-36 max-h-36">
                    <img 
                        src={suggestion.imgUrl}
                        alt={suggestion.name}
                        className="max-h-36 max-w-36 object-cover rounded-[5px]"
                    />
                    <p className="mt-2 text-xs font-main text-neutral-600">{suggestion.name}</p>
                </div>
            )}
        </section>
    );
}

export default OutfitDisplay;