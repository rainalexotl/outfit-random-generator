import { useContext, useState } from "react";

import Icon from "./Icon.jsx";

import { categoryColors } from "../data.js";
import { WardrobeContext } from "../store/wardrobe-context.jsx";

export const WardrobeItem = ({ item }) => {

    const [ newName, setNewName ] = useState(item.name);
    const [ newCategory, setNewCategory ] = useState(item.category);
    const [ invalidName, setInvalidName ] = useState(false);
    const [ invalidCategory, setInvalidCategory ] = useState(false);

    const { saveItem, deleteItem } = useContext(WardrobeContext);

    const primaryClasses = "mb-[15px] rounded-[10px] \
    px-[15px] py-[12px] font-main font-semibold text-neutral-600 text-sm "

    let itemClasses = `grid grid-cols-3 ${primaryClasses}`
    const bgColor = categoryColors[item.category];
    itemClasses += bgColor;

    let editItemClasses = `grid grid-cols-4 gap-3 bg-item-add-edit ${primaryClasses}`;

    const handleNameChange = (event) => {
        setNewName(event.target.value);
        console.log(event.target.value);
        if ( event.target.value.trim() === "" ) {
            setInvalidName(true);
        } else {
            setInvalidName(false);
        }
    }

    const handleCategoryChange = (event) => {
        setNewCategory(event.target.value);
        if ( event.target.value === "" ) {
            setInvalidCategory(true);
        } else {
            setInvalidCategory(false);
        }
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
        {!item.editMode &&
        <div className={itemClasses} >
            <p className="col-span-2">{item.name}</p>
            <p className="text-right">{item.category}</p>
        </div>}
        
        {item.editMode &&
        <div className={editItemClasses}>
            <input 
                type="text" 
                placeholder="e.g. White Shirt" 
                className={`${invalidName ? "bg-red-300 outline-2 outline-red-800" : "bg-input-bg"} col-span-2 rounded-[5px] py-1 pl-2`}
                onChange={handleNameChange}
            />
            <select 
                className={`${invalidCategory ? "bg-red-300 outline-2 outline-red-800" : "bg-input-bg"} text-center rounded-[5px] py-1 px-2`}
                onChange={handleCategoryChange}
            >
                <option></option>
                <option>Tops</option>
                <option>Bottoms</option>
                <option>Outerwear</option>
                <option>Footwear</option>
                <option>Accessories</option>
            </select>
            <div className="flex flex-row gap-2 justify-end">
                <button
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
                }>
                    <Icon iconName="check" color="text-neutral-600" />
                </button>
            </div>
        </div>}
        </>
    );
}

export default WardrobeItem;