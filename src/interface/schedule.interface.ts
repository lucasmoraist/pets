export interface ISchedule {
  id?: string;
  time: string;
  owner: string | undefined;
  pet: string | undefined;
  type: string;
}
