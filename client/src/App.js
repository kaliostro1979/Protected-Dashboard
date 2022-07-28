import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Dashboard from "./Pages/Dashboard";

function App() {
    return (
        <main>
            <div className="App">
                <div className={'container'}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={'/'} element={<Navigate to="/login" replace/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                            <Route path={'/registration'} element={<Registration/>}/>
                            <Route path={'/dashboard'} element={<Dashboard/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </main>
    );
}

export default App;
