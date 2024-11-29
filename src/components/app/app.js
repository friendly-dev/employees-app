import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{ name: 'John Wick', salary: 1, increase: false, id: 1 },
		{ name: 'John Perdun', salary: 999, increase: true, id: 2 },
		{ name: 'John Bagira', salary: 777, increase: false, id: 3 }
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;