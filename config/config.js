import routes from "./routes";

export default {
    routes: routes,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    singular: true,
};