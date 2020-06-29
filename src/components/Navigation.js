import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from './Button';
import './Navigation.css';

const Navigation = withRouter((props) => <NavigatorFunc {...props} />);

function NavigatorFunc(props) {
	const [ state, setState ] = useState({ mode: 'none', screenSize: window.screen.width });

	const { mode, screenSize } = state;
	const checkScreen = screenSize < 750;

	useEffect(
		() => {
			const handleResize = () => {
				setState({ ...state, screenSize: window.screen.width });
			};
			window.addEventListener('resize', handleResize);
			return (_) => {
				window.removeEventListener('resize', handleResize);
			};
		},
		[ mode, screenSize ]
	);

	const changeMode = () => {
		if (checkScreen) {
			setState({ ...state, mode: mode === 'block' ? 'none' : 'block' });
		}
	};
	const closeNav = (e) => {
		if (checkScreen && mode === 'block') {
			setState({ ...state, mode: 'none' });
		}
	};

	const handleServiceClick = () => {
		if (props.location.pathname === '/') {
			props.execScroll();
		} else {
			props.history.push('/', { id: 'services' });
		}
	};

	return (
		<div className="nav-container">
			<div className="ham-container" onClick={changeMode}>
				<span className="ham-menu" />
			</div>
			<div className="flex-end" onClick={closeNav} />
			<nav className="nav" >
				<div className="nav-left">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="logo">
							<span className="logo_box">Kwg</span> <span className="logo_text">softworks</span>
						</div>
					</Link>
				</div>
				<div className="nav-right" style={{ display: checkScreen ? mode : "flex"}}>
					<div>About us</div>
					<div onClick={handleServiceClick}>Services</div>
					<Link to="/contact">
						<Button text="Contact Us" />
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navigation;
