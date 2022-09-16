import { ChangeEvent, useState } from "react"


export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return { onChange, values }
}



