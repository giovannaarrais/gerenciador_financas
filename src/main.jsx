import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import RealizarCadastro from './components/RealizarCadastro.jsx';
import TransacaoPage from './pages/TransacaoPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login />},// quando o path for "/", renderiza RealizarCadastro
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <RealizarCadastro /> },
      { path: "/home", element: <Home /> },
      { path: "/transacao", element: <TransacaoPage /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
