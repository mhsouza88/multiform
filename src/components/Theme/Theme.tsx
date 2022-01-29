import { ReactNode } from 'react'
import * as C from './styles'
import { Header } from '../Header/Header'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useForm } from '../../context/FormContext'

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm()

    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem 
                            title="Pessoal"
                            description="Sua identificação"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem 
                            title="Profissional"
                            description="O seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem 
                            title="Contatos"
                            description="Como te encontrar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                        </C.Sidebar>
                        <C.Page>
                            {children}
                        </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}