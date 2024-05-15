import Card from '../components/Card'
import styles from '../styles/Form.module.css'

export default function Home() {
    return (
        <div className={styles.form}>
            <div>
                <Card bgcolor={"crimson"}>
                    <h1>Monty Hall</h1>
                </Card>
                <Card>
                </Card>
            </div>
            <div>
                <Card>
                </Card>
                <Card bgcolor={"#567e32"}>
                    <h2>Start</h2>
                </Card>
            </div>
        </div>
    )
}
