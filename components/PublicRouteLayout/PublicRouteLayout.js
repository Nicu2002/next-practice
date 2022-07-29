import NavBar from '../NavBar/NavBar';
import Head from 'next/head';

export const PublicRouteLayout = ({children, title})=> {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <NavBar/>
            {children}
        </>
    );
}