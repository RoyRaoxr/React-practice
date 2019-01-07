import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data});
}

// export const fetchUser = id => async dispatch => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
// };

// const _fetchUser = _.memoize(async (dispatch, id) => {     const response =
// await jsonPlaceHolder.get(`/users/${id}`);     dispatch({type: 'FETCH_USER',
// payload: response.data}); });
export const fetchUser = id => dispatch => fetchUserLodash(id, dispatch);
const fetchUserLodash = _.memoize(async (id, dispatch)=>{
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
});