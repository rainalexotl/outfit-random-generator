import Icon from "./Icon.jsx";

export default function TableUpdateButtons() {
    return (
        <section className="ml-[30px]">
            <button>
                <Icon iconName={"add"} color="text-neutral-600" />
            </button>
            <button>
                <Icon iconName={"edit"} color="text-neutral-600" />
            </button>
        </section>
    );
}