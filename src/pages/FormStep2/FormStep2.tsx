import * as C from './styles'
import { Theme } from '../../components/Theme/Theme'
import { useNavigate, Link } from 'react-router-dom'
import { useForm, FormActions } from '../../context/FormContext'
import { useEffect } from 'react'
import { SelectOption } from '../../components/SelectOption/SelectOption'

export const FormStep2 = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if (state.name === "") {
            navigate("/")
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, [])

    const handleNext = () => {
        if(state.name !== "") {
            navigate("/step3")
        } else {
            window.alert("É necessário colocar o seu nome para prosseguir.")
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep} de 3</p>
                <h1>{(state.name).split(" ")[0]}, o que melhor descreve você?</h1>
                <p>Escolha a opção que condiz com a sua experiência profissional.</p>
                <hr />
                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos."
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption 
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais."
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />
                <button onClick={handleNext}>Próximo</button>
                <Link to="/step1" className="backButton">Voltar</Link>
            </C.Container>
        </Theme>
    )
}

export default FormStep2