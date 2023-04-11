import axios from 'axios';
import instance from '../axios/instance';

export const getTodos = async () => {
  try {
    const { data } = await instance.get('/todos');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async (newTodo) => {
  try {
    const { data } = await instance.post('/todos', newTodo);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTodo = async (updatedTodo) => {
  try {
    const {id, ...body} = updatedTodo;
    const { data } = await instance.put(`/todos/${id}`, {...body});
    console.log({data})
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
