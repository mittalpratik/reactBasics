export default function TabButton({children, isSelected, ...props}) {
    console.log("Tabbutton compnent");
    return (
        <li>
            <button className={isSelected?'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}