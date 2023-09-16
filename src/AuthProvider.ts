interface AuthProvider {
    isAuthenticated: boolean;
    email: null | string;
    password: null | string;
    login(email: string, password: string): Promise<void>;
    logout(): Promise<void>;
}

export const fakeAuthProvider: AuthProvider = {
    isAuthenticated: false,
    email: null,
    password: null,
    async login(email: string, password: string) {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = true;
        fakeAuthProvider.email = email;
        fakeAuthProvider.password = password;
    },
    async logout() {
        await new Promise((r) => setTimeout(r, 500)); // fake delay
        fakeAuthProvider.isAuthenticated = false;
        fakeAuthProvider.email = "";
        fakeAuthProvider.password = "";
    },
};
