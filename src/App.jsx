import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Gratitude from "./pages/Gratitude";
import Affirmation from "./pages/Affirmation";
import PepTalk from "./pages/PepTalk";
import Quotes from "./pages/Quotes";
import ToDoList from "./pages/ToDoList";
import Account from "./pages/Account";
import Users from "./pages/Users";
import GratitudeView from "./pages/GratitudeView";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import ToDoStatusChange from "./pages/ToDoStatusChange";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "../src/styles/GlobalStyles";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
// // import {QueryCLient}
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
//import User from "./features/authendication/User";
import { UserProvider } from "./features/authendication/UserContext";
//import QuotesByKeyword from "./features/quotes/QuotesByKeyword";
import KeywordQuotesDisplay from "./features/quotes/KeywordQuotesDisplay";
import { QuotesProvider } from "./context/QuotesContext";
import SingleList from "./features/home/SingleList";
//import UserDetails from "./features/authendication/UserDetails";
//import UpdatePassword from "./features/authendication/UpdatePassword";
//import UserUpdate from "./features/authendication/UserUpdate";
//import ToDoByDate from "./pages/ToDoByDate";
//import Footer from "./ui/Footer";
//import ToDoTable from "./features/to-do-list/ToDoTable";
//import { GratitudeProvider } from "../context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

// const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <UserProvider>
        <QuotesProvider>
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="home" />} />
                {/* <Route path="signup" element={<Users />} /> */}
                <Route path="home" element={<HomePage />} />
                <Route path="/blogDetails/:id" element={<SingleList />} />

                <Route path="gratitude" element={<Gratitude />} />

                <Route path="affirmation" element={<Affirmation />} />
                <Route path="peptalk" element={<PepTalk />} />
                <Route path="quotes" element={<Quotes />} />
                <Route path="todolist" element={<ToDoList />} />
                {/* <Route path="todo/:date" element={<ToDoTable />} /> */}
                <Route path="todolist/:id" element={<ToDoStatusChange />} />
                {/* <Route path="list/:date" element={<ToDoList />} /> */}
                <Route
                  path="quotes/:keyword"
                  element={<KeywordQuotesDisplay />}
                />
                <Route path="account" element={<Account />} />
                {/* <Route path="account/account" element={<UserUpdate />} />
                <Route path="account/changePassword" element={<UserUpdate />} /> */}

                {/* <Route path="login" element={<Login />} /> */}
                <Route
                  path="gratitude/:gratitudeId"
                  element={<GratitudeView />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Route>
              <Route path="signup" element={<Users />} />
              <Route path="login" element={<Users />} />
            </Routes>
          </BrowserRouter>
        </QuotesProvider>
      </UserProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
