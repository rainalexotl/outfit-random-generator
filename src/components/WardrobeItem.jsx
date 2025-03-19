import { categoryColors } from "../data.js";

export default function WardrobeItem({ item }) {

    let itemClasses = "grid grid-cols-3 mb-[15px] rounded-[10px] \
    px-[15px] py-[12px] font-main font-semibold text-neutral-600 text-sm "
    const bgColor = categoryColors[item.category];
    itemClasses += bgColor;

    return (
        <div className={itemClasses} >
            <p className="col-span-2">{item.name}</p>
            <p className="text-right">{item.category}</p>
        </div>
    );
}