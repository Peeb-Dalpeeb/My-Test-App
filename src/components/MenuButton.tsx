import { ButtonHTMLAttributes } from "react";

interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    label: string;
    variant?: 'primary' | 'ghost';
    collapsed?: boolean;
}

export function MenuButton({ 
    icon, 
    label,
    variant = 'ghost',
    className = '',
    collapsed = false,
    ...props
}: MenuButtonProps) {
    const baseStyles = "flex items-center gap-5 p-4 rounded-2xl font-medium w-full transition-colors";
    
    const variantStyles = variant === 'primary' 
        ? "bg-primary hover:bg-blue-700 text-white" 
        : "bg-transparent text-muted hover:bg-primary hover:text-white";

    return (
        <button type="button" className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
            <span className="text-2xl flex-shrink-0" aria-hidden="true">
                {icon}
            </span>
            {!collapsed && (
                <span>{label}</span>
            )}
        </button>
    );
}