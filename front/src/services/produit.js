import http from './http-common';

const getProduit = {
  getProduits: async () => {
    try {
      const response = await http.get(`$/produits`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default getProduit;