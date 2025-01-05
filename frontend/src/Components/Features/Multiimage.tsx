import "./Multiimage.css";
import cardDatas from "../../Data/Data/Multiimageprocess";
import FeatureCard from "./FeatureCard";

export default function CardGroupExample() {
  return (
    <>
      <h1 style={{ marginTop: "5%", marginLeft: "3%" }}>
        Process capabilities
      </h1>
      <div className="mainimage">
        {cardDatas.map((card) => {
          return (
            <>
              <FeatureCard
                key={card.id}
                title={card.title}
                image={card.image}
                features={card.features}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
