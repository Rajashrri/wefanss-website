import { BrowserRouter, Route, Routes,  Navigate,
 } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import JayaBachhan from "./pages/JayaBachhan";
import EknathShinde from "./pages/EknathShinde";
import Categories from "./pages/Categories";
import Login from "./auth/Login";
import Singup from "./auth/Singup";
import Otp from "./auth/Otp";
import ForgotOtp from "./auth/ForgotOtp";


import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import Error from "./auth/Error";
import ThankYou from "./auth/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import MoviesDetails from "./pages/MoviesDetails";
import UserDashboard from "./pages/UserDashboard";
import Missionimpossible from "./pages/Missionimpossible";
import Webseries from "./pages/Webseries";
import Watch from "./pages/Watch";
import Read from "./pages/Read";
import Listen from "./pages/Listen";
import ClaimProfile from "./pages/ClaimProfile";
import About from "./pages/About";
import SearchResult from "./pages/SearchResult";
import Gallery from "./pages/Gallery";
import NoSearcfound from "./component/NoSearcfound"
import Contact from "./pages/Contact";

import ExplorerFeed, {
  Profilepage,
  FollowedCelebrities,
  MyCollections,
  CollectionsDetails,
  ChangePassword,
} from "./pages/ExploreFeed";
import ElectionsContested from "./pages/ElectionsContested";
import PositionsHeld from "./pages/PositionsHeld";
// ================= AUTH CHECK =================
const ProtectedRoute = ({
  children,
}) => {

  const token =
    localStorage.getItem("token");

  return token
    ? children
    : <Navigate to="/login" />;
};
function App() {
 const token =
    localStorage.getItem("token");




  // ✅ YAHAN DALO
  const isLoggedIn = !!localStorage.getItem("token");
    console.log(isLoggedIn);





  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/profile-actor/:slug" element={<Profile />} />
            <Route
              path="/profile-politician/:slug"
              element={<EknathShinde />}
            />

            {/* LOGIN */}
          <Route
            path="/login"
            element={
              token ? (
                <Navigate
                  to="/user-dashboard"
                  replace
                />
              ) : (
                <Login />
              )
            }
          />

          {/* REGISTER */}
          <Route
            path="/register"
            element={
              token ? (
                <Navigate
                  to="/user-dashboard"
                  replace
                />
              ) : (
                <Singup />
              )
            }
          />

          {/* OTP */}
          <Route
            path="/otp"
            element={<Otp />}
          />

          {/* DASHBOARD */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
                        <Route path="/forgototp" element={<ForgotOtp />} />

            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/explorer-feed" element={<ExplorerFeed />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route
              path="/followed-celebrities"
              element={<FollowedCelebrities />}
            />
            <Route path="/my-collections" element={<MyCollections />} />
            <Route
              path="/collection-details/:slug"
              element={<CollectionsDetails />}
            />
            <Route path="/change-password" element={<ChangePassword />} />

            <Route path="/profiles/:slug" element={<JayaBachhan />} />

            <Route path="/*" element={<Error />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/movies/:slug" element={<Missionimpossible />} />
            <Route path="/Webseries/:slug" element={<Webseries />} />
            <Route
              path="/elections-contested/:slug"
              element={<ElectionsContested />}
            />
            <Route path="/positions-held/:slug" element={<PositionsHeld />} />

            <Route path="/watch/:slug" element={<Watch />} />
            <Route path="/read/:slug" element={<Read />} />
            <Route path="/listen/:slug" element={<Listen />} />
            <Route path="/claim-profile" element={<ClaimProfile />} />
            <Route path="/about" element={<About />} />
            <Route path="/search-result" element={<SearchResult />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/no-search-found" element={<NoSearcfound />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/:slug" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
