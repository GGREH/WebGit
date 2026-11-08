import "./Disciplines.css";
import "../App.css";
import disciplines from "./disciplines.json";

export function Disciplines() {
    return (
        <>
            <section id="disciplines" className="flex flex-direction-column disciplines-section">
                <h2 className="h2-section">Дисципліни освітньої програми</h2>
                <div className="flex flex-wrap cards">
                    {disciplines.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={
                                    item.type === "math"
                                        ? "card-math card-img-text card flex flex-direction-column"
                                        : item.type === "data"
                                        ? "card-data card-img-text card flex flex-direction-column"
                                        : "card-it card-img-text card flex flex-direction-column"
                                }
                            >
                                <h3 className="card-title">{item.name}</h3>
                                <img className="card-img" src={item.photo} alt={item.name} />
                                <h4 className="card-title card-price">
                                    {item.credits} кредитів ЄКТС ({item.semester})
                                </h4>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
