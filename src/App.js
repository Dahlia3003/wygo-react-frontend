import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailVerificationPage from './pages/EmailVerificationPage';
import RegistrationPage from "./pages/RegistrationPage";
import SearchResultPage from "./pages/SearchResultPage";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import EditProfile from "./components/Profile/EditProfile";
import ForgotPassword from "./components/Login/ForgotPassword";
import ViewAllUserReport from "./components/ViewAllUserReport";
import ReportPost from "./components/ReportPost";
import Login from "./components/Login/Login";
import ReportUserForm from "./components/ReportUserForm";
import CommentForm from "./components/Comment/CommentForm";
import CommentLoader from "./components/Comment/CommentLoader";
import PostDetail_Report from "./components/ResultReport/PostDetail_Report";
import PersonalPage from "./components/Profile/PersonalPage";


function App() {
    return (
        <Router>
            <div>

                <Routes>
                    {/* Configure route for the email verification page */}
                    <Route path="/email-verification" element={<EmailVerificationPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>

                    <Route index element={<Login />} />
                    <Route path="home" element={<Home />} />

                    <Route path="/:query" element={<PersonalPage/>}/>
                    <Route path="/search/:query" element={<SearchResultPage/>}/>
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="forgot-password" element={<ForgotPassword />} />
                    <Route path="view-user-report" element={<ViewAllUserReport />} />
                    <Route path="report-post" element={<ReportPost />} />
                    <Route path="report-user" element={<ReportUserForm />} />
                    <Route path="comment" element={<CommentForm />} />
                    <Route path="comment-loader" element={<CommentLoader />} />
                    <Route path="tes/:id" element={<PostDetail_Report />} /> {/* Truyền id vào địa chỉ URL */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
// import React from 'react';
//
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Home from "./components/Home";
// import EditProfile from "./components/EditProfile";
// import ForgotPassword from "./components/Login/ForgotPassword";
// import ViewAllUserReport from "./components/ViewAllUserReport";
// import ReportPost from "./components/ReportPost";
// import RegistrationPage from "./pages/RegistrationPage";
// import EmailVerificationPage from "./pages/EmailVerificationPage";
//
//
// const App = () => {
//     return (
//         // <Router>
//         //     <Routes>
//         //         <Route path="/" component={Login} />
//         //     </Routes>
//         // </Router>
//         <BrowserRouter>
//             <Routes>
//                 <Route index element={<Login />} />
//                 <Route path="home" element={<Home />} />
//                 <Route path="edit-profile" element={<EditProfile />} />
//                 <Route path="forgot-password" element={<ForgotPassword />} />
//                 <Route path="view-user-report" element={<ViewAllUserReport />} />
//                 <Route path="report-post" element={<ReportPost />} />
//                 <Route path="/registration" element={<RegistrationPage/>}/>
//                 <Route path="/email-verification" element={<EmailVerificationPage/>}/>
//
//
//             </Routes>
//         </BrowserRouter>
//     );
// }
//
// export default App;