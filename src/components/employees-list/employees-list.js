import EmployeesListItem from "../employees-list_item/employees-list-item";
import "./employees-list.css"

const EmployeesList = () => {
    <ul className="applist list-group">
        <EmployeesListItem />
        <EmployeesListItem />
        <EmployeesListItem />
    </ul>
}

export default EmployeesList;