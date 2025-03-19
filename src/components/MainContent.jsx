import WardrobeTable from "./WardrobeTable.jsx";

export const MainContent = () => {
    return (
        <main className="flex flex-row h-full">
            <WardrobeTable />
            <section className="w-1/3 bg-violet-800">
                <p>Outfit goes here goes here</p>
            </section>
        </main>
    );
}

export default MainContent;