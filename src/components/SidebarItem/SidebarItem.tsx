import * as C from './styles'
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg'
import { ReactComponent as BookIcon } from '../../assets/book.svg'
import { ReactComponent as MailIcon } from '../../assets/mail.svg'

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active } : Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>
                        {title}
                    </C.Title>
                    <C.Description>
                        {description}
                    </C.Description>
                </C.Info>
                <C.Icon active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={'1.5rem'} height={'1.5rem'} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={'1.5rem'} height={'1.5rem'} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={'1.5rem'} height={'1.5rem'} />
                    }
                </C.Icon>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}

export default SidebarItem