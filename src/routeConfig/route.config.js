
import Home from "@/views/Home";
import Layout from '@/views/Layout';
import Login from '@/views/Login';
import Register from '@/views/Register';

module.exports = [
    {
        'path':'/',
        'component':Home,
        'exact':true
    },
    {
        'path':'/layout',
        'component':Layout,
    },
    {
        'path':'/login',
        'component':Login,
    },
    {
        'path':'/register',
        'component':Register,
    }
]