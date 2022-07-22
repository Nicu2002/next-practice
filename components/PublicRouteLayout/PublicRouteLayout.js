import NavBar from '../NavBar/NavBar';

export const PublicRouteLayout = ({children})=> {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}