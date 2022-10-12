import React from 'react';
import { nanoid } from 'nanoid';
import { BsInfoCircle } from 'react-icons/bs';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import ReactPlayer from 'react-player';
import { SyntaxCode } from './';

const Course = ({ cours, subtitle, session }) => {
	return (
		<div className='w-full'>
			{/* DEBUT DU COURS */}
			<h2 className='font-semibold text-4xl md:text-2xl w-full text-center mb-6'>
				{cours[session]?.title}
			</h2>
			<h4
				className={`font-semibold text-2xl md:text-xl ${
					subtitle?.color ? subtitle?.color : 'text-black'
				}`}
			>
				{subtitle?.txt}
			</h4>
			{cours[session].body?.text?.map((el) => (
				<div className='w-full flex flex-col gap-2 px-4 sm:px-5' key={nanoid()}>
					{el?.body?.map((item) => (
						<div key={nanoid()}>
							{/*  TITRE DU CHAPITRE  */}
							{item?.title && (
								<h4
									className={`font-semibold text-2xl md:text-xl border-t-2 border-purple-300 pt-8 mt-3 ${
										item.title.color && item.title.color
									}`}
								>
									{item?.title.txt}
								</h4>
							)}
							{/* LISTE A PUCES */}
							{item?.isList ? (
								<li
									className={`py-0 pl-10 list-disc text-lg ${
										item?.bold ? 'font-bold' : item?.semiBold && 'font-semibold'
									}`}
								>
									{item?.txt}
								</li>
							) : // {/* TEXTE INFO */}
							item?.info ? (
								<div className='bg-[#e8f4fd] flex justify-center items-center p-4 w-full mx-auto'>
									<BsInfoCircle size={30} color={'blue'} />
									<p
										className={`text-lg md:text-base pl-2 ${
											item?.bold
												? 'font-bold'
												: item?.semiBold && 'font-semibold'
										}`}
									>
										{item?.txt}
									</p>
								</div>
							) : // {/* TEXTE QUOTE */}
							item?.quote ? (
								<div className='bg-[#ff6a6a3b] flex justify-center items-center p-6 py-[50px] rounded-md w-full mx-auto my-4 relative'>
									<ImQuotesLeft className='absolute top-[-28px] left-[-28px] text-5xl text-[#fd8080]' />
									<p
										className={`text-xl md:text-base pl-2 ${
											item?.bold
												? 'font-bold'
												: item?.semiBold && 'font-semibold'
										}`}
									>
										{item.txt}
									</p>
									<ImQuotesRight className='absolute bottom-[-28px] right-[-28px] text-5xl text-[#fd8080]' />
								</div>
							) : // {/* TEXTE LINK */}
							item?.link ? (
								<a
									href={item.url}
									className='font-semibold text-red-400 px-4 py-1 bg-[#cecece] hover:bg-[#8ed9f788]'
									rel='noopener noreferrer'
									target='_blank'
								>
									{item.txt}
								</a>
							) : (
								// {/* TEXTE NORMAL */}
								<p
									className={`text-justify md:text-left sm:text-justify text-lg md:text-base pl-2 ${
										item?.bold ? 'font-bold' : item?.semiBold && 'font-semibold'
									}`}
								>
									{item?.txt}
								</p>
							)}
							{/* SUBTITLE */}
							{item?.subtitle && (
								<h5
									className={`font-semibold ${
										item?.subtitle?.small ? 'text-lg' : 'text-2xl'
									} md:text-xl ${
										item?.subtitle?.color ? item?.subtitle?.color : 'text-black'
									}`}
								>
									{item.subtitle.txt}
								</h5>
							)}
							{/* IMAGE */}
							{item?.img && (
								<img
									src={item?.img.src}
									alt={item?.title}
									width={item?.img.width}
									height={item?.img.height}
									className='mx-auto rounded-lg my-5'
								/>
							)}
							{/* SEPARATEUR */}
							{item?.hr && <hr className='border-t-2 border-slate-300 my-5' />}
							{/* CODE EXEMPLE */}
							{item?.sample?.map((code) => (
								<div className='w-full mx-auto md:w-[320px]' key={nanoid()}>
									<SyntaxCode language={code?.style}>{code?.code}</SyntaxCode>
								</div>
							))}
							{/* STACKBLITZ */}
							{item?.stack && (
								<iframe
									title='Open with Stackblitz'
									src={item.stack}
									className='h-[500px] w-full my-3'
								/>
							)}
							{/* PLAYER VIDEO */}
							{item?.video && (
								<div className='w-full'>
									<ReactPlayer
										url={item.video.url}
										className='react-player'
										controls
									/>
								</div>
							)}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Course;
