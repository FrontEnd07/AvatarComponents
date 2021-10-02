import './App.css';
import ColoredUserpic from "./components/ColoredUserpic"
import Avatar from "./assets/avatar-1577909_960_720.png"
function App() {
    return (
        <div className="App">
            <ColoredUserpic
                src={Avatar}
                size={86}
                margin={4}
                backgroundColor='red'
                colors={['green', 'blue']}
                hoverColors={['blue', 'green']}
                colorWidth={6}
            />
        </div>
    );
}

export default App;
