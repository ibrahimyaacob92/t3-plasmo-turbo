import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/chrome-extension";
import { Route, Routes, useNavigate } from "react-router-dom";
import { TRPCProvider } from "~utils/trpc";
import Todos from "./components/Todos";
import Welcome from "./components/Welcome";

function IndexPopup() {
  const clerkPubKey =
    "pk_test_YW11c2luZy1wb3NzdW0tMjguY2xlcmsuYWNjb3VudHMuZGV2JA";
  const navigate = useNavigate();
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <TRPCProvider>
        <Routes>
          <Route path="/sign-up/*" element={<SignUp signInUrl="/" />} />
          <Route
            path="/"
            element={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 16,
                  paddingTop: 0,
                  width: "300px",
                }}>
                <Welcome />
                <SignedIn>
                  <Todos />
                </SignedIn>
                <SignedOut>
                  <SignIn afterSignInUrl="/" signUpUrl="/sign-up" />
                </SignedOut>
              </div>
            }
          />
        </Routes>
      </TRPCProvider>
    </ClerkProvider>
  );
}

export default IndexPopup;
