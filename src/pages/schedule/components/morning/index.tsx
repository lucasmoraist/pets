import { useEffect, useState } from "react";
import { IScheduling } from "../../../../interface/scheduling";
import style from "./morning.module.scss";
import { schedulingMock } from "../../../../mocks/scheduling";
import { List } from "../../../../components/list";

export function Morning() {
  const [scheduling, setScheduling] = useState<IScheduling[]>([]);

  useEffect(() => {
    setScheduling(schedulingMock);
  }, []);

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
        {scheduling
          .filter((item) => item.time < "13:00")
          .map((item) => <List key={item.id} item={item} />)}
      </div>
    </div>
  );
}
