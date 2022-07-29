import {useSelector} from 'react-redux';
import Head from 'next/head';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import {PrivateRoute} from '../../components/PrivateRoute/PrivateRoute';
import {AccesRestricted} from '../../components/AccesRestricted/AccesRestricted';



export default function Admin() {
    const {permision} = useSelector(state => state.auth);
    return(
        <>
            <Head>
                <title>Admin</title>
            </Head>
            <PrivateRoute permision={permision} restriction={<AccesRestricted/>} >
                <AdminPanel/>
            </PrivateRoute>
        </>
    )
}