import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import PokedexPage from '../src/pages/PokedexPage';
import NotFound from './pages/NotFound';
import PokedexinfoPage from './pages/PokedexinfoPage';
import ProtectedRoutes from './pages/ProtectedRoutes';

function App() {
	return (
		<div className='flex-container'>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/pokedex" element={<PokedexPage />} />
					<Route path="/pokedex/:name" element={<PokedexinfoPage />} />
				</Route>
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
