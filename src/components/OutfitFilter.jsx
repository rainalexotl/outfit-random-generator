import axios from "axios";

import { useState } from "react";
import { categoryColors } from "../data";

const categoryOptions = Object.keys(categoryColors);
const APIKEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${APIKEY}`

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

    const handleGenerateClick = async () => {
        console.log("Generate clicked", selectedOptions);
        const queryUrl = `${UNSPLASH_URL}&query=dog`

        try {
            const response = await axios.get(queryUrl, {
                onDownloadProgress: (progressEvent) => {
                    console.log(progressEvent.lengthComputable)
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error("Something went wrong:", error.message)
        }
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
                onClick={handleGenerateClick}
            >
                Generate
            </button>
        </section>
    );
}

export default OutfitFilter;