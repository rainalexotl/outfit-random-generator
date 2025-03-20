import { createContext, useState } from "react";

import { INITIAL_WARDROBE } from "../data.js";

export const WardrobeContext = createContext({
    wardrobe: [],
    isEditing: false,
    addNewItem: () => {},
    saveItem: () => {},
    deleteItem: () => {},
    toggleEditMode: () => {}
});

const WardrobeContextProvider = ({ children }) => {

    const [ wardrobe, setWardrobe ] = useState(INITIAL_WARDROBE);
    const [ isEditing, setIsEditing ] = useState(false);

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

    const toggleIsEditing = () => {
        setIsEditing(prevValue => !prevValue);
        setWardrobe(prevWardrobe => 
            prevWardrobe.map(item => (
                {
                    ...item,
                    editMode: false
                }
            )).filter(item => item.name.trim() !== "" && item.category.trim() !== "")
        )
    }

    const toggleItemEditMode = (itemToEdit) => {
        setWardrobe(prevWardrobe =>
            prevWardrobe.map(item =>
                item.id !== itemToEdit.id ? item : {
                    ...itemToEdit,
                    editMode: true
                }
            )
        )
    }

    const wardrobeContextValue = {
        wardrobe,
        isEditingWardrobe: isEditing,
        toggleIsEditingWardrobe: toggleIsEditing,
        addNewItem: handleAddNewItem,
        saveItem: handleSaveItem,
        deleteItem: handleDeleteItem,
        toggleEditMode: toggleItemEditMode
    }

    return (
        <WardrobeContext.Provider value={wardrobeContextValue}>
            {children}
        </WardrobeContext.Provider>
    );
}

export default WardrobeContextProvider;