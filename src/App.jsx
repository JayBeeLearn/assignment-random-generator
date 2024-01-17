import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage";
import Define from "./Define";
import AddPersonel from "./AddPersonel";
import MasterLayout from "./MasterLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="define" element={<Define />}></Route>
      <Route path="add-personel" element={<AddPersonel />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
