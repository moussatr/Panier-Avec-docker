import http from './http-common';


const orderService = {
  createOrder: async (UtilisateurId) => {
    try {
      const response = await http.post(`/commandes/creer-commande/${UtilisateurId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
      throw error;
    }
  },
  
  getOrdersByUserId: async (UtilisateurId) => {
    try {
      const response = await http.get(`/commandes/get-orders/${UtilisateurId}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de ytrrr la récupération des commandes :', error);
      throw error;
    }
  },

  getDetailsCommande: async (commandeId) => {
    try {
      const response = await http.get(`$/commandes/details/${commandeId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default orderService;
