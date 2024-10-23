import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${
        import.meta.env.DEV
            ? import.meta.env.VITE_DEVELOPMENT_NGINX_SERVER
            : import.meta.env.VITE_PRODUCTION_NGINX_SERVER
    }`,
});
