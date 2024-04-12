import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Chat from "./Components/Chat";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Chat />
            <Footer />
        </div>
    );
}

export default App;
