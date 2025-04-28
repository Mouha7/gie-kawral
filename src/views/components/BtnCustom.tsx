import { NavLink } from "react-router-dom";

type BtnCustomProps = {
    text?: string;
    to: string;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

export function BtnCustom({ text, to, className, disabled, type="button" }: Readonly<BtnCustomProps>) {
    return (
        <NavLink 
            className={`w-fit dark:bg-bio-contraste text-bio font-bold py-2 px-4 hover:bg-bio-contraste/50 ${className} ${disabled ? "opacity-50" : ""}`}
            to={to}
            type={type}
            style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        >
            {text}
        </NavLink>
    );
}

export function BtnLightCustom({ text, to, className, disabled, type="button" }: Readonly<BtnCustomProps>) {
    return (
        <NavLink 
            className={`w-fit dark:bg-bio text-bio-contraste font-bold py-2 px-4 hover:bg-bio/50 ${className} ${disabled ? "opacity-50" : ""}`}
            to={to}
            type={type}
            style={{ cursor: disabled ? "not-allowed" : "pointer" }}
        >
            {text}
        </NavLink>
    );
}