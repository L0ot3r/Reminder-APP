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
		<aside className='sticky top-[0px] w-[60px] h-full px-3'>
			<ul
				className={`flex flex-col w-max justify-center items-center gap-2 pt-5`}
				onMouseLeave={() => setToggleMenu(false)}
			>
				<div className={`container-btn-aside`}>
					<button className='icons-side' onClick={handleMenu}>
						<VscNotebook size={30} />
					</button>
					<div
						className={`list-aside ${
							toggleMenu
								? 'opacity-1 translate-x-0 pointer-events-auto'
								: 'opacity-0 translate-x-[-100%] pointer-events-none'
						}`}
					>
						{cours.map((el, index) => (
							<li key={el.btnSlug}>
								<button
									className='list-aside-btn'
									onClick={() => [setSession(index), setToggleMenu(false)]}
								>
									{el.btnSlug}
								</button>
							</li>
						))}
					</div>
				</div>
			</ul>
		</aside>
	);
};

export default Sidebar;
