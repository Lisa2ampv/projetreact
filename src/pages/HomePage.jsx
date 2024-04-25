
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Titre } from "../components/Titre";

export function HomePage() {
    return (
      <div className="container"> 
          <div>
            <Titre> MEN WATCHES</Titre>
            <Button>Voir tout</Button>
          </div>
        <div className="cards-container">
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div>
            <Titre> SMARTHPONE</Titre>
            <Button>Voir tout</Button>
          </div>
        <div>
          <Card/>
          <Card/>
          <Card/>
        </div>
        
      </div>

    )
}