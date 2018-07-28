import http from './axios';

export function getJokes(page = 1,list_rows = 20,formData = {}){
    return http.get('/index/list',{
        params: {
            page,
            list_rows,
            ...formData
        }
    });
}

