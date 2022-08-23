import { Monster } from "../../App";
import Card from "../card/card.component";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
