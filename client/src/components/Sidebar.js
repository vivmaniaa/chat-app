import React, {useState} from 'react';
import { Tab, Nav, Button, Modal  } from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';
import NewConversationModal from './NewConversationModal';
import NewContactModal from './NewContactModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const conversationOpen  = activeKey === CONVERSATIONS_KEY;

    const [openModal, setOpenModal] = useState(false);

    const closeModal = ()=>{
        setOpenModal(false);
    }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
            <Tab.Container className="d-flex d-flex-columns" activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversation</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey={CONTACTS_KEY}>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="border-right overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container> 
            <div className="border-top border-right p-2 small">
                Your ID: <span className="text-muted">{id}</span>
            </div>
            <Button onClick={()=>setOpenModal(true)} className="rounded-0">
                New {conversationOpen ? 'conversation' : 'contact'}
            </Button>

            <Modal show={openModal}  onHide={closeModal}>
                { conversationOpen ? <NewConversationModal closeModal={closeModal} /> : <NewContactModal closeModal={closeModal} /> }
            </Modal>
        </div>
    );
}

export default Sidebar;
