import http from './http-common';


const cartService = {
  addToCart: async (UtilisateurId, productId, quantity) => {
    try {
      const response = await http.post(`$/paniers/${UtilisateurId}/add-au-panier/${productId}`, {
        quantity,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  removeFromCart: async (UtilisateurId, productId) => {
    try {
      const response = await http.delete(`$/paniers/${UtilisateurId}/remove/${productId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getFromCart: async (UtilisateurId) => {
    try {
      const response = await http.get(`$/paniers/${UtilisateurId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};


export default cartService;
