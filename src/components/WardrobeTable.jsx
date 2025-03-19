const INITIAL_WARDROBE = [
    { name: "Graphic Hoodie", category: "Tops" },
    { name: "Brown Loafers", category: "Footwear" },
    { name: "Puffer Vest", category: "Outerwear" },
    { name: "Black Joggers", category: "Bottoms" },
    { name: "Gold Chain Necklace", category: "Accessories" },
    { name: "Denim Jacket", category: "Outerwear" },
    { name: "Aviator Sunglasses", category: "Accessories" },
    { name: "Slim-Fit Dress Pants", category: "Bottoms" },
    { name: "Striped Polo Shirt", category: "Tops" },
    { name: "Running Shoes", category: "Footwear" },
    { name: "Trench Coat", category: "Outerwear" },
    { name: "Beanie Hat", category: "Accessories" },
    { name: "Cargo Shorts", category: "Bottoms" },
    { name: "Black Leather Boots", category: "Footwear" },
    { name: "Sleeveless Tank Top", category: "Tops" },
    { name: "Khaki Chinos", category: "Bottoms" },
    { name: "Leather Belt", category: "Accessories" },
    { name: "Rain Jacket", category: "Outerwear" },
    { name: "Plaid Flannel Shirt", category: "Tops" },
    { name: "Distressed Skinny Jeans", category: "Bottoms" },
    { name: "High-Top Sneakers", category: "Footwear" },
    { name: "Wool Overcoat", category: "Outerwear" },
    { name: "Long-Sleeve Henley", category: "Tops" }
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
                    <div className="grid grid-cols-3 mb-[15px] bg-bottoms rounded-[10px] px-[15px] py-[12px] font-main font-semibold text-neutral-600 text-sm" >
                        <p className="col-span-2">{item.name}</p>
                        <p className="text-right">{item.category}</p>
                    </div>
                )}
            </section>
        </section>
    );
}