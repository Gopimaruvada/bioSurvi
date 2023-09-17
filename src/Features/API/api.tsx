import { ajax } from 'rxjs/ajax';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


export function login(username: string, password: string) {
  return ajax.post('https://dummyjson.com/auth/login', { username, password }).pipe(
    map((response) => {
      // Map the response to the data property.
      return response.response;
    }),
    catchError((error) => {

      console.error('API Error:', error);
      return throwError('API request failed'); 
    })
  );
}
