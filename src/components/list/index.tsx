import styled from "styled-components";
import { ISchedule } from "../../interface/schedule.interface";

interface Props {
  item: ISchedule;
}

export function List({ item }: Props) {
  return (
    <MorningItem>
      <div>
        <p className="label-medium">{item.time}</p>
        <PetOwner className="label-small">
          {item.pet} <span className="paragraph-small">/ {item.owner}</span>
        </PetOwner>
      </div>
      <Type className="paragraph-small">{item.type}</Type>
      <button className="paragraph-small">Remover agendamento</button>
    </MorningItem>
  );
}

const MorningItem = styled.div`
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
