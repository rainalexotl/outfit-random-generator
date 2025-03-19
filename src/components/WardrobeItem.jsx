export default function WardrobeItem({ item }) {
    return (
        <div className={`grid grid-cols-3 mb-[15px] bg-${item.category.toLowerCase()} rounded-[10px] px-[15px] py-[12px] font-main font-semibold text-neutral-600 text-sm`} >
            <p className="col-span-2">{item.name}</p>
            <p className="text-right">{item.category}</p>
        </div>
    );
}