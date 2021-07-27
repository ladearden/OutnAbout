import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Modal from '../components/Modal';
import Task from '../components/Task';


export default function Employee(props) {
    const [isOpen, setIsOpen] = useState(false)

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadData() {
            const req = await fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/todos`);
            const data = await req.json();
            setTasks(data);
        }

        loadData();
    }, []);

    return (
        <div>
            <div className={styles.card} >
                <div className={styles.cardName} key={props.id}>
                    Name: {props.name}
                </div>
                <div className={styles.cardEmail}>
                    Email: {props.email}
                </div>
                <div className={styles.cardCity}>
                    City: {props.city}
                </div>
                <div className={styles.cardWebsite}>
                    Website: {props.website}
                </div>
                <button onClick={() => setIsOpen(true)}>Open Tasks</button>
                <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}>
                    <div> <h3>{props.name}&apos;s tasks</h3></div>
                    {tasks.map(t => (
                        <div key={t.id}>
                            <Task
                            title={t.title}
                            completed={t.completed}
                            ></Task>
                        </div>
                    ))}
                </Modal>
            </div>
        </div>
    )
}



