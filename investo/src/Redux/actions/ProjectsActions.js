﻿import axios from 'axios';

export const CHANGE_FAVORITE = 'CHANGE_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const updateFavorite = payload => ({
    type: CHANGE_FAVORITE,
    payload
})

export const addFavorite = payload => ({
    type: ADD_FAVORITE,
    payload
})

export const deleteFavorite = payload => ({
    type: DELETE_FAVORITE,
    payload
})
