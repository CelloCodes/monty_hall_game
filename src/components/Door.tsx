import styles from '../styles/Door.module.css'
import DoorModel from '../models/Door'
import Prize from "./Prize";

interface DoorProps {
    value: DoorModel
    onChange: (new_door: DoorModel) => void
}

export default function Door(props: DoorProps) {
    const door = props.value
    const selected = door.selected && !door.open ? styles.selected : ''

    const switch_selection = e => props.onChange(door.switch_selection())
    const open_door = e => {
        e.stopPropagation()
        props.onChange(door.open_door())
    }

    function render_door () {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.handle} onClick={open_door}></div>
            </div>
        )
    }

    return (
        <div className={styles.area} onClick={switch_selection}>
            <div className={`${styles.doorframe} ${selected}`}>
                {!door.open ?
                    render_door() :
                    door.has_prize ? <Prize/> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}