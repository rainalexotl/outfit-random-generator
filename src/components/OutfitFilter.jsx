import axios from "axios";
import slugify from "slugify";

import { useContext, useState } from "react";
import { categoryColors } from "../data";
import { WardrobeContext } from "../store/wardrobe-context";

const categoryOptions = Object.keys(categoryColors);
const APIKEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?client_id=${APIKEY}`

function filterWardrobe(wardrobe, category) {
    // filters wardrobe by category
    return wardrobe.filter(item => item.category === category);
}

export const OutfitFilter = () => {

    const [ selectedOptions, setSelectedOptions ] = useState(new Set());
    const { wardrobe } = useContext(WardrobeContext);

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
        let suggestions = [];
        for (const category of selectedOptions) {
            console.log(category);
            const filteredWardrobe = filterWardrobe(wardrobe, category); // filter in only items that match category
            const selectedItem = filteredWardrobe[Math.floor(Math.random() * filteredWardrobe.length)]; // randomly choose item from category
            const slug = slugify(selectedItem.name);
            const queryUrl = `${UNSPLASH_URL}&query=${slug}`;
            try {
                const response = await axios.get(queryUrl);
                const top10 = response.data.results;
                // const suggestion = top10[Math.floor(Math.random() * top10.length)]; // random select from top 10
                const suggestion = top10[0]; // most relevant result
                suggestions.push({
                    name: selectedItem.name,
                    category: selectedItem.category,
                    imgUrl: suggestion.urls.small
                });
            } catch (error) {
                console.error("Something went wrong:", error.message);
            }
        }
        console.log(suggestions);
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