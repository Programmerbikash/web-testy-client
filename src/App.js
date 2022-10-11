import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import ReactQuiz from './components/ReactQuiz/ReactQuiz';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <ReactQuiz></ReactQuiz>
        },
        {
          path: "statistics",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ],
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}

export default App;
