import React from 'react';
import email from '../assets/Email.svg';
import email_logo from '../assets/Email_Logo.svg';
import linkedIn from '../assets/LinkedIn.svg';
import linkedIn_logo from '../assets/LinkedIn_Logo.svg';
import twitter from '../assets/Twitter.svg';
import twitter_logo from '../assets/Twitter_Logo.svg';
import instagram from '../assets/Instagram.svg';
import instagram_logo from '../assets/Instagram_Logo.svg';
import TransparentBtn from './TransparentBtn';
import "./SocialMedia.css"


export default function SocialMedia() {
	const sMedia = [
		{
			title: 'Email',
			para: ' Have question, comments or concerns? contact us today',
			btnText: 'drop us a line',
			icon: email_logo,
			bckIcon: email,
			link: "mailto:info@kwgsoftworks"
		},
		{
			title: 'Twitter',
			para: 'Follow us and engage directly with us on twitter',
			btnText: 'follow us',
			icon: twitter_logo,
			bckIcon: twitter,
			link: "https://twitter.com/KWGsoftworks"
		},
		{
			title: 'LinkedIn',
			para: 'Follow us on LinkedIn for business updates',
			btnText: 'follow us',
			icon: linkedIn_logo,
			bckIcon: linkedIn,
			link: "https://www.linkedin.com/company/kwgsoftworks/"
		},
		{
			title: 'Instagram',
			para: 'Check out some of our projects on Instagram',
			btnText: 'check us out',
			icon: instagram_logo,
			bckIcon: instagram,
			link: ""
		}
	];
	return (
		<div className="social-media">
			{sMedia.map(({ title, para, btnText, icon, bckIcon, link }) => (
				<div key={title} style={{ backgroundImage: `url(${bckIcon})`}} className="social-media__items">
					<h4>{title}</h4>
					<p className="social-media__para">{para}</p>
                    <div className="social-media__btn"><a href={link} target="_blanlk" className="social-media__link"><TransparentBtn text={btnText} icon={icon}/></a></div>
				</div>
            ))}
		</div>
	);
}
