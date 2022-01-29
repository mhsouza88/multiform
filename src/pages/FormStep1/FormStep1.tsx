import * as C from './styles'
import { Theme } from '../../components/Theme/Theme'
import { useNavigate } from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { ChangeEvent, useEffect } from 'react'

export const FormStep1 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNext = () => {
        if(state.name !== '') {
            navigate("/step2")
        } else {
            window.alert("É necessário colocar o seu nome para prosseguir.")
        }
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: event.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep} de 3</p>
                <h1>Vamos começar com o seu nome!</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>
                <hr />
                <label>
                    Seu nome completo:
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>
                <button onClick={handleNext}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep1