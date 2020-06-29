import React, { useEffect, useState } from 'react';
import idea from '../assets/idea.gif';
import header1 from '../assets/header1.jpg';
import header2 from '../assets/header2.jpg';
import './Header.css';

export default function Header() {
	let animDuration = 5;

	const backgrounds = [ header1, header2 ];
	const [ state, setState ] = useState({ backgroundIndex: 0 });

	const changeBackground = () => {
		setState(({ backgroundIndex }) => {
			const nextBackgroundIndex = ++backgroundIndex % backgrounds.length;

			return { backgroundIndex: nextBackgroundIndex };
		});
	};
	useEffect(
		() => {
			const timeout = setTimeout(changeBackground, animDuration * 1000);
			return () => {
				if (timeout) clearTimeout(timeout);
			};
		},
		[ changeBackground ]
	);
	return (
		<div>
			<div
				className="header"
				style={{
					backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)),
		url('${backgrounds[state.backgroundIndex]}')`
				}}
			>
				<div className="header-container">
					<div className="header__part--1">
						<h1>Your startup has one chance to to get it right.</h1>
						{/* <div><img src={idea} alt="this slowpoke moves"  width={250}/></div> */}
					</div>
					<div className="header__part--2">
						<p>
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
							consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
