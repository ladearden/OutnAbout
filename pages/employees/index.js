import { useState } from "react";
import Employee from "../../components/Employee";
import styles from '../../styles/Home.module.css';


export async function getStaticProps({params}) {
    const req = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await req.json();

    return {
        props: {employees: data },
    }
}

export default function Index({employees}) {
    const [filter, setFilter] = useState([]);

    function handleSearch(event) {
        setFilter(event.target.value.toLowerCase());
    }

    function getResults(name, city) {
        if(name.toLowerCase().includes(filter))
            return name;
        else if(city.toLowerCase().includes(filter))
            return city;
    }

    return (
        <div className={styles.content}>
            <h1 >Employees</h1>
            <label className={styles.label}>Search: </label>
            <input type="input" className={styles.input} onChange={handleSearch}
                ></input>

            {employees.filter(e => getResults(e.name,e.address.city) ).map(employee => (
                <div key={employee.id}>
                    <Employee
                    name={employee.name}
                    email={employee.email}
                    city={employee.address.city}
                    website={employee.website}
                    id={employee.id}
                    ></Employee>
                </div>
            ))}
        </div>
    )
}
