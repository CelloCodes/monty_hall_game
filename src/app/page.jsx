"use client"
import { useState } from "react";

import Prize from "../components/Prize";
import Door from "../components/Door";
import DoorModel from "../models/Door"

export default function Home() {
    const [d1, setD1] = useState(new DoorModel(1))
    return (
        <div style={{ display: "flex" }}>
            <Door door={d1}/>
        </div>
    );
}
