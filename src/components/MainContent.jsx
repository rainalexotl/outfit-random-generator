import WardrobeTable from "./WardrobeTable.jsx";
import OutfitFilter from "./OutfitFilter.jsx";

export const MainContent = () => {
    return (
        <main className="flex flex-row h-full">
            <WardrobeTable />
            <OutfitFilter />
            <section className="w-1/3 bg-violet-800">
                <p>Outfit goes here goes here</p>
            </section>
        </main>
    );
}

export default MainContent;