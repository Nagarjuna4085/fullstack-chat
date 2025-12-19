import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/signup" Component={SignUpPage} />
        <Route path="/signin" Component={SignInPage} />
        <Route path="/settings" Component={SettingsPage} />
        <Route path="/profile" Component={ProfilePage} />
      </Routes>
    </div>
  );
}
