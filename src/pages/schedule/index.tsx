import { useNavigate } from "react-router-dom";
import { DateLabel } from "../../components/date-label";
import { Afternoon } from "./components/afternoon";
import { Evening } from "./components/evening";
import { Morning } from "./components/morning";
import style from "./schedule.module.scss";
import { Button } from "../../components/button";

export function Schedule() {

  const navigate = useNavigate()

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
            <DateLabel />
          </div>

          <div className={style.scheduleList}>
            <Morning />
            <Afternoon />
            <Evening />
          </div>
        </div>

        <Button className={style.scheduling} onClick={() => navigate('/agendamento')}>
          <span className="label-large">NOVO AGENDAMENTO</span>
        </Button>
      </div>
    </section>
  );
}
