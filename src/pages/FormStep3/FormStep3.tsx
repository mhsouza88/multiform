import * as C from './styles'
import { Theme } from '../../components/Theme/Theme'
import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { ChangeEvent, useEffect } from 'react'

export const FormStep3 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        })
    }, [])

    const handleNext = () => {
        if(state.name !== '' && state.email !== '' && state.github !== '') {
            navigate("/step4")
        } else {
            window.alert("É necessário preencher todos os campos.")
        }
    }

    useEffect(() => {
        if (state.name === "") {
            navigate("/")
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }
    }, [])

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: event.target.value
        })
    }

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: event.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep} de 3</p>
                <h1>Legal, {(state.name).split(" ")[0]}! Onde podemos te encontrar?</h1>
                <p>Preencha com seus dados para entrarmos em contato com você!</p>
                <hr />
                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                        title="Digite um e-mail válido."
                    />
                </label>
                <label>
                    Qual o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                        title="Digite uma URL válida."
                    />
                </label>
                <button onClick={handleNext}>Enviar</button>
                <Link to="/step2" className="backButton">Voltar</Link>
            </C.Container>
        </Theme>
    )
}

export default FormStep3