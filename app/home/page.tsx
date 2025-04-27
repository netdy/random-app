import { CardList } from "../components/ui/CardList";

export default function HomePage() {
    const cards = [
        { label: "Random Thai ID" , linkTo: "/home/thai_id" },
        { label: "Card 2" ,linkTo: "/card1"},
    ];

    return (
        <main className="flex-1 container mx-auto p-4">
                <CardList cards={cards} />
        </main>
        );
    }
    