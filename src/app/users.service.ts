import { Injectable } from '@angular/core';

import axios from 'axios';

export interface User {
  id?: string,
  name: string,
  email: string,
  observations: string,
  photoUrl: string,
  contacted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): Promise<User[]> {
    return axios.get('https://3ea957be.ngrok.io/yunior_users')
      .then(response => response.data)
  }

  getUserById(id: string): Promise<User> {
    return axios.get(`https://3ea957be.ngrok.io/yunior_users/${id}`)
      .then(response => response.data)
  }

  updateUser(user: User): Promise<User> {
    return axios.put(`https://3ea957be.ngrok.io/yunior_users/${user.id}`, user)
      .then(response => response.data)
  }

  deleteUser(id: string): Promise<User> {
    return axios.delete(`https://3ea957be.ngrok.io/yunior_users/${id}`)
      .then(response => response.data)
  }

  createUser(user: User): Promise<User> {
    return axios.post('https://3ea957be.ngrok.io/yunior_users', user)
      .then(response => response.data)
  }
}
