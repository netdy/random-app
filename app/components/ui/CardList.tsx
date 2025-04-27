import { Card, CardProps } from "./Card";

type CardListProps = {
    cards: CardProps[]; 
};

export const CardList = ({ cards }: CardListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {cards.map((card, index) => (
            <Card key={index} label={card.label} linkTo={card.linkTo} />
        ))}
        </div>
    );
};
