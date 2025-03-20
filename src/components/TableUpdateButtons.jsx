import { useContext } from "react";

import Icon from "./Icon.jsx";
import { WardrobeContext } from "../store/wardrobe-context.jsx";

export const TableUpdateButtons = () => {

    const { addNewItem } = useContext(WardrobeContext);

    return (
        <section className="flex flex-row gap-3 ml-[30px] mb-2">
            <button onClick={() => addNewItem(
                {
                    id: crypto.randomUUID(),
                    name: "",
                    category: "",
                    editMode: true
                }
            )} >
                <Icon iconName={"add"} color="text-neutral-600" />
            </button>
            <button>
                <Icon iconName={"edit"} color="text-neutral-600" />
            </button>
        </section>
    );
}

export default TableUpdateButtons;