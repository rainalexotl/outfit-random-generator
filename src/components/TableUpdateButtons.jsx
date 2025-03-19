import Icon from "./Icon.jsx";

export default function TableUpdateButtons() {
    return (
        <section className="flex flex-row gap-3 ml-[30px] mb-2">
            <button>
                <Icon iconName={"add"} color="text-neutral-600" />
            </button>
            <button>
                <Icon iconName={"edit"} color="text-neutral-600" />
            </button>
        </section>
    );
}