import { useContext, useState } from "react";

import Icon from "./Icon.jsx";

import { categoryColors } from "../data.js";
import { WardrobeContext } from "../store/wardrobe-context.jsx";

export const WardrobeItem = ({ item }) => {

    const [ newName, setNewName ] = useState(item.name);
    const [ newCategory, setNewCategory ] = useState(item.category);
    const [ invalidName, setInvalidName ] = useState(false);
    const [ invalidCategory, setInvalidCategory ] = useState(false);

    const { saveItem, deleteItem, isEditingWardrobe, toggleEditMode } = useContext(WardrobeContext);

    const primaryClasses = `
        ${isEditingWardrobe && "outline-2 outline-dashed outline-neutral-600 "} \
        mb-[15px] rounded-[10px] \
        px-[15px] py-[12px] font-main font-semibold text-neutral-600 text-sm `

    // classes for editMode = false
    let itemClasses = `grid grid-cols-3 ${primaryClasses}`
    const bgColor = categoryColors[item.category];
    itemClasses += bgColor;

    // classes for editMode = true
    let editItemClasses = `grid grid-cols-4 gap-3 bg-item-add-edit ${primaryClasses}`;

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setNewCategory(event.target.value);
    }

    const handleCheckClicked = (itemInfoToSave) => {
        if ( newName === "" ) {
            setInvalidName(true);
            return
        }
        if ( newCategory === "") {
            setInvalidCategory(true);
            return
        }
        saveItem(itemInfoToSave);
    }

    return (
        <>
        {/* NORMAL DISPLAY MODE */}
        {!item.editMode &&
        <div 
            className={`${itemClasses} ${isEditingWardrobe ? "cursor-pointer" : ""}`} 
            onClick={isEditingWardrobe ? () => toggleEditMode(item) : undefined}
        >
            <p className="col-span-2">{item.name}</p>
            <p className="text-right">{item.category}</p>
        </div>}

        {/* EDIT MODE */}
        {item.editMode &&
        <div className={editItemClasses}>
            {/* NAME INPUT */}
            <input 
                type="text" 
                autoFocus
                placeholder="e.g. White Shirt" 
                className={
                    `${invalidName ? "bg-red-300 outline-2 outline-red-800" : "bg-input-bg"} 
                    col-span-2 rounded-[5px] py-1 pl-2`
                }
                value={newName}
                onChange={handleNameChange}
            />
            {/* CATEGORY SELECT */}
            <select 
                className={`${invalidCategory ? "bg-red-300 outline-2 outline-red-800" : "bg-input-bg"} text-center rounded-[5px] py-1 px-2`}
                value={newCategory}
                onChange={handleCategoryChange}
            >
                <option></option>
                <option>Tops</option>
                <option>Bottoms</option>
                <option>Outerwear</option>
                <option>Footwear</option>
                <option>Accessories</option>
            </select>
            {/* BUTTONS */}
            <div className="flex flex-row gap-2 justify-end">
                <button
                    className="cursor-pointer"
                    onClick={() => deleteItem(item.id)}
                >
                    <Icon iconName="trash" color="text-neutral-600" />
                </button>
                <button onClick={() =>
                        handleCheckClicked({
                            ...item,
                            name: newName,
                            category: newCategory,
                            editMode: false
                        })
                    }
                    className="cursor-pointer"
                >
                    <Icon iconName="check" color="text-neutral-600" />
                </button>
            </div>
        </div>}
        </>
    );
}

export default WardrobeItem;