import http from './http-common';


const authService = {
  // Service d'inscription
  register: async (username, email, password) => {
    try {
      const response = await http.post(`$/utilisateurs/register`, {
        username,
        email,
        password,
      });
      return response.data; // Le serveur renvoie généralement un token JWT pour la session utilisateur
    } catch (error) {
      throw error;
    }
  },

  // Service de connexion
  login: async (email, password) => {
    try {
      const response = await http.post(`$/utilisateurs/login`, {
        email,
        password,
      },
      { withCredentials: true },
      );
      return response.data; // Le serveur renvoie généralement un token JWT pour la session utilisateur
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      const response = await http.post(`$/utilisateurs/logout`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getLoggedInUser: async () => {
    try {
      const response = await http.get(`$/utilisateurs/me`,{ withCredentials: true });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
