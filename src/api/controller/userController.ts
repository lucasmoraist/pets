import { api } from "../api";

const login = async ({
  email,
}: {
  email: string;
}) => {
  try {
    const response = await api.get(`/user?email=${email}`);
    
    if (!response.data) {
      throw new Error("Usuário não encontrado");
    }

    return response.data;
  } catch (err) {
    console.error("Erro no login:", err);
    throw new Error("Falha ao realizar login");
  }
};

export { login };
