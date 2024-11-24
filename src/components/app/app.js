import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel.js/search-panel';
import AppFilter from '../app-filter/app-filter';

import './app.css'

function App() {
    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

        </div>
    )
}

export default App;