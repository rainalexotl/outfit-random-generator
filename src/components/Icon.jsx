const ICON_PATH_LIST = {
    edit: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
    ),
    add: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7 7V5"/>
    ),
    trash: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
    ),
    check: (
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11.917 9.724 16.5 19 7.5"/>
    )
};

export default function Icon({ iconName, color, size="7", fill="none" }) {
    const iconClasses = `w-${size} h-${size} ${color}`

    return (
        <svg className={iconClasses} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            fill={fill} viewBox="0 0 24 24">
            {ICON_PATH_LIST[iconName]}
        </svg>
    )
}