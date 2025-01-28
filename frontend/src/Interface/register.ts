export interface User {
    userId: string;
    name: string;
    email: string;

}

export interface Tenant {
    tenantId: string;
}

export interface registerUserInterface {
    success: number;
    result: {
        user: User;
        tenant: Tenant;
    };
    message: string;
}

export interface LoginResponse {
    success: number;
    result: {
        user: {
            userId: string;
            name: string;
            surname: string;
            role: string;
            email: string;
            photo: string | null;  // photo could be null or a string (URL)
            companyName: string | null;  // companyName could be null or a string
            logo: string | null;  // logo could be null or a string (URL)
        };
        tenant: {
            tenantId: string;
            sidebar: string;  // Assuming sidebar is a string, you can adjust if needed
        };
        token: string;
        expiresIn: number;  // Expiration time in seconds
    };
    message: string;
}


