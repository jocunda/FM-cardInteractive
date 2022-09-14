import styles from './card.module.scss'
import cardfront from '../images/bg-card-front.png'
import cardback from '../images/bg-card-back.png'
import cx from 'classnames';
import { useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { useForm } from '../hooks/OnChange';
import { useDebounce } from '../hooks/Debounce';

export default function Card() {


    const initialState: Cardstate = {
        name: 'Jane AppleSeed',
        date: '00/00',
        card: '0000 0000 0000 0000',
        cvc: '000',
    }

    const { onChange, values } = useForm(initialState)
    const inputvalues = useDebounce(values, 500)


    return <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.cardfrontcontainer}>
                    <img className={styles.cardfront} src={cardfront} alt="cardfront" />
                    <p className={styles.logo}><FaCircle className={styles.biglogo} /> <FaRegCircle /></p>
                    <p className={styles.cardnum}>{inputvalues.card}</p>

                    <span className={styles.namedate}>{inputvalues.name}</span>
                    <span className={styles.date}>{inputvalues.date}</span>

                </div>

                <div className={styles.cardbackcontainer}>
                    <img src={cardback} alt="cardback" />
                    <p className={styles.cvcnum}>{inputvalues.cvc}</p>
                </div>
            </div>
            <form action="" method="post" >
                <div className={styles.formContainer}>
                    <label htmlFor="inputname" className={styles.inputname}>CARDHOLDER NAME</label>
                    <input type="text"
                        className={cx(styles.input, styles.inputname)}
                        id="inputname"
                        name="name"
                        placeholder="e.g. Jane AppleSeed"
                        onChange={onChange}
                    />
                    <label htmlFor="inputnumber" className={styles.inputnumber}>CARD NUMBER</label>
                    <input type="number"
                        className={cx(styles.input, styles.inputnumber)}
                        id="inputnumber"
                        name="card"
                        maxLength={16}
                        onChange={onChange}
                    />
                    <label htmlFor="inputmonth" className={styles.inputmonth}>EXP.DATE(MM/YY)</label>
                    <input type="number"
                        className={cx(styles.input, styles.inputmonth)}
                        id="inputmonth"
                        name="date"
                        maxLength={2}
                        onChange={onChange}
                    />
                    <input type="number"
                        className={cx(styles.input, styles.inputyear)}
                        id="inputyear" min="22" max="99" step="1"
                        onChange={onChange}
                    />
                    <label htmlFor="inputcvc" className={styles.inputcvc}>CVC</label>
                    <input type="number"
                        className={cx(styles.input, styles.inputcvc)}
                        id="inputcvc"
                        name="cvc"
                        maxLength={3}
                        onChange={onChange}
                    />
                    <button type="submit" className={styles.confirmbtn}>Confirm</button>
                </div>
            </form>

        </div>

    </>
}