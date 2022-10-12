import React from 'react';
import { Link } from 'react-router-dom';

const btn = ` w-full bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const Navbar = () => {
	return (
		<>
			<div className='z-50 w-full bg-[#f76c6c]'>
				<div
					id='session-top'
					className='max-w-7xl mx-auto flex justify-between items-center p-5 text-white sm:flex-col sm:gap-3'
				>
					<Link to='/'>
						<h1 className='text-2xl'>Reminder</h1>
					</Link>
					<div className='flex gap-3'>
						<Link to='/videos'>
							<button className={btn}>Vidéos</button>
						</Link>
						<Link to='/course'>
							<button className={btn}>Cours</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
