import { Route, Routes } from 'react-router';
import { WEB_URL } from '../common/constants';
import Layout from '../layout';
import Home from '../screens/Home';
import TodosList from '../screens/TodosList';

function AppRoutes() {
  return (
    <Routes>
      <Route path={WEB_URL.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={WEB_URL.TODOS_LIST} element={<TodosList />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
