import type { AxiosPromise } from "axios";
import { apiInstance } from "@/shared/api/base";
import type { Task } from "./types";

const BASE_URL = "/tasks"

export type GetTasksListParams = {
    userId?: number;
    executorId?: number;
};

export const getTasksList = (params?: GetTasksListParams): AxiosPromise<Task[]> => {
    return apiInstance.get(BASE_URL, { params });
};

export type GetTaskByIdParams = {
    taskId: number;
    [x: string]: any;
};

export const getTaskById = ({ taskId, ...params }: GetTaskByIdParams): AxiosPromise<Task> => {
    return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};