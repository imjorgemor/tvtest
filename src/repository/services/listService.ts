import { RepositoryFactory, Repositories } from "../factory";

export const listService =  () => {
    return RepositoryFactory(Repositories.list);
};
