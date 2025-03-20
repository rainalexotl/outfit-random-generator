import { createContext, useState } from "react";

import { INITIAL_WARDROBE } from "../data.js";

export const WardrobeContext = createContext({
    wardrobe: [],
    addItem: () => {},
    editItem: () => {},
    deleteItem: () => {}
});

const WardrobeContextProvider = ({ children }) => {

    const [ wardrobe, setWardrobe ] = useState(INITIAL_WARDROBE);

    const handleAddNewItem = (newItem) => {
        setWardrobe(prevWardrobe => {
            const newWardrobe = [...prevWardrobe, newItem];
            return newWardrobe;
        })
    }

    const handleSaveItem = (itemInfoToSave) => {
        setWardrobe(prevWardrobe => 
            prevWardrobe.map(item => 
                item.id !== itemInfoToSave.id ? item : {
                    ...itemInfoToSave,
                    editMode: false // to ensure that the edit mode is shut off
            })
        );
    }

    const handleDeleteItem = (itemToDeleteId) => {
        setWardrobe(prevWardrobe => 
            prevWardrobe.filter(item => item.id !== itemToDeleteId)
        );
    }

    const wardrobeContextValue = {
        wardrobe,
        addNewItem: handleAddNewItem,
        saveItem: handleSaveItem,
        deleteItem: handleDeleteItem
    }

    return (
        <WardrobeContext.Provider value={wardrobeContextValue}>
            {children}
        </WardrobeContext.Provider>
    );
}

export default WardrobeContextProvider;