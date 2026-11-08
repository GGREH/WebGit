import "./ProgramInfo.css";
import "../App.css";
import programData from "./programInfo.json";

export function ProgramInfo() {
    return (
        <>
            <section id="advantages" className="flex flex-direction-column info-section">
                <h2 className="h2-section">Переваги освітньої програми</h2>
                <div className="flex flex-wrap info-cards">
                    {programData.map((item) => {
                        return (
                            <div key={item.id} className="info-card flex flex-direction-column">
                                <h3 className="info-title">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}
