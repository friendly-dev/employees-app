import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data }) => {

    const elements = data.map(item => {
        const { id, ...dataProps } = item;
        return (
            <EmployeesListItem key={id}/*name={item.name} salary={item.salary}*/  {...dataProps} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;