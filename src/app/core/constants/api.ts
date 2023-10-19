import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

const headerDict = {
    'x-rapidapi-host': environment.HOST,
    'x-rapidapi-key': environment.API_KEY
} 

export const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
};

export enum paths {
    FIXTURES = 'fixtures',
    STANDINGS = 'standings',
    LEAGUES = 'leagues'
}

