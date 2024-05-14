import styles from '../styles/Door.module.css'
import DoorModel from '../models/Door'

interface DoorProps {
    door: DoorModel
}

export default function Door(props: DoorProps) {
    const { door } = props
    const selected = door.selected ? styles.selected : ''

    return (
        <div className={styles.area}>
            <div className={`${styles.doorframe} ${selected}`}>
                <div className={styles.door}>
                    <div className={styles.number}>{door.number}</div>
                    <div className={styles.handle}></div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}