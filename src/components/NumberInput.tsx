import styles from '../styles/NumberInput.module.css'

interface NumberInputProps {
    text: string
    value: number
    onChange: (new_value: number) => void
}

export default function NumberInput(props: NumberInputProps) {
    const upper_limit = props.value >= 16 ? styles.limit : false
    const lower_limit = props.value <= 1 ? styles.limit : false
    const dec = () => props.onChange(props.value > 1 ? props.value - 1 : props.value)
    const inc = () => props.onChange(props.value < 16 ? props.value + 1 : props.value)

    return (
        <div className={styles.number_input}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${lower_limit}`} onClick={dec}>-</button>
                <button className={`${styles.button} ${upper_limit}`} onClick={inc}>+</button>
            </div>
        </div>
    )
}