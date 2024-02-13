import { Todo } from "../models/Todo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const getTodos = async () => {
    //http://localhost:3000/api/todo/get
    const url = API_URL + "todo/get";
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}

export const postTodos = async (todos: Todo[]) => {
    if (!todos) return;
    //http://localhost:3000/api/todo/add
    const url = API_URL + "todo/add";
    const data = JSON.stringify(todos);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: data,
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error)
    }
}
