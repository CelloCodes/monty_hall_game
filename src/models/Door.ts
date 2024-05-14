export default class DoorModel {
    #number: number
    #has_prize: boolean
    #selected: boolean
    #open: boolean

    constructor(number: number, has_prize = false, selected = false, open = false) {
        this.#number = number
        this.#has_prize = has_prize
        this.#selected = selected
        this.#open = open
    }

    get number() {
        return this.#number
    }

    get has_prize() {
        return this.#has_prize
    }

    get selected() {
        return this.#selected
    }

    get open() {
        return this.#open
    }

    remove_selection() {
        return new DoorModel(this.number, this.has_prize, false, this.open)
    }

    switch_selection() {
        const selected = !this.selected
        return new DoorModel(this.number, this.has_prize, selected, this.open)
    }

    open_door() {
        return new DoorModel(this.number, this.has_prize, this.selected, true)
    }
}