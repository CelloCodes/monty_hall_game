import styles from '../styles/Info.module.css'

export default function Info() {
    return (
        <div>
            <div className={styles.info}>
                <span className={styles.circled}>&#8505;</span>
            </div>
            <div className={styles.card}>
                <span>The Monty Hall problem plays around with probability in a very interesting way. The game revolves around a player and a host, and has a few basic rules:</span>
                <ul>
                    <li>1. The player must choose a door at the start of the game.</li>
                    <li>2. The host must open all the doors, except for the one the player chose and another one.</li>
                    <li>3. The host must not open the door that contains the prize.</li>
                    <li>4. The player is then given the chance to switch doors.</li>
                    <li>5. After the player makes their decision, the host must open the door chosen by the player and
                        reveal the result.
                    </li>
                </ul>
                <span><br/></span>
                <span>
                    The interesting part is that, when the first choice is made, there is a 1/3 chance that the chosen door is the correct one, and a 2/3 chance that the correct door is one of the others.
                    But after the host opens one of the doors, the chance that one of the doors that was not chosen is the right one is still 2/3, but it has been "concentrated" on the other door.
                    So the 50/50 chance that the game appears to acquire after one of the doors has been opened is actually false, and you are more likely to win the game if you switch doors every time.
                </span>
                <span><br/></span>
                <span>
                    I highly recommend watching a video on the topic because it's a very interesting demonstration of how probability works.
                </span>
            </div>
        </div>
    )
}