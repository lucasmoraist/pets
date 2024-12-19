import { useEffect, useState } from "react";
import { IScheduling } from "../../../../interface/scheduling";
import style from "./evening.module.scss";
import { schedulingMock } from "../../../../mocks/scheduling";
import { List } from "../../../../components/list";

export function Evening() {
  const [scheduling, setScheduling] = useState<IScheduling[]>([]);

  useEffect(() => {
    setScheduling(schedulingMock);
  }, []);

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
        {scheduling
          .filter((item) => item.time >= "19:00" && item.time <= "21:00")
          .map((item) => (
            <List key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
