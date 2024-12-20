import styled from "styled-components";
import { ISchedule } from "../../../../interface/schedule.interface";
import { deleteSchedule } from "../../../../api/controller/scheduleController";

interface Props {
  item: ISchedule;
  setModalIsOpen: (value: boolean) => void;
}

export function ModalDelete({ setModalIsOpen, item }: Props) {
  const id = item.id;
  
  const handleDelete = async () => {
    try {
      if (!id) {
        throw new Error("Id não encontrado");
      }
      await deleteSchedule(id);
      setModalIsOpen(false);
    } catch (error) {
      console.error("Erro ao deletar agendamento:", error);
    }
  }

  return (
    <ModalContainer>
      <p className="label-large">Deseja cancelar a reserva?</p>
      <Buttons>
        <ButtonCancel onClick={() => setModalIsOpen(false)}>
          Cancelar
        </ButtonCancel>
        <ButtonDelete onClick={handleDelete}>Excluir</ButtonDelete>
      </Buttons>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: #14151d;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const ButtonCancel = styled.button`
  background: none;
  border: none;
  color: #666666;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    color: #f2f2f2;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }
`;

const ButtonDelete = styled.button`
  background: #ff0000;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  line-height: 17px;

  &:hover {
    background: #ff1a1a;
    transition: 0.3s;
  }

  &:not(:hover) {
    transition: 0.3s;
  }

  &:active {
    background: #cc0000;
  }
`;
