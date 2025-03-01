import { AxiosInstance } from "axios";

class GithubRepositoriesService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  /**
   * Получает информацию о конкретном репозитории
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @returns Данные о репозитории
   */
  async getRepository(owner: string, repo: string) {
    const res = await this.api.get(`/repos/${owner}/${repo}`);
    return res.data;
  }

  /**
   * Поиск репозиториев по ключевому слову
   * @param query - Запрос для поиска
   * @param sort - Поле сортировки (по умолчанию "stars", можно "forks", "updated")
   * @param order - Порядок сортировки ("asc" или "desc")
   * @param page - Номер страницы
   * @param perPage - Количество репозиториев на странице
   * @returns Массив найденных репозиториев
   */
  async searchRepositories(query: string, sort = "stars", order = "desc", page = 1, perPage = 20) {
    const res = await this.api.get("/search/repositories", {
      params: { q: query, sort, order, per_page: perPage, page }
    });
    return res.data.items;
  }

  /**
   * Получает список контрибьюторов репозитория
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @param page - Номер страницы
   * @param perPage - Количество контрибьюторов на странице
   * @returns Массив контрибьюторов репозитория
   */
  async getRepoContributors(owner: string, repo: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/repos/${owner}/${repo}/contributors`, {
      params: { per_page: perPage, page }
    });
    return res.data;
  }

  /**
   * Получает список языков, используемых в репозитории
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @returns Объект с языками и количеством строк кода на каждом из них
   */
  async getRepoLanguages(owner: string, repo: string) {
    const res = await this.api.get(`/repos/${owner}/${repo}/languages`);
    return res.data;
  }

  /**
   * Получает README-файл репозитория (в base64 кодировке)
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @returns Объект с README (base64), URL-адресом HTML-версии
   */
  async getRepoReadme(owner: string, repo: string) {
    const res = await this.api.get(`/repos/${owner}/${repo}/readme`);
    return res.data;
  }

  /**
   * Получает список открытых ишью (issues) репозитория
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @param page - Номер страницы
   * @param perPage - Количество ишью на странице
   * @returns Массив открытых ишью
   */
  async getRepoIssues(owner: string, repo: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/repos/${owner}/${repo}/issues`, {
      params: { per_page: perPage, page }
    });
    return res.data;
  }

  /**
   * Получает список коммитов в репозитории
   * @param owner - Логин владельца репозитория
   * @param repo - Название репозитория
   * @param page - Номер страницы
   * @param perPage - Количество коммитов на странице
   * @returns Массив коммитов
   */
  async getRepoCommits(owner: string, repo: string, page = 1, perPage = 20) {
    const res = await this.api.get(`/repos/${owner}/${repo}/commits`, {
      params: { per_page: perPage, page }
    });
    return res.data;
  }
}

export default GithubRepositoriesService;
