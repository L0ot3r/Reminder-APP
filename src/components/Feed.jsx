import React, { useState } from 'react';
import { data } from '../constants/cours';
import { Sidebar, Course } from '.';

const Feed = () => {
	const [categories, setCategories] = useState('react');
	const [session, setSession] = useState(0);

	const categorie = data.filter((item) => item.categorie === categories);
	const cours = categorie[0]?.cours;
	const subtitle = cours[session]?.body?.subtitle;

	return (
		<div className='h-auto w-full flex items-start'>
			<Sidebar categories={categories} setSession={setSession} />
			<div className='w-full flex flex-col gap-4 justify-center items-start p-6 md:p-2 border-l-2 border-slate-300'>
				<div className='flex w-full justify-end gap-4'>
					<button onClick={() => [setCategories('react'), setSession(0)]}>
						React
					</button>
					<button onClick={() => [setCategories('js'), setSession(0)]}>
						JS
					</button>
				</div>
				<Course cours={cours} subtitle={subtitle} session={session} />
				<div className='h-[20vh]'></div>
			</div>
		</div>
	);
};

export default Feed;
