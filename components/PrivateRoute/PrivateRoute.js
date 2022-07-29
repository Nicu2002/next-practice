import Auth from '../Auth/Auth';

export const PrivateRoute = ({permision, children, restriction}) => {
    if(!permision) {
        return (
            <>
                {restriction}
                <Auth/>
            </>
        );
    }
    return children;
}