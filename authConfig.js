import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "your-client-id",
        authority: "https://your-tenant.b2clogin.com/your-tenant.onmicrosoft.com/B2C_1_signupsignin",
        redirectUri: "http://localhost:3000",
    },
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };
