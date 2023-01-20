import {Navigate, Route, Routes} from "react-router-dom";
import "@/App.css";
import SignIn from "@/features/admin/auth/SignIn";
import SignUp from "@/features/admin/auth/SignUp";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "@/features/admin/dashboard/Dashboard";
import PanoramaImage from "@/features/pano-images/PanoramaImage";


function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/dashboard/*" element={<Dashboard/>}/>
                    <Route index element={<PanoramaImage/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
