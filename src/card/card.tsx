import styles from './card.module.scss'
import cardfront from '../images/bg-card-front.png'
import cardback from '../images/bg-card-back.png'
import cx from 'classnames';
import { FormEvent, useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import { useForm } from '../hooks/OnChange';
import { useDebounce } from '../hooks/Debounce';
import { ReactComponent as Iconsvg } from '../svg/icon-complete.svg'

export default function Card() {
    const [submit, setSubmit] = useState<boolean>(true)

    const initialState: Cardstate = {
        name: 'Jane AppleSeed',
        month: '00',
        year: '00',
        card: '0000 0000 0000 0000',
        cvc: '000',
    }

    const { onChange, values } = useForm(initialState)
    const inputvalues = useDebounce(values, 500)

    function formats(input: string) {
        if (input.length < 19) {
            return input.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
        }
    }

    function numberValidation(input: string) {
        let pattern = /[^\d ]/g //check RegEx alphabet
        if (input.match(pattern)) return true;
    }

    function charCheck(input: string) {
        let pattern = /[0-9.*+?^${}()|[\]\\]/g //check RegEx number and special char
        if (input.match(pattern)) return true;
    }

    const submitForm = () => {
        //need to do data check
        setSubmit(!submit)
    }

    return <>
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.cardfrontcontainer}>
                    <img className={styles.cardfront} src={cardfront} alt="cardfront" />
                    <p className={styles.logo}><FaCircle className={styles.biglogo} /> <FaRegCircle /></p>
                    <p className={styles.cardnum}>{inputvalues.card}</p>

                    <span className={styles.namedate}>{inputvalues.name}</span>
                    <span className={styles.date}>{inputvalues.month}/{inputvalues.year}</span>

                </div>

                <div className={styles.cardbackcontainer}>
                    <img src={cardback} alt="cardback" />
                    <p className={styles.cvcnum}>{inputvalues.cvc}</p>
                </div>
            </div>
            {submit ? <form onSubmit={submitForm}>
                <div className={styles.formContainer}>

                    <label htmlFor="inputname" className={styles.inputname}>CARDHOLDER NAME</label>
                    <input type="text"
                        className={styles.inputname}
                        id="inputname"
                        name="name"
                        placeholder={"e.g. Jane AppleSeed"}
                        onChange={onChange}
                        maxLength={25}
                    />
                    {charCheck(inputvalues.name) ?
                        <p className={cx(styles.inputname, styles.textWrong)}>Wrong format, alphabet only</p> : <></>}

                    <label htmlFor="inputnumber" className={styles.inputnumber}>CARD NUMBER</label>
                    <input type="text"
                        className={numberValidation(inputvalues.card) ? cx(styles.inputnumber, styles.blank) : styles.inputnumber}
                        id="inputnumber"
                        name="card"
                        maxLength={19}
                        placeholder={'e.g. 1234 5678 9123 0000'}
                        value={formats(inputvalues.card)}
                        onChange={onChange}
                    />
                    {numberValidation(inputvalues.card) ?
                        <p className={cx(styles.inputnumber, styles.textWrong)}>Wrong format, numbers only</p> : <></>}

                    <label htmlFor="inputmonth" className={styles.inputmonth}>EXP.DATE(MM/YY)</label>
                    <input type="text"
                        className={inputvalues.month.length === 0 ? cx(styles.inputmonth, styles.blank) : styles.inputmonth}
                        id="inputmonth"
                        name="month"
                        maxLength={2}
                        placeholder={'MM'}
                        onChange={onChange}
                    />
                    <input type="text"
                        className={inputvalues.year.length === 0 ? cx(styles.inputyear, styles.blank) : styles.inputyear}
                        id="inputyear"
                        name="year"
                        maxLength={2}
                        placeholder={'YY'}
                        onChange={onChange}
                    />
                    {inputvalues.month.length === 0 || inputvalues.year.length === 0 ?
                        <p className={cx(styles.inputmonth, styles.text)}>Can't be blank</p> : <></>}

                    <label htmlFor="inputcvc" className={styles.inputcvc}>CVC</label>
                    <input type="text"
                        className={inputvalues.cvc.length === 0 ? cx(styles.inputcvc, styles.blank) : styles.inputcvc}
                        id="inputcvc"
                        name="cvc"
                        maxLength={3}
                        placeholder={'e.g. 123'}
                        onChange={onChange}
                    />
                    {inputvalues.cvc.length === 0 ? <p className={cx(styles.inputcvc, styles.text)}>Can't be blank</p> : <></>}
                    <button type="submit" className={styles.confirmbtn} onClick={submitForm}>Confirm</button>
                </div>
            </form> : <div className={styles.truecontainer}>
                <Iconsvg />
                <h1 className={styles.titlethankyou}>THANK YOU!</h1>
                <p className={styles.addedtext}>We've added your card details</p>
                <button className={styles.continuebtn} onClick={submitForm}>Continue</button>
            </div>
            }
        </div>

    </>
}