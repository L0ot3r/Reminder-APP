import React, { useState } from 'react';
import { data } from '../constants/cours';
import { VscNotebook } from 'react-icons/vsc';

const Sidebar = ({ setSession, categories }) => {
	const categorie = data.filter((item) => item.categorie === categories);
	const cours = categorie[0].cours;

	const [toggleMenu, setToggleMenu] = useState(false);

	const handleMenu = () => {
		setToggleMenu(!toggleMenu);
	};

	return (
		<aside
			className='sticky top-[40px] w-[60px] h-full px-3'
			onMouseLeave={() => setToggleMenu(false)}
		>
			<button className='icons-side' onClick={handleMenu}>
				<VscNotebook size={30} />
			</button>
			<div
				className={`list-aside ${
					toggleMenu
						? 'opacity-1 translate-x-0'
						: 'opacity-0 translate-x-[-100%]'
				}`}
			>
				<ul>
					{cours?.map((el, index) => (
						<li key={el.btnSlug}>
							<a href='#session-top'>
								<button
									className='list-aside-btn'
									onClick={() => [setSession(index), setToggleMenu(false)]}
								>
									{el.btnSlug}
								</button>
							</a>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
