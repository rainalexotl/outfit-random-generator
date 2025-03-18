import { useState } from 'react';

import TableUpdateButtons from './components/TableUpdateButtons';

function App() {
    return (
        <div className="flex flex-col h-screen w-screen">
            <h1 className="font-header font-semibold text-4xl text-neutral-600 mt-[60px] mx-auto">Outfit Suggestion App</h1>
        
            <section className="h-3/4 w-3/4 mx-auto bg-amber-400">
                <TableUpdateButtons />
            </section>
        </div>
    );
}

export default App
