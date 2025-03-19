import MainContent from './components/MainContent';
import TableUpdateButtons from './components/TableUpdateButtons';

const App = () => {
    return (
        <div className="flex flex-col h-screen w-screen">
            <h1 className="font-header font-semibold text-4xl text-neutral-600 mt-[60px] mx-auto">Outfit Suggestion App</h1>
        
            <section className="flex flex-col h-3/4 w-3/4 mx-auto ">
                <TableUpdateButtons />
                <MainContent />
            </section>
        </div>
    );
}

export default App
