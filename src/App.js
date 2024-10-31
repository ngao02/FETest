import './App.css';
import Body from './components/body-component/Body';
import Bottom from './components/bottom-component/Bottom';
import Top from './components/top-component/Top';

function App() {
    return (
        <div className="bg-[var(--bg-color)]">
            <Top />
            <div className="m-4 mb-[17px] flex flex-col gap-4">
                <Body />
                <Bottom />
            </div>
        </div>
    );
}

export default App;
