import {
  ClerkProvider,
  SignIn,
  SignOutButton,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/chrome-extension";
import { Route, Routes, useNavigate } from "react-router-dom";
import { sendToBackground } from "@plasmohq/messaging";
import { TRPCProvider } from "~utils/trpc";
import Todos from "./components/Todos";
import Welcome from "./components/Welcome";

function IndexPopup() {
  const clerkPubKey = process.env[
    "PLASMO_PUBLIC_CLERK_PUBLISHABLE_KEY"
  ] as string;
  const navigate = useNavigate();

  const onClick = async () => {
    const res = await sendToBackground({
      name: "ping" as never,
      body: {
        hello: "world",
      },
    });
    console.log({ res });
  };

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <TRPCProvider>
        <Routes>
          <Route
            path="/sign-up/*"
            element={
              <div style={{ width: 400, padding: 10 }}>
                <SignUp
                  signInUrl="/"
                  appearance={{
                    elements: {
                      socialButtons: {
                        display: "none",
                      },
                      dividerRow: {
                        display: "none",
                      },
                    },
                  }}
                />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div style={{ width: 400, padding: 10 }}>
                <Welcome />
                <SignedIn>
                  <Todos />
                  <SignOutButton />
                </SignedIn>
                <SignedOut>
                  <SignIn
                    appearance={{
                      elements: {
                        socialButtons: {
                          display: "none",
                        },
                        dividerRow: {
                          display: "none",
                        },
                      },
                    }}
                    afterSignInUrl="/"
                    signUpUrl="/sign-up"
                  />
                </SignedOut>
                <hr />
                <button onClick={onClick}>Send to Background</button>
              </div>
            }
          />
        </Routes>
      </TRPCProvider>
    </ClerkProvider>
  );
}

export default IndexPopup;
