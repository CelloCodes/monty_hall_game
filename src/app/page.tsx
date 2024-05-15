"use client"
import Card from '../components/Card'
import styles from '../styles/Form.module.css'
import Link from 'next/link'
import NumberInput from "../components/NumberInput";
import { useState } from "react";

export default function Home() {
    const [door_amount, set_door_amount] = useState(3)
    const [prize_door, set_prize_door] = useState(1)

    return (
        <div className={styles.form}>
            <div>
                <Card bgcolor={"crimson"}>
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                    <NumberInput text={"Door amount"} value={door_amount}
                                 onChange={new_door_amount => set_door_amount(new_door_amount)} />
                </Card>
            </div>
            <div>
                <Card>
                    <NumberInput text={"Prize Door"} value={prize_door}
                                 type={"position"}
                                 onChange={new_prize_door => set_prize_door(new_prize_door)} />
                </Card>
                <Card bgcolor={"#567e32"}>
                    <Link href={`/game/${door_amount}/${prize_door}`}>
                        <h2 className={styles.link}>Start</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
