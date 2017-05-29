import {Injectable} from '@angular/core';
import {ENV} from './environment';

@Injectable()
export class EnvironmentService {


    public getAPIUrl() : string{
        if(ENV.currentEnvironment === "development"){
            return ENV.development.APIUrl;
        } else if(ENV.currentEnvironment === "test") {
            return ENV.test.APIUrl;
        } else if(ENV.currentEnvironment === "production") {
            return ENV.production.APIUrl;
        }
    }

    public getPayPalENV() : string{
        if(ENV.currentEnvironment === "development"){
            return ENV.development.PayPalENV;
        } else if(ENV.currentEnvironment === "test") {
            return ENV.test.PayPalENV;
        } else if(ENV.currentEnvironment === "production") {
            return ENV.production.PayPalENV;
        }
    }

    public getPayPalENVKey() : string{
        if(ENV.currentEnvironment === "development"){
            return ENV.development.PayPalENVKey;
        } else if(ENV.currentEnvironment === "test") {
            return ENV.test.PayPalENVKey;
        } else if(ENV.currentEnvironment === "production") {
            return ENV.production.PayPalENVKey;
        }
    }
}