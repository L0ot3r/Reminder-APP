import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { nanoid } from 'nanoid';
import VideoCard from './VideoCard';

const btn = `w-max bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`;

const VideosFeed = () => {
	const [videos, setVideos] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);


	return (
		<div className='h-auto w-full flex items-start'>
			<div className='w-full flex flex-col gap-4 justify-center items-start p-6 md:p-2 border-l-2 border-slate-300'>
				<div className='flex w-full justify-start gap-4'>
					<button className={btn}>React</button>
					<button className={btn}>JS</button>
				</div>
				<div className='w-full flex flex-wrap gap-3 p-4 justify-center'>
					{videos.map((video, index) => (
						<VideoCard video={video} key={nanoid()} />
					))}
				</div>
				<div className='h-[20vh]'></div>
			</div>
		</div>
	);
};

export default VideosFeed;
