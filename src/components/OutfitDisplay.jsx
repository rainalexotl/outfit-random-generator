import topsImg from '/Tops.png';
import bottomsImg from '/Bottoms.png';
import outerwearImg from '/Outerwear.png';
import footwearImg from '/Footwear.png';
import accessoriesImg from '/Accessories.png';

const imgs = [ accessoriesImg, bottomsImg, footwearImg, outerwearImg, topsImg ];
const categoryImg = {
    "Tops": topsImg,
    "Bottoms": bottomsImg,
    "Outerwear": outerwearImg,
    "Footwear": footwearImg,
    "Accessories": accessoriesImg
};

export const OutfitDisplay = () => {

    return (
        <section className="flex flex-wrap justify-center items-center gap-6 w-35/100 p-[25px] bg-white rounded-[20px] ">
            {imgs.map(item =>
                <img className="max-h-36 max-w-36 object-cover rounded-[5px]" src={item} />
            )}
        </section>
    );
}

export default OutfitDisplay;