import Error from '../../assets/error.png'
import * as C from './styles'
import { Theme } from '../../components/Theme/Theme'

export const ErrorPage = () => {
    return (
        <Theme>
        <C.Container>
            <img src={Error} alt="Erro" />
        </C.Container>
        </Theme>
    )
}

export default ErrorPage