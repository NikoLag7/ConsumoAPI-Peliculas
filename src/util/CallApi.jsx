const API = 'https://api.themoviedb.org/3'

export function get(path){
    return fetch(API + path, {
        headers: {
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZThiMTA1MzcwMzNmZTc0NTEyMjQ0YzJkZTNhZTU3NiIsInN1YiI6IjY0MmI5YTU3ZjFiNTcxMDA5NzJjNzRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jx0gCSt_1jn8SVlfOKBOldXzALzwiO-zqCs1A8WUmnE",
          "Content-Type":"application/json;charset=utf-8"
        }
      })
      .then((result) => result.json())
}