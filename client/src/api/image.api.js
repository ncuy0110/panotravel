import { postWithAuth } from "@/api/axiosClient.js";
import { getWithAuth } from "./axiosClient";

const prefix = (zoneId) => `/zone/${zoneId}/image/`;
export const imageApi = {
  create: async (zoneId, dto) => await postWithAuth(prefix(zoneId), dto),
  getAll: async (zoneId) => await getWithAuth(prefix(zoneId)),
  getOne: async (zoneId, imageId) =>
    await getWithAuth(prefix(zoneId) + imageId),
  getLink: async (objectId) =>
    await getWithAuth(`/minio-client/presigned-get-object/${objectId}`),
};
