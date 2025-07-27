import { BASE_URL } from "./config";

const getAllUsers = async (skip) => {
    try {
        const response = await fetch(BASE_URL + `users?limit=10&skip=${skip}`);

        return await response.json();

    } catch (error) {
        console.log('Произошла ошибка в getAllUsers:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }
}

const getFilterByLastName = async (lastName) => {
    try {
        const response = await fetch(BASE_URL + `users/search?q=${lastName}&limit=10`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getFilterByLastName:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }
}
const getFilterByFirstName = async (firstName) => {
    try {
        const response = await fetch(BASE_URL + `users/filter?key=firstName&value=${firstName}&limit=10`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getFilterByFirstName:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }
}
const getFilterByMaidenName = async (maidenName) => {
    try {
        const response = await fetch(BASE_URL + `users/filter?key=maidenName&value=${maidenName}&limit=10`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getFilterByMaidenName:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }

}
const getFilterByGender = async (gender, skip) => {
    try {
        const response = await fetch(BASE_URL + `users/filter?key=gender&value=${gender}&limit=10&skip=${skip}`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getFilterByGender:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }

}
const getFilterByAge = async (age) => {
    try {
        const response = await fetch(BASE_URL + `users/filter?key=age&value=${age}&limit=10`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getFilterByAge:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }

}

const getSortingUsers = async (key, sort, skip) => {
    try {
        const response = await fetch(BASE_URL + `users?sortBy=${key}&order=${sort}&limit=10&skip=${skip}`);
        return await response.json();
    } catch (error) {
        console.log('Произошла ошибка в getSortingUsers:', error.message);
        return {
            users: [],
            limit: 10,
            total: 0
        };
    }

}

export { getAllUsers, getFilterByGender, getFilterByLastName, getFilterByMaidenName, getFilterByFirstName, getSortingUsers, getFilterByAge };
