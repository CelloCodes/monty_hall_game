import styles from '../styles/NumberInput.module.css'
import format_position from '../functions/number_input.js'

interface NumberInputProps {
    text: string
    value: number
    max_value: number
    type?: string
    onChange: (new_value: number) => void
}

export default function NumberInput(props: NumberInputProps) {
    const upper_limit = props.value >= props.max_value ? styles.limit : false
    const lower_limit = props.value <= 1 ? styles.limit : false
    const dec = () => props.onChange(props.value > 1 ? props.value - 1 : props.value)
    const inc = () => props.onChange(props.value < props.max_value ? props.value + 1 : props.value)

    let value = props.value
    let dec_symbol = '-'
    let inc_symbol = '+'
    if (props.type === 'position') {
        value = format_position(value) 
        dec_symbol = '\u003C'
        inc_symbol = '\u003E'
    }

    return (
        <div className={styles.number_input}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{value}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${lower_limit}`} onClick={dec}>{dec_symbol}</button>
                <button className={`${styles.button} ${upper_limit}`} onClick={inc}>{inc_symbol}</button>
            </div>
        </div>
    )
}
