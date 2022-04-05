// let user = {
//     "name": "Naama",
//     "password": "12345678",
//     "actions": [{
//         "type": "",
//         "time": 0
//     }]
// }


import axios from 'axios'
import { storageService } from './async-storage.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'


export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser
}

window.userService = userService;

function getUsers() {
    return storageService.query('user')
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user;
}

function remove(userId) {
    return storageService.remove('user', userId)
}

async function update(user) {
    await storageService.put('user', user)
    if (getLoggedinUser()._id === user._id) _saveLocalUser(user)
    return user;
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)
}

async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    return _saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}




