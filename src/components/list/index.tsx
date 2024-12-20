import styled from "styled-components";
import { ISchedule } from "../../interface/schedule.interface";
import { useState } from "react";
import { ModalDelete } from "../../pages/schedule/components/modal-delete";

interface Props {
  item: ISchedule;
}

export function List({ item }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);
  
  return (
    <>
      <ListItem>
        <div>
          <p className="label-medium">{item.time}</p>
          <PetOwner className="label-small">
            {item.pet} <span className="paragraph-small">/ {item.owner}</span>
          </PetOwner>
        </div>
        <Type className="paragraph-small">{item.type}</Type>
        <button className="paragraph-small" onClick={toggleModal}>
          Remover agendamento
        </button>
      </ListItem>
      {modalIsOpen && (
        <ModalContainer>
          <ModalDelete setModalIsOpen={setModalIsOpen} item={item} />
        </ModalContainer>
      )}
    </>
  );
}

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  border-bottom: solid 1px #2e2c30;

  &:last-child {
    border-bottom: none;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 16px;

    span {
      color: #98959d;
    }
  }
  button {
    background: none;
    border: none;
    color: #666666;
    cursor: pointer;
  }
`;

const PetOwner = styled.p`
  width: 195px;
  text-align: start;
`;

const Type = styled.p`
  color: #98959d;
  width: 220px;
  text-align: start;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
