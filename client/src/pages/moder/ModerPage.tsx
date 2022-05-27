import { FC, useContext } from 'react'
import styled from 'styled-components'
import { useAuthContext } from '../../context/AuthContext'
import Auth from './Auth'
import { ToastContainer, toast } from 'react-toastify';
import ModerPanel from './ModerPanel/ModerPanel';

const StyledModerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface ModerPageProps {

}

const ModerPage: FC<ModerPageProps> = () => {
    
    const { isAuth } = useAuthContext()

    return (
        <StyledModerPage>
            {!isAuth
                ? <Auth />
                : <ModerPanel />}
            <ToastContainer position="bottom-right"/>
        </StyledModerPage>
    )
}
export default ModerPage