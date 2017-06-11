export class ENV {

    // public static currentEnvironment: string = "development";
    // public static currentEnvironment: string = "test";
    public static currentEnvironment: string = "production";

    public static development: any = {
        APIUrl: "https://bg36te82e5.execute-api.us-west-2.amazonaws.com/dev/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2",
        PayPalENV: "PayPalEnvironmentSandbox",
    }

    public static test: any = {
        APIUrl: "https://bg36te82e5.execute-api.us-west-2.amazonaws.com/test/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2",        
        PayPalENV: "PayPalEnvironmentSandbox",
    }

    public static production: any = {
        APIUrl: "https://bg36te82e5.execute-api.us-west-2.amazonaws.com/prod/masjids/SM866eca5b-a510-4eb7-8144-f51ea2b9d6c2",
        PayPalENV: "PayPalEnvironmentProduction",
    }
}