import style from "./evening.module.scss";
import { List } from "../../../../components/list";
import { ISchedule } from "../../../../interface/schedule.interface";

interface Props {
  schedule: ISchedule[];
}

export function Evening({ schedule }: Props) {
  return (
    <div className={style.eveningContainer}>
      <div className={style.eveningTop}>
        <div>
          <img src="assets/svg/Moon-Stars--Streamline-Solar.svg" alt="" />
          <p className="label-large">Noite</p>
        </div>

        <span className="label-large">19h-21h</span>
      </div>

      <div className={style.eveningBottom}>
        {schedule
          .filter((item) => item.time >= "19:00" && item.time <= "21:00")
          .map((item) => (
            <List key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
