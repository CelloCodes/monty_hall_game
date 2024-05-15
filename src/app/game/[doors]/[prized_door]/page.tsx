"use client"
import styles from '../../../../styles/Game.module.css'
import {useEffect, useState} from "react";
import {create_doors, update_doors} from "../../../../functions/doors";
import Door from "../../../../components/Door";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function game() {
    const [doors, setDoors] = useState([])

    const pathname = usePathname()
    useEffect(() => {
        const door_amount = +pathname.split('/')[2]
        const prized_door = +pathname.split('/')[3]
        setDoors(create_doors(door_amount, prized_door))
    }, [pathname])

    function render_doors() {
        return doors.map(door => {
            return <Door key={door.number} value={door} onChange={new_door => setDoors(update_doors(doors, new_door))} />
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                {render_doors()}
            </div>
            <div className={styles.buttons}>
                <Link href="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    );

}