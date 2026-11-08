import "./App.css";
import { Header } from "./components/Header.jsx";
import { ProgramInfo } from "./components/ProgramInfo.jsx";
import { Disciplines } from "./components/Disciplines.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
    return (
        <>
            <Header />
            <ProgramInfo />
            <Disciplines />
            <Footer />
        </>
    );
}

export default App;
