import { useState } from "react";
import { categoryColors } from "../data";

const categoryOptions = Object.keys(categoryColors);

export const OutfitFilter = () => {

    const [ selectedOptions, setSelectedOptions ] = useState(new Set());

    const handleCategoryChange = (event) => {
        const { value, checked } = event.target;
        
        setSelectedOptions((prevOptions) => {
            let newOptions = new Set(prevOptions);
            if ( checked ) {
                newOptions.add(value);
            } else {
                newOptions.delete(value);
            }

            return newOptions;
        });
    }

    return (
        // flex flex-col items-center min-w-[125px]
        <section className="flex flex-col items-center justify-center">
            <fieldset>
                {categoryOptions.map((category) =>
                    <div key={category} className="flex items-center gap-3 mb-2.5">
                        <input 
                            className="size-5 accent-neutral-600 "
                            type="checkbox" 
                            id={category} 
                            name="Category" 
                            value={category}
                            onChange={handleCategoryChange} 
                        />
                        <label htmlFor={category} className="font-main font-semibold text-neutral-600">{category}</label>
                    </div>
                )}
            </fieldset>

            <button 
                disabled={selectedOptions.size === 0} 
                className="w-[110px] mt-5 px-6 py-2 rounded-[10px] font-main font-semibold text-sm bg-enabled-button text-neutral-600 disabled:bg-disabled-buttons disabled:text-neutral-400"
                onClick={() => console.log("Genearate Clicked", selectedOptions)}
            >
                Generate
            </button>
        </section>
    );
}

export default OutfitFilter;