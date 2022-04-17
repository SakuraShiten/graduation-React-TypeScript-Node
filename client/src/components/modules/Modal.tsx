import React, { FC } from 'react'
import styled, { StyledFunction, keyframes } from 'styled-components';

const AnimShowModal = keyframes`
    from{opacity:0}
    to{opacity:1}
`
const AnimShowModalContent = keyframes`
    from{transform: translateY(100px)}
    to{transform: translateY(0px)}
`

const StyledModal = styled.div<{ activeModal: boolean }>`
    overflow: hidden;
    display: ${(p) => p.activeModal ? 'flex' : 'none'};;
    position: absolute !important;
    width: 100vw;
    height: 100vh;
    background-color: #00000050;
    z-index: 1;
    justify-content: center;
    align-items: center;
    left:0;
    animation: ${AnimShowModal} 0.3s linear;
    >div{
        animation: ${AnimShowModalContent} 0.3s linear;
        padding: 20px 50px;
        padding-top: 3vh;
        padding-bottom: 3vh;
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        >span{
            position: absolute;
            right: 5px;
            top: 2px;
            cursor: pointer;
        }
    }
    
`
interface ModalProps {
    activeModal: boolean;
    setActiveModal: (arg: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, activeModal, setActiveModal }) => {

    return (
        <StyledModal activeModal={activeModal} onClick={() => setActiveModal(false)}>
            <div onClick={e => e.stopPropagation()}>
                <span onClick={() => setActiveModal(false)}>Закрыть</span>
                {children}
            </div>
        </StyledModal >
    )
}

export default Modal