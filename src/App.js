import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import New from './New';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'>
					<Route index element={<Home />} />
					<Route path='new' element={<New />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
