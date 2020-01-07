import routes from './routes';
import host from './customized';

export default {
    routes: routes,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    singular: true,
    proxy: {
        '/dev': {
            target: host,
            changeOrigin: true,
        }
    }
};