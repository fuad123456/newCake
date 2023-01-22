import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'http://b-67.ru/all_user',
    withCredentials: true,
    headers: {
        'API-KEY': '5fc11a34-7258-4926-8c00-91db4f940cfd'
    }
})
export const authAPI = {
    login(data) {
        return instance.post('auth/login',data)
    },
    me(){
        return instance.get('auth/me');
    }
}
export const todolistsAPI = {
    getTodolists() {
        return instance.get('todo-lists');
    },
    createTodolist(title) {
        return instance.post('todo-lists', {title});
    },
    deleteTodolist(id) {
        return instance.delete(`todo-lists/${id}`);
    },
    updateTodolist(id, title) {
        return instance.put(`todo-lists/${id}`, {title});
    },
    getTasks(todolistId) {
        return instance.get(`todo-lists/${todolistId}/tasks`);
    },
    deleteTask(todolistId, taskId) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`);
    },
    createTask(todolistId, title) {
        return instance.post(`todo-lists/${todolistId}/tasks`, {title});
    },
    updateTask(todolistId, taskId, model) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, model);
    }
}