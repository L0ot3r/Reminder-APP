import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Feed, Home, Navbar, VideosFeed } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='flex max-w-7xl mx-auto'>
				<div className='h-auto w-full flex items-start'>
					<Routes>
						<Route path='/' exact element={<Home />} />
						<Route path={`/course`} element={<Feed />} />
						<Route path={`/videos`} element={<VideosFeed />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
