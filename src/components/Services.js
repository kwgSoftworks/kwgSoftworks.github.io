import React from 'react';
import { Link } from 'react-router-dom';
import appDevIcon from '../assets/App-Development.svg';
import webDevIcon from '../assets/Web-Development.svg';
import busPlanIcon from '../assets/Business-Plans.svg';
import devDocIcon from '../assets/Developer-Documentation.svg';
import prodMarketIcon from '../assets/Product-Marketing-Videos.svg';
import pitchDeckIcon from '../assets/Pitch_Decks.svg';
import './Services.css';
import Button from './Button';

const services = [
	{
		title: 'App Development',
		text: 'we design and devlop mobile applications for ios and Android.',
		icon: appDevIcon
	},
	{
		title: 'Web Development',
		text: 'Need to create a custom web application? we design and develop those two.',
		icon: webDevIcon
	},
	{
		title: 'Product Marketing Videos',
		text:
			'videos are great way to market and explain your products. we specialize in producing animated and live videos for this very purpose',
		icon: prodMarketIcon
	},
	{
		title: 'Developer Documentation',
		text:
			'Do you have APIs, SDKs, or similar products that require documenattion? we ca handle the drafting of any technical writing',
		icon: devDocIcon
	},
	{
		title: 'Business Plans',
		text:
			'ae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt dolores eos qui ratione voluptatem sequi nesciunt..',
		icon: busPlanIcon
	},
	{
		title: 'Pitch Decks',
		text:
			'explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni .',
		icon: pitchDeckIcon
	}
];

const Services = React.forwardRef((props, ref) => (
	<div ref={ref} className="services">
		<h1 className="services__header">Services We Provide</h1>
		<div className="services__content">
			{services.map(({ title, text, icon }) => (
				<div key={title} className="services__content-item">
					<img src={icon} alt="" className="icon-img" />
					<h4 className="utils-mg-bt-sm">{title}</h4>
					<p>{text}</p>
				</div>
			))}
		</div>
		<div className="utils-center">
			<Link to="/contact">
				<Button text="Contact Us" />
			</Link>
		</div>
	</div>
));

export default Services
