import WardrobeItem from "./WardrobeItem.jsx";

import { INITIAL_WARDROBE } from "../data.js";

export default function WardrobeTable() {
    return (
        <section className="flex flex-col w-1/3 min-h-0">
            <header className="grid grid-cols-3 px-[30px] mb-[5px] font-main font-semibold text-neutral-600">
                <p className="col-span-2">Name</p>
                <p className="text-right">Category</p>
            </header>
            <section className="h-full bg-white rounded-[20px] p-[15px] overflow-scroll">
                {INITIAL_WARDROBE.map((item) =>
                    <WardrobeItem key={item.id} item={item} />
                )}
            </section>
        </section>
    );
}