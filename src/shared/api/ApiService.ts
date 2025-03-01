import axios, { AxiosInstance } from "axios";
import GithubUsersService from "./GithubUsersService";
import GithubRepositoriesService from "./GithubRepositoriesService";

class ApiService {
  private api: AxiosInstance;
  users: GithubUsersService;
  repositories: GithubRepositoriesService;

  constructor() {
    this.api = axios.create({
      baseURL: "https://api.github.com",
      headers: {
        "Content-Type": "application/json",
         "Accept": "application/vnd.github+json"
      },
    });

    this.users = new GithubUsersService(this.api);
    this.repositories = new GithubRepositoriesService(this.api);
  }
}

const apiService = new ApiService();

export default apiService;

