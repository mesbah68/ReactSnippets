import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Button, Typography, Avatar, Input, Modal, Form } from "antd";
import { Socket } from "socket.io-client";
// @ts-ignore
import { DeleteLightIcon, EditSquareLightIcon } from "@iconbox/iconly";
// @ts-ignore
import { MenuIcon } from "@iconbox/jamicons";
// @ts-ignore
import { SearchOutlineIcon } from "@iconbox/eva";

import {
  useContactsActions,
  ContactsSelectors,
  useActiveChatActions,
} from "../../../@redux";

import {
  StyledAvatarWrapper,
  StyledAddContactWrapper,
  StyledModalWrapper,
  StyledContactListContent,
  StyledUsername,
  StyledIconWrapper,
  StyledContactListWrapper,
  StyledHeaderWrapper,
  StyledSearchWrapper,
  StyledAddContactButton
} from "./style";

interface Props {
  socket: Socket;
}

const ContactsList = ({  }: Props) => {
  const contacts = useSelector(ContactsSelectors.getContacts);
  const { deleteContact } = useContactsActions();
  const { updateContact } = useContactsActions();
  const { addContact } = useContactsActions();
  const navigate = useNavigate();

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [contact, setContact] = useState("");
  const [localContacts, setLocalContacts] = useState<any>(contacts);
  const [username, setUsername] = useState("");
  const [updatedContactId, setUpdatedContactId] = useState("");
  const [searchedItem, setSearchedItem] = useState("");

  const { setActiveChat } = useActiveChatActions();

  useEffect(() => {
      setLocalContacts(contacts);
  },[contacts])

  useEffect(() => {
      const filteredContacts = contacts.filter((contact: { name: string; }) => contact.name.includes(searchedItem))
      setLocalContacts(filteredContacts);
      if (!searchedItem) {
          setLocalContacts(contacts);
      }
  },[searchedItem]);

  const handleSetActiveChat = (chatName: string,chatId: string) => {
      setActiveChat({name: chatName,id: chatId});
      navigate("/");
  }

  const { Text } = Typography;
  const contactsList = localContacts.map(
    (item: { avatar: React.ReactNode; name: string; id: string }) => (
      <StyledAvatarWrapper>
          <Avatar src={item.avatar} size="large" >{item.name[0].toUpperCase()}</Avatar>
        <StyledUsername onClick={() => handleSetActiveChat(item.name,item.id) }>{item.name}</StyledUsername>
        <StyledIconWrapper>
          <EditSquareLightIcon
            onClick={() => {
              showEditModal();
              setUpdatedContactId(item.id);
            }}
          />
          <DeleteLightIcon
            onClick={() => {
              deleteContact(item.id);
            }}
          >
            Delete
          </DeleteLightIcon>
        </StyledIconWrapper>
      </StyledAvatarWrapper>
    )
  );

  const handleEditContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContact({ id: updatedContactId, name: username });
    setIsEditModalVisible(false);
  };

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault();
    const avatar = "https://joeschmoe.io/api/v1/random";
    addContact({ name: contact, avatar });
    setIsAddModalVisible(false);
  };

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleCancel = () => {
    setIsEditModalVisible(false);
    setIsAddModalVisible(false);
  };

  const handleSearchContact = (e: any) => {
      e.preventDefault();
      const filteredContacts = contacts.filter((contact: { name: string; }) => contact.name.includes(searchedItem))
      setLocalContacts(filteredContacts);
      if (!searchedItem) {
          setLocalContacts(contacts);
      }
  }

  return (
      <StyledContactListWrapper>
        <StyledSearchWrapper>
            <form onSubmit={handleSearchContact} >
                <Input placeholder="Search" value={searchedItem} onChange={(e) => setSearchedItem((e.target.value))} />
                <SearchOutlineIcon size={3} onClick={handleSearchContact} />
            </form>
        </StyledSearchWrapper>
        <StyledHeaderWrapper>
            <span>Contacts List</span>
            <span>{contacts.length}</span>
        </StyledHeaderWrapper>
        <StyledContactListContent>{contactsList.length ? contactsList : "No contacts found"}</StyledContactListContent>
        <StyledModalWrapper>
          <Modal
              title="Add Contact"
              visible={isAddModalVisible}
              onCancel={handleCancel}
              onOk={handleAddContact}
              footer={[
                  <Button
                      type="link"
                      onClick={handleCancel}
                  >
                      Cancle
                  </Button>,
                  <Button key="submit" type="primary" className="chat-btn" onClick={handleAddContact}>
                      Add
                  </Button>,
              ]}
          >
            <StyledAddContactWrapper>
              <Text>Please enter your username</Text>
              <Input
                  placeholder="Username"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
              />
            </StyledAddContactWrapper>
          </Modal>
          </StyledModalWrapper>
        <StyledModalWrapper>
          <Modal
              title="Edit Contact"
              visible={isEditModalVisible}
              onCancel={handleCancel}
              onOk={handleEditContact}
              footer={[
                  <Button
                      type="link"
                      onClick={handleCancel}
                  >
                      Cancle
                  </Button>,
                  <Button key="submit" type="primary" className="chat-btn" onClick={handleEditContact}>
                      Edit
                  </Button>,
              ]}
          >
            <StyledAddContactWrapper>
              <Text>Please enter your username</Text>
              <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
            </StyledAddContactWrapper>
          </Modal>
        </StyledModalWrapper>
        <StyledAddContactButton onClick={() => setIsAddModalVisible(true)}>
          <span>+</span>
        </StyledAddContactButton>
      </StyledContactListWrapper>
  );
};

export default ContactsList;
