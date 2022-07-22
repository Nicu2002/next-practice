import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {useState} from 'react';

import WeatherCard from '../WeatherCard/WeatherCard';
import NavBar from '../NavBar/NavBar';
import AdminPanel from '../AdminPanel/AdminPanel';
import Page404 from '../Page404/Page404';
import Auth from '../Auth/Auth';
import './Auth.css';

import confidential from '../../static/img/confidential.png';

const App = () => {
    const [permision, setPermision] = useState(false);

    const onsetPermision = () =>  {
        setPermision(true);
    }
    return(
        <div id="app" style={{backgroundColor: permision ? "#CFD2CF" : null}}>
            <BrowserRouter>
                {/* <Auth permision={permision} onsetPermision={onsetPermision}/> */}
                <div id="content">
                    <Routes>
                        <Route path="/" element={
                            <PublicRouteLayout>
                                <WeatherCard url='Chisinau'/>
                            </PublicRouteLayout>}
                        />
                        <Route path="/balti" element={
                            <PrivateRoute permision={permision} restriction={<AccesRestricted/>}>
                                <PublicRouteLayout>
                                    <WeatherCard url='Balti'/>
                                </PublicRouteLayout>
                            </PrivateRoute>
                        }/>            
                        <Route path="/cahul" element={
                            <PublicRouteLayout>
                                <WeatherCard url='Cahul'/>
                            </PublicRouteLayout>}
                        />
                        <Route path="/soroca" element={
                            <PrivateRoute permision={permision} restriction={<Navigate to="/" replace/>}>
                                <PublicRouteLayout>
                                    <WeatherCard url='Soroca'/>
                                </PublicRouteLayout>
                            </PrivateRoute>
                        }/>
                        <Route path="/tiraspol" element={
                            <PublicRouteLayout>
                                <WeatherCard url='Tiraspol'/>
                            </PublicRouteLayout>}
                        />
                        <Route path="/admin:invoiceId" element={
                            <PrivateRoute permision={permision} restriction={<Auth onsetPermision={setPermision}/>}>
                                <AdminPanel/>
                            </PrivateRoute>
                        }/>
                        <Route path="*" element={<Page404/>}/>
                        </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

const AccesRestricted = () => {
    const styles = {
        display: "flex",
        alignItems: "center",
        marginLeft: "50%",
        marginTop: "10vh",
        transform: "translateX(-50%)",
        width: "max-content"
    } 
    return(
        <div id="acces-restricted" style={styles}>
            <h2 style={{marginRight: "30px"}}>Acces restricted!</h2>
            <img src={confidential} alt="restricted" />
        </div>
    );
}

const PrivateRoute = ({permision, children, restriction}) => {
    if(!permision) {
        return restriction;
    }
    return children;
}

const PublicRouteLayout = ({children})=> {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}

// const Auth = ({permision, onsetPermision})=> {
//     if(!permision) {
//         return (
//             <button className="auth-btn" onClick={() => onsetPermision(permision)}>Log in</button>
//         );
//     }
//     return (<button className="auth-btn danger" onClick={() => onsetPermision(permision)}>Log out</button>);
// }

export default App;