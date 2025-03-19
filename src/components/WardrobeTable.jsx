import WardrobeItem from "./WardrobeItem.jsx";

const INITIAL_WARDROBE = [
    { name: "Graphic Hoodie", category: "Tops", editMode: false },
    { name: "Brown Loafers", category: "Footwear", editMode: false },
    { name: "Puffer Vest", category: "Outerwear", editMode: false },
    { name: "Black Joggers", category: "Bottoms", editMode: false },
    { name: "Gold Chain Necklace", category: "Accessories", editMode: false },
    { name: "Denim Jacket", category: "Outerwear", editMode: false },
    { name: "Aviator Sunglasses", category: "Accessories", editMode: false },
    { name: "Slim-Fit Dress Pants", category: "Bottoms", editMode: false },
    { name: "Striped Polo Shirt", category: "Tops", editMode: false },
    { name: "Running Shoes", category: "Footwear", editMode: false },
    { name: "Trench Coat", category: "Outerwear", editMode: false },
    { name: "Beanie Hat", category: "Accessories", editMode: false },
    { name: "Cargo Shorts", category: "Bottoms", editMode: false },
    { name: "Black Leather Boots", category: "Footwear", editMode: false },
    { name: "Sleeveless Tank Top", category: "Tops", editMode: false },
    { name: "Khaki Chinos", category: "Bottoms", editMode: false },
    { name: "Leather Belt", category: "Accessories", editMode: false },
    { name: "Rain Jacket", category: "Outerwear", editMode: false },
    { name: "Plaid Flannel Shirt", category: "Tops", editMode: false },
    { name: "Distressed Skinny Jeans", category: "Bottoms", editMode: false },
    { name: "High-Top Sneakers", category: "Footwear", editMode: false },
    { name: "Wool Overcoat", category: "Outerwear", editMode: false },
    { name: "Long-Sleeve Henley", category: "Tops", editMode: false }
]

export default function WardrobeTable() {
    return (
        <section className="flex flex-col w-1/3">
            <header className="grid grid-cols-3 px-[30px] mb-[5px] font-main font-semibold text-neutral-600">
                <p className="col-span-2">Name</p>
                <p className="text-right">Category</p>
            </header>
            <section className="h-full bg-white rounded-[20px] p-[15px] overflow-scroll">
                {INITIAL_WARDROBE.map((item) =>
                    <WardrobeItem item={item} />
                )}
            </section>
        </section>
    );
}