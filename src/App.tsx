import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/navigation';
import { Converter } from './views/converter';
import { Currency } from './views/currency';

function App() {
  return (
    <div className="app">
      <div className='app-container'>
        <Navigation />
        <div className='wrapper'>
          <Routes>
            <Route path="/" element={<Converter/>}/>
            <Route path="/currencies" element={<Currency/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
