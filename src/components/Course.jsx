import React from 'react';
import { nanoid } from 'nanoid';
import { BsInfoCircle } from 'react-icons/bs';
import { SyntaxCode } from './';

const Course = ({ cours, subtitle, session }) => {
	return (
		<div>
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

							{/* IMAGE */}
							{item?.img && (
								<img
									src={item?.img.src}
									alt={item?.title}
									width={item?.img.width}
									height={item?.img.height}
									className='mx-auto rounded-lg'
								/>
							)}
							{/* SEPARATEUR */}
							{item?.hr && <hr className='border-t-2 border-slate-300 my-5' />}
							{/* CODE EXAMPLE */}
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
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Course;
