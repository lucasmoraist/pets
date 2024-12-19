import style from "./morning.module.scss";
import { List } from "../../../../components/list";
import { ISchedule } from "../../../../interface/schedule.interface";

interface Props {
  schedule: ISchedule[];
}

export function Morning({ schedule }: Props) {
  return (
    <div className={style.morningContainer}>
      <div className={style.morningTop}>
        <div>
          <img src="assets/svg/Sun-Fog--Streamline-Solar.svg" alt="" />
          <p className="label-large">Manhã</p>
        </div>

        <span className="label-large">09h-12h</span>
      </div>

      <div className={style.morningBottom}>
        {schedule
          .filter((item) => item.time < "13:00")
          .map((item) => (
            <List key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
