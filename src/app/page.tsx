"use client"
import { useState } from "react";

import Prize from "../components/Prize";
import Door from "../components/Door";
import DoorModel from "../models/Door"
import {create_doors, update_doors} from "../functions/doors";

export default function Home() {
    const [doors, setDoors] = useState(create_doors(2, 2))

    function render_doors() {
        return doors.map(door => {
            return <Door value={door} onChange={new_door => setDoors(update_doors(doors, new_door))} />
        })
    }

    return (
        <div style={{ display: "flex" }}>
            {render_doors()}
        </div>
    );
}
