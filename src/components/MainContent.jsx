import WardrobeTable from "./WardrobeTable.jsx";
import OutfitFilter from "./OutfitFilter.jsx";
import OutfitDisplay from "./OutfitDisplay.jsx";

export const MainContent = () => {
    return (
        <main className="flex flex-row h-full justify-between">
            <WardrobeTable />
            <OutfitFilter />
            <OutfitDisplay />
        </main>
    );
}

export default MainContent;