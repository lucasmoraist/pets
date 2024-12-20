import { api } from "../api";
import { IOwner } from "../model/owner";
import { IPet } from "../model/pet";
import { ISchedule } from "../model/schedule";

interface createScheduleData {
  owner: string;
  pet: string;
  phoneNumber: string;
  type: string;
  date: string;
  hour: string;
}

const getSchedule = async (date: string) => {
  try {
    const [ownersResponse, petsResponse, scheduleResponse] = await Promise.all([
      api.get<IOwner[]>(`/owner`),
      api.get<IPet[]>(`/pet`),
      api.get<ISchedule[]>(`/schedule`),
    ]);

    const owners = ownersResponse.data;
    const pets = petsResponse.data;
    const schedules = scheduleResponse.data;

    const [day, month, year] = date.split("/");
    const formattedParamDate = `${year}-${month}-${day}`;

    const filteredSchedules = schedules.filter((s) => {
      const scheduleDate = s.date.split("T")[0];
      return scheduleDate === formattedParamDate;
    });

    const result = filteredSchedules.map((schedule) => {
      const pet = pets.find((p) => p.id === schedule.petId);
      const owner = owners.find((o) => o.id === (pet ? pet.ownerId : -1));

      if (!pet || !owner) {
        throw new Error("Error fetching data");
      }

      return {
        time: schedule.time,
        owner: owner.name,
        pet: pet.name,
        type: schedule.type,
      };
    });

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const createSchedule = async (data: createScheduleData) => {
  try {
    const ownersResponse = await api.get(`/owner?name=${data.owner}`);
    let owner = ownersResponse.data[0];

    if (!owner) {
      const newOwnerResponse = await api.post(`/owner`, {
        name: data.owner,
        phoneNumber: data.phoneNumber,
      });
      owner = newOwnerResponse.data;
    }

    const petsResponse = await api.get(`/pet?name=${data.pet}`);
    let pet = petsResponse.data.find((p: any) => p.ownerId === owner.id);

    if (!pet) {
      const newPetResponse = await api.post(`/pet`, {
        name: data.pet,
        ownerId: owner.id,
      });
      pet = newPetResponse.data;
    }

    const newScheduleResponse = await api.post(`/schedule`, {
      petId: pet.id,
      date: data.date,
      time: data.hour,
      type: data.type,
    });

    return newScheduleResponse.data;
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    throw error;
  }
};

export { getSchedule, createSchedule };
