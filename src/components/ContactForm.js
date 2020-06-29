import React from 'react';
import './ContactForm.css';
import Button from './Button';
export default function ContactForm() {
	return (
		<div className="contact-form">
			<form action="mailto:profkiti@gmail.com" method="post" enctype="text/plain">
				<label htmlFor="name">Your Name:</label>
				<input type="text" id="name" name="name" />

				<label htmlFor="email">Your Email Address:</label>
				<input type="email" id="mail" name="email" />

				<label htmlFor="budget">Project Budget:</label>
				<select id="budget" name="budget">
						<option value="$0 - $1000">$0 - $1000</option>
						<option value="$1000 - $5000">$1000 - $5000</option>
						<option value="$5000 - $10000">$5000 - $10000</option>
						<option value="$10000 - $50000">$10000 - $50000</option>
						<option value="$50000+">$50000+</option>
				</select>
				<label htmlFor="desc">Project Description:</label>
				<textarea id="desc" name="proj_desc" />
                <div className="utils-center">
    				<Button text="Submit" />
                </div>
			</form>
		</div>
	);
}
