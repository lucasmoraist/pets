import { useEffect, useState } from "react";
import { IScheduling } from "../../../../interface/scheduling";
import style from "./afternoon.module.scss";
import { schedulingMock } from "../../../../mocks/scheduling";
import { List } from "../../../../components/list";

export function Afternoon() {
  const [scheduling, setScheduling] = useState<IScheduling[]>([]);

  useEffect(() => {
    setScheduling(schedulingMock);
  }, []);

  return (
    <div className={style.afternoonContainer}>
      <div className={style.afternoonTop}>
        <div>
          <img src="assets/svg/Cloud-Sun-4--Streamline-Solar.svg" alt="" />
          <p className="label-large">Tarde</p>
        </div>

        <span className="label-large">13h-18h</span>
      </div>

      <div className={style.afternoonBottom}>
        {scheduling
          .filter((item) => item.time >= "13:00" && item.time < "19:00")
          .map((item) => (
            <List key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
