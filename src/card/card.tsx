import styles from './card.module.scss'
import cardfront from '../images/bg-card-front.png'
import cardback from '../images/bg-card-back.png'
import cx from 'classnames';
import { useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa'

export default function Card() {
    const [name, setName] = useState<string>('Jane AppleSeed')
    const [date, setDate] = useState<string>('00/00')
    const [card, setCard] = useState<string>('0000 0000 0000 0000')
    const [cvc, setCvc] = useState<string>('000')

    return <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.cardfrontcontainer}>
                    <img className={styles.cardfront} src={cardfront} alt="cardfront" />
                    <p className={styles.logo}><FaCircle className={styles.biglogo} /> <FaRegCircle /></p>
                    <p className={styles.cardnum}>{card}</p>
                    <p className={styles.namedate}>
                        <span>{name}</span>
                        <span className={styles.date}>{date}</span>
                    </p>
                </div>

                <div className={styles.cardbackcontainer}>
                    <img src={cardback} alt="cardback" />
                    <p className={styles.cvcnum}>{cvc}</p>
                </div>
            </div>
            <form action="" method="post" >
                <div className={styles.formContainer}>
                    <label htmlFor="inputname" className={styles.inputname}>CARDHOLDER NAME</label>
                    <input type="text"
                        className={cx(styles.input, styles.inputname)}
                        id="inputname"
                        placeholder="e.g. Jane AppleSeed"
                    />
                    <label htmlFor="inputnumber" className={styles.inputnumber}>CARD NUMBER</label>
                    <input type="number" className={cx(styles.input, styles.inputnumber)} id="inputnumber" maxLength={16} />
                    <label htmlFor="inputmonth" className={styles.inputmonth}>EXP.DATE(MM/YY)</label>
                    <input type="number" className={cx(styles.input, styles.inputmonth)} id="inputmonth" maxLength={2} />
                    <input type="number" className={cx(styles.input, styles.inputyear)} id="inputyear" min="22" max="2099" step="1" />
                    <label htmlFor="inputcvc" className={styles.inputcvc}>CVC</label>
                    <input type="number" className={cx(styles.input, styles.inputcvc)} id="inputcvc" maxLength={3} />
                    <button type="submit" className={styles.confirmbtn}>Confirm</button>
                </div>
            </form>

        </div>

    </>
}