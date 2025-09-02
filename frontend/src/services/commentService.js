import axios from "./api";

export const getAllComments = async (eventId) => {
  const response = await axios.get(`/api/comments?event_id=${eventId}`);
  return response.data; // Có thể là { data: [...] }
};
