export interface ISchedule {
  id?: number;
  time: string;
  owner: string | undefined;
  pet: string | undefined;
  type: string;
}
