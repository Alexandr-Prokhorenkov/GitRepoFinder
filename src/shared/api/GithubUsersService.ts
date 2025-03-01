import { AxiosInstance } from "axios";

class GithubUsersService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  /**
   * Поиск пользователей GitHub по логину
   * @param query - строка поиска
   */
  async searchUsers(query: string) {
    const res = await this.api.get("/search/users", {
      params: { q: query }
    });
    return res.data.items;
  }

  /**
   * Получение информации о конкретном пользователе
   * @param username - логин пользователя GitHub
   */
  async getUser(username: string) {
    const res = await this.api.get(`/users/${username}`);
    return res.data;
  }

  /**
   * Получение списка публичных репозиториев пользователя
   * @param username - логин пользователя
   * @param page - номер страницы (по умолчанию 1)
   * @param perPage - количество репозиториев на странице (по умолчанию 20)
   */
  async getUserRepos(username: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/users/${username}/repos`, {
      params: { page, per_page: perPage }
    });
    return res.data;
  }

  /**
   * Получение списка подписчиков пользователя
   * @param username - логин пользователя
   * @param page - номер страницы
   * @param perPage - количество подписчиков на странице
   */
  async getUserFollowers(username: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/users/${username}/followers`, {
      params: { page, per_page: perPage }
    });
    return res.data;
  }

  /**
   * Получение списка пользователей, на которых подписан пользователь
   * @param username - логин пользователя
   * @param page - номер страницы
   * @param perPage - количество подписок на странице
   */
  async getUserFollowing(username: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/users/${username}/following`, {
      params: { page, per_page: perPage }
    });
    return res.data;
  }
}

export default GithubUsersService;
