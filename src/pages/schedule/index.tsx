import { useNavigate } from "react-router-dom";
import { DateLabel } from "../../components/date-label";
import { Afternoon } from "./components/afternoon";
import { Evening } from "./components/evening";
import { Morning } from "./components/morning";
import style from "./schedule.module.scss";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { ISchedule } from "../../interface/schedule.interface";
import { getSchedule } from "../../api/controller/scheduleController";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function Schedule() {
  const [date, setDate] = useState<Value>(new Date());
  const [schedule, setSchedule] = useState<ISchedule[] | []>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSchedule() {
      const formattedDate =
        date instanceof Date
          ? date.toLocaleDateString("pt-BR")
          : null;

      if (formattedDate) {
        const response = await getSchedule(formattedDate);
        setSchedule(response);
      }
    }

    fetchSchedule();
  }, [date]);

  return (
    <section className={style.schedule}>
      <div className={style.scheduleWrapper}>
        <div className={style.scheduleContainer}>
          <div className={style.top}>
            <div>
              <h1 className="title">Sua agenda</h1>
              <p className="paragraph-medium">
                Aqui você pode ver todos os clientes e serviços agendados para
                hoje.
              </p>
            </div>
            <DateLabel date={date} setDate={setDate} />
          </div>

          <div className={style.scheduleList}>
            <Morning schedule={schedule} />
            <Afternoon schedule={schedule} />
            <Evening schedule={schedule} />
          </div>
        </div>

        <Button
          className={style.scheduling}
          onClick={() => navigate("/agendamento")}
        >
          <span className="label-large">NOVO AGENDAMENTO</span>
        </Button>
      </div>
    </section>
  );
}
