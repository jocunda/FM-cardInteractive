import styles from './card.module.scss'
import cardfront from '../images/bg-card-front.png'
import cardback from '../images/bg-card-back.png'
import cx from 'classnames';

export default function Card() {

    return <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={cardfront} alt="cardfront" />
                <img className={styles.cardback} src={cardback} alt="cardback" />
            </div>
            <form action="" method="post" >
                <div className={styles.formContainer}>
                    <label htmlFor="inputname">CARDHOLDER NAME</label>
                    <input type="text" className={styles.input} id={styles.inputname} />
                    <label htmlFor="inputname">CARD NUMBER</label>
                    <input type="number" className={styles.input} id={styles.inputnumber} />
                    <label htmlFor="inputname">EXP. DATE(MM/YY)</label>
                    <input type="date" className={styles.input} id={styles.inputmonth} />
                    <input type="date" className={styles.input} id={styles.inputyear} />
                    <label htmlFor="inputname">CVC</label>
                    <input type="number" className={styles.input} id={styles.inputcvc} />
                    <button type="submit">Confirm</button>
                </div>
            </form>

        </div>

    </>
}