import { useContext } from "react";

import WardrobeItem from "./WardrobeItem.jsx";
import { WardrobeContext } from "../store/wardrobe-context.jsx";

// import { INITIAL_WARDROBE } from "../data.js";

export const WardrobeTable = () => {

    const { wardrobe } = useContext(WardrobeContext);

    return (
        <section className="flex flex-col w-35/100 min-h-0">
            <header className="grid grid-cols-3 px-[30px] mb-[5px] font-main font-semibold text-neutral-600">
                <p className="col-span-2">Name</p>
                <p className="text-right">Category</p>
            </header>
            <section className="h-full bg-white rounded-[20px] p-[15px] overflow-scroll">
                {wardrobe.map((item) =>
                    <WardrobeItem key={item.id} item={item} />
                )}
            </section>
        </section>
    );
}

export default WardrobeTable;