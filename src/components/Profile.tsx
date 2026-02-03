
interface ProfileProps {
  imageUrl: string;
  name: string;
  occupation: string;
  isCollapsed?: boolean;
}

export function Profile({ imageUrl, 
    name, 
    occupation,
    isCollapsed = false,
}: ProfileProps) {
    return (
        <section className="flex flex-col items-center pb-8">
            <img className={`rounded-full object-cover transition-[width,height] duration-300 ${isCollapsed ? 'w-12 h-12' : 'w-32 h-32'}`} src={imageUrl} alt={name}  />
            
            {!isCollapsed && (
                <div className="text-center fade-in">
                    <h2 className="text-lg font-medium mt-4">{name}</h2>
                    <p className="text-base font-light text-muted mt-2">{occupation}</p>
                </div>
            )}
        </section>
    );
}