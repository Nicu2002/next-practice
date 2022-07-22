

export const PrivateRoute = ({permision, children, restriction}) => {
    if(!permision) {
        return restriction;
    }
    return children;
}