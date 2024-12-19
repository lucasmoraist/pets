import axios from "axios";

interface Owner {
  id: number;
  name: string;
  phoneNumber: string;
}

interface Pet {
  id: number;
  name: string;
  ownerId: number;
}

interface Schedule {
  id: number;
  petId: number;
  date: string;
  time: string;
  type: string;
}

interface createScheduleData {
  owner: string;
  pet: string;
  phoneNumber: string;
  type: string;
  date: string;
  hour: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getSchedule = async (date: string) => {
  try {
    const [ownersResponse, petsResponse, scheduleResponse] = await Promise.all([
      api.get<Owner[]>(`/owner`),
      api.get<Pet[]>(`/pet`),
      api.get<Schedule[]>(`/schedule`)
    ]);

    const owners = ownersResponse.data;
    const pets = petsResponse.data;
    const schedules = scheduleResponse.data;

    // Filtrar os agendamentos pela data
    const filteredSchedules = schedules.filter(schedule => schedule.date === date);

    const result = filteredSchedules.map(schedule => {
      const pet = pets.find(p => p.id === schedule.petId);
      const owner = owners.find(o => o.id === (pet ? pet.ownerId : -1));

      if (!pet || !owner) {
        throw new Error('Error fetching data');
      }

      return {
        time: schedule.time,
        owner: owner.name,
        pet: pet.name,
        type: schedule.type
      };
    });

    return result;
  } catch (error) {
    console.error('Error fetching data:', error);
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
        phoneNumber: data.phoneNumber
      });
      owner = newOwnerResponse.data;
    }

    const petsResponse = await api.get(`/pet?name=${data.pet}`);
    let pet = petsResponse.data.find((p: any) => p.ownerId === owner.id);

    if (!pet) {
      const newPetResponse = await api.post(`/pet`, {
        name: data.pet,
        ownerId: owner.id
      });
      pet = newPetResponse.data;
    }

    const newScheduleResponse = await api.post(`/schedule`, {
      petId: pet.id,
      date: data.date,
      time: data.hour,
      type: data.type
    });

    return newScheduleResponse.data;
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    throw error;
  }
};

export { getSchedule, createSchedule };
