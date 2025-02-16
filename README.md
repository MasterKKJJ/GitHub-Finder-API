# React + TypeScript + Vite Coisas muito legais que aprendi: Podemos ter esse codigo de uma rota.
##Video de como está o projeto:



https://github.com/user-attachments/assets/dc017afe-5815-4911-af3c-0f3ed7b7399a



## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

```javascript
function Home() {
  return (
    <div>
      <p>Home</p>
    </div>
      )
    }
export default Home
```
teríamos que configurar assim: 
```javascript
    import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        
      },
      
     ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

```
para poder usar chamando o Outlet do react-router-dom para poder carregar na tela, você pode usar o componente `Outlet` do `react-router-dom`. Ele deve ser colocado no componente pai (`App` no exemplo acima) onde você deseja que o conteúdo das rotas filhas seja renderizado.

```javascript
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Meu App</h1>
      <Outlet /> {/* Aqui o conteúdo da rota filha será renderizado */}
    </div>
  );
}

export default App;
```


