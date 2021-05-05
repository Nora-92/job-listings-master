import { InMemoryDbService } from "angular-in-memory-web-api";

import { jobs } from "./mock/jobs.mock";

export class InMemoryJobsService implements InMemoryDbService {
    createDb() {

        return {jobs};
    }
}
