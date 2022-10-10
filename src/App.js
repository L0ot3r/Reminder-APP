import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Home, Navbar } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='flex max-w-7xl mx-auto'>
				<div className='h-auto w-full flex items-start'>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path={`/course`} element={<Feed />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
