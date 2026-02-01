
interface ProfileProps {
  imageUrl: string;
  name: string;
  occupation: string;
}

export function Profile({ imageUrl, name, occupation }: ProfileProps) {
    return (
        <section className="flex flex-col items-center pb-8">
            <img className="w-32 h-32 rounded-full object-cover" src={imageUrl} alt={name}  />
            <h2 className="text-lg font-medium mt-4">{name}</h2>
            <p className="text-base font-light text-muted mt-2">{occupation}</p>
        </section>
    );
}