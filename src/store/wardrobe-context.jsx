import { createContext, useState } from "react";

import { INITIAL_WARDROBE } from "../data.js";

export const WardrobeContext = createContext({
    wardrobe: [],
    isEditing: false,
    suggestions: [],
    addNewItem: () => {},
    saveItem: () => {},
    deleteItem: () => {},
    toggleEditMode: () => {},
    toggleIsEditingWardrobe: () => {},
    generateSuggestions: () => {}
});

const WardrobeContextProvider = ({ children }) => {

    const [ wardrobe, setWardrobe ] = useState(INITIAL_WARDROBE);
    const [ isEditing, setIsEditing ] = useState(false);
    const [ suggestions, setSuggestions ] = useState([]);

    /* WARDROBE MANAGEMENT */

    const handleAddNewItem = (newItem) => {
        // adds item to wardrobe (newItem is expected to be "empty", to be filled out)
        setWardrobe(prevWardrobe => {
            const newWardrobe = [...prevWardrobe, newItem];
            return newWardrobe;
        })
    }

    const handleSaveItem = (itemInfoToSave) => {
        // saves item info to wardrobe
        setWardrobe(prevWardrobe => 
            prevWardrobe.map(item => 
                item.id !== itemInfoToSave.id ? item : {
                    ...itemInfoToSave,
                    editMode: false // to ensure that the edit mode is shut off
            })
        );
    }

    const handleDeleteItem = (itemToDeleteId) => {
        // deletes item from wardrobe
        setWardrobe(prevWardrobe => 
            prevWardrobe.filter(item => item.id !== itemToDeleteId)
        );
    }

    const toggleItemEditMode = (itemToEdit) => {
        // sets individual item (itemToEdit) edit mode to true
        setWardrobe(prevWardrobe =>
            prevWardrobe.map(item =>
                item.id !== itemToEdit.id ? item : {
                    ...itemToEdit,
                    editMode: true
                }
            )
        )
    }

    /* OVERALL EDITING MANAGEMENT */

    const toggleIsEditing = () => {
        // toggles overall edit mode, sets all individual item edit modes to false (prep for editing),
        // and removes any items that had empty fields
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

    const wardrobeContextValue = {
        wardrobe,
        isEditingWardrobe: isEditing,
        suggestions: suggestions,
        addNewItem: handleAddNewItem,
        saveItem: handleSaveItem,
        deleteItem: handleDeleteItem,
        toggleEditMode: toggleItemEditMode,
        toggleIsEditingWardrobe: toggleIsEditing,
        generateSuggestions: setSuggestions
    }

    return (
        <WardrobeContext.Provider value={wardrobeContextValue}>
            {children}
        </WardrobeContext.Provider>
    );
}

export default WardrobeContextProvider;