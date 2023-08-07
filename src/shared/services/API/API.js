import axios from 'axios';

axios.defaults.baseURL = 'https://goose-tracker-backend.p.goit.global/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};



//==========Auth===============
export const UserAPI = {

  register: async credentials => {
    const {data} = await axios.post('/user/register', credentials);
    setAuthHeader(data.data.accessToken);
    return data;
  },

  login: async credentials => {
    const { data } = await axios.post('/user/login', credentials);
    setAuthHeader(data.data.accessToken);
    return data;
  },

  logout: async () => {
    await axios.get('/user/logout');
    clearAuthHeader();
  },

  refresh: async () => {
    const {data} = await axios.post('/user/refresh');  // надо отправлять refresh token
    setAuthHeader(data.data.accessToken);
    return data;
  },

  getUserInfo: async () => {
    const token = JSON.parse(localStorage.getItem('persist:token'));  // надо ли
    const accessToken = JSON.parse(token.accessToken);
    setAuthHeader(accessToken);

    const {data} = await axios.get('/user/info');  
    return data;
  },

  updateUser: async credentials => {
    const {data} = await axios.patch('/user/refresh', credentials); 
    return data;
  },
};
  //=============Task==============================

  export const TasksAPI = {
  getTasksList: async credentials => {
    const {data} = await axios.get('/task/by-month', credentials); 
    return data;
  },

  createTask: async credentials => {
    const {data} = await axios.post('/task', credentials); 
    return data;
  },

  deleteTask: async id => {
    const {data} = await axios.delete(`/task/${id}`); 
    return data;
  },

  postTask: async id => {
    const {data} = await axios.put(`/task/${id}`); 
    return data;
  },
};

//==========Reviews===============
export const ReviewsAPI = {
  getReviews: async () => {
    const { data } = await axios.get('/review');
    return data;
  },
};

//   // Новая версия

//   refreshToken: async () => {
//     const token = JSON.parse(localStorage.getItem('persist:token'));
//     const parsedToken = JSON.parse(token.refreshToken);

//     const refreshToken = {
//       refreshToken: parsedToken,
//     };

//     const { data } = await axios.post('/users/refresh', refreshToken);

//     setAuthHeader(data.accessToken);
//     return data;
//   },

//   refreshUser: async credentials => {
//     setAuthHeader(credentials.accessToken);
//     const { data } = await axios.get('/users/current');
//     return data;
//   },

//   //=============User==============================
//   update: async credentials => {
//     const { data } = await axios.put('users/update', credentials);
//     return data;
//   },

//   getShoppingList: async () => {
//     const { data } = await axios.get('users/shopping-list');
//     return data;
//   },

//   addToShoppingList: async recipe => {
//     const { data } = await axios.post('users/shopping-list', recipe);
//     return data;
//   },

//   updateShoppingList: async info => {
//     const { data } = await axios.patch('users/shopping-list', info);
//     return data;
//   },

//   subscribe: async info => {
//     const { data } = await axios.post('users/subscribe', info);
//     return data;
//   },
// };

// //=========Recipes==============
// export const RecipesAPI = {
//   getPopularRecipes: async () => {
//     const { data } = await axios.get(`/recipes?limit=4`);
//     return data;
//   },
//   getRecipesMainPage: async () => {
//     const { data } = await axios.get('/recipes/main-page');
//     return data;
//   },
//   getRecipesFavorite: async ({ page = 1, sort = 'popular' }) => {
//     const { data } = await axios.get(
//       `/recipes/favorite?page=${page}&limit=4&sort=${sort}`
//     );
//     return data;
//   },

//   toggleFavoriteRecipesById: async id => {
//     const { data } = await axios.patch(`/recipes/favorite/${id}`);
//     return data;
//   },

//   getRecipeById: async id => {
//     const { data } = await axios.get(`/recipes/id/${id}`);
//     return data;
//   },

//   getAllCategories: async () => {
//     const { data } = await axios.get(`/recipes/category/list`);
//     return data;
//   },

//   getRecipeByCategories: async ({
//     normalisedQuery,
//     page,
//     limit = 8,
//     sort = 'popular',
//   }) => {
//     const { data } = await axios.get(
//       `/recipes/category/${normalisedQuery}?page=${page}&limit=${limit}&sort=${sort}`
//     );
//     return data;
//   },

//   getRecipesByTitleQuery: async ({ query = '', page = 1, limit = 12 }) => {
//     const { data } = await axios.get(
//       `/recipes/title/${query}?page=${page}&limit=${limit}`
//     );
//     return data;
//   },

//   getIngredients: async () => {
//     const { data } = await axios.get(`/recipes/ingredients`);
//     return data;
//   },

//   getRecipesByIngredientsQuery: async ({
//     query = '',
//     page = 1,
//     limit = 12,
//   }) => {
//     const { data } = await axios.get(
//       `/recipes/ingredient/${query}?page=${page}&limit=${limit}`
//     );
//     return data;
//   },
// };

// //=========Own recipes ==================
// export const OwnRecipesAPI = {
//   getAllOwnRecipes: async ({ page }) => {
//     const { data } = await axios.get(`/own-recipes?page=${page}&limit=4`);
//     return data;
//   },
//   addOwnRecipe: async recipeData => {
//     const { data } = await axios.post('/own-recipes', recipeData);
//     return data;
//   },
//   deleteOwnRecipe: async recipeId => {
//     const { data } = await axios.delete(`/own-recipes/id/${recipeId}`);
//     return data;
//   },
//   getOwnRecipeById: async recipeId => {
//     const { data } = await axios.get(`/own-recipes/id/${recipeId}`);
//     return data;
//   },
// };

