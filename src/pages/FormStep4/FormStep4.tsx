import * as C from './styles'
import { Theme } from '../../components/Theme/Theme'
import { useForm, FormActions } from '../../context/FormContext'
import { useEffect } from 'react'

export const FormStep4 = () => {
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>Obrigada por enviar os seus dados, {(state.name).split(" ")[0]}!</p>
                <h1>Em breve entraremos em contato com você.</h1>
                <p>Confira os dados enviados:</p>
                <hr />
                <p><b>Nome completo:</b> {state.name}</p>
                <p><b>Seu nível:</b> {state.level}</p>
                <p><b>Seu e-mail:</b> {state.email}</p>
                <p><b>Seu GitHub:</b> {state.github}</p>
            </C.Container>
        </Theme>
    )
}

export default FormStep4