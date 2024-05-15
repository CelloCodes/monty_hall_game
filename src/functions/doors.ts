import DoorModel from "../models/Door";

export function create_doors(amount: number, prize_door: number): DoorModel[] {
    return Array.from({ length: amount }, (_, i) => {
        const number = i + 1
        const has_prize = prize_door === number
        return new DoorModel(number, has_prize)
    })
}

export function update_doors(doors: DoorModel[], modified: DoorModel) {
    return doors.map(door => {
        if (door.number === modified.number) {
            return modified
        }
        return modified.open ? door : door.remove_selection()
    })
}
