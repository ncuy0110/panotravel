import axiosClient, {
  configAuth,
  deleteWithAuth,
  getWithAuth,
  postWithAuth,
} from "@/api/axiosClient.js";

const prefix = "/zone";
const zoneApi = {
  create: async (dto) => {
    return await postWithAuth(prefix, dto);
  },

  getAll: async () => {
    return await getWithAuth(prefix);
  },

  getById: async (id) => {
    return await getWithAuth(prefix + "/" + id);
  },

  delete: async (id) => {
    return await deleteWithAuth(prefix + "/" + id);
  },
};

export default zoneApi;
