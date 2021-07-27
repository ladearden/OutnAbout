import styles from '../styles/Home.module.css';

function Task(props) {
    return (
        <div>
            <div className={styles.card} >
                <div ><strong>Task Title:</strong> {props.title}</div>
                <div><strong>Status:</strong> {props.completed  ? "Completed" : "In progress" }</div>
            </div>
        </div>
    )
}

export default Task
