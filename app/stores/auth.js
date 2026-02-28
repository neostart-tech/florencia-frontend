

import { defineStore } from "pinia";
import axios from "axios";
export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        token: null,
    }),
    actions: {
        async login(credentials) {
            try {
                const response = await axios.post("/user/login", credentials);
                this.token = response.data.token;
                this.user = response.data.user;
                localStorage.setItem("florencia-client-token", this.token);  
                localStorage.setItem("florencia-client-user", JSON.stringify(this.user));
            }
            catch (error) {
                console.error("Login failed:", error);
                throw error;
            }
        },
        logout() {
            this.token = null;
            this.user = null;
            localStorage.removeItem("florencia-client-token");
            localStorage.removeItem("florencia-client-user");
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token,

    },
});