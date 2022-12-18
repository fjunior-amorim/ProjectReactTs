import Modal from 'react-modal';
import { UserData } from '../../TYpes/index';
import { X } from 'phosphor-react';
import { Container, ImageUser, InfoUserContaier } from './modal.module';

interface userInfoModalProts {
    isOpen: boolean;
    onRequestClose: () => void;
    userSelected: UserData | undefined;
}

function ModalInfo({ isOpen, onRequestClose, userSelected } : userInfoModalProts) {
    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName= "react-modal-overlay"
        className="react-modal-info"
        ariaHideApp={false}
        contentLabel="Informações do Usuario"
        >
        
            
            <Container className='react-modal-content'>
                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <X size="18" weight="bold" />
                </button>
                <ImageUser>
                    <img src={userSelected?.picture.medium} />
                </ImageUser>
                <InfoUserContaier>
                    <p><strong>Nome:</strong> {`${userSelected?.name.first} ${userSelected?.name.last}`}</p>
                    <p><strong>E-mail:</strong> {userSelected?.email}</p>
                    <p><strong>Celular:</strong> {userSelected?.cell}</p>
                    <p><strong>Idade:</strong> {userSelected?.dob.age}</p>
                </InfoUserContaier>
            </Container>

        </Modal >       

    )
}

export default ModalInfo;