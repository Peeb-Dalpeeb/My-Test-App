interface MenuButtonsProps {
    icon: React.ReactNode;
    name: string;
}

export function MenuButtons({ icon, name }: MenuButtonsProps) {
    return (
        <button className="flex items-center gap-5 bg-primary p-4 rounded-2xl text-white font-medium w-full" type="button" aria-label={name}>
            <div className="text-2xl">
                {icon}
            </div>
            <span>{name}</span>
        </button>
    );
}