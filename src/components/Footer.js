import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer  has-text-white-ter">
				<div className="content has-text-centered">
				</div>{' '}
				<div className="content has-text-centered  has-text-white-ter">
					<div className="container  has-text-white-ter">
						<div className="columns">
							<div className="column is-4">
								<section className="menu">
									<ul className="menu-list">
										<li>
											<Link to="/" className="navbar-item">
												Home{' '}
											</Link>{' '}
										</li>{' '}
										<li>
											<Link className="navbar-item" to="/about">
												About{' '}
											</Link>{' '}
										</li>{' '}
										<li>
											<Link className="navbar-item" to="/" />{' '}
										</li>
									</ul>{' '}
								</section>{' '}
							</div>{' '}
							<div className="column is-4">
								<section>
									<ul className="menu-list">
										<li>
											<Link className="navbar-item" to="/blog">
												Latest Stories{' '}
											</Link>{' '}
										</li>{' '}
										<li>
											<Link className="navbar-item" to="/contact">
												Contact{' '}
											</Link>{' '}
										</li>{' '}
									</ul>{' '}
								</section>{' '}
							</div>{' '}
							<div className="column is-4 social">
								
								<a title="twitter" href="https://twitter.com/Tjadamsjr">
									<img
										className="fas fa-lg"
										src={twitter}
										alt="Twitter"
										style={{
											width  : '1em',
											height : '1em'
										}}
									/>{' '}
								</a>{' '}
								<a title="instagram" href="https://www.instagram.com/tjadamsjr/">
									<img
										src={instagram}
										alt="Instagram"
										style={{
											width  : '1em',
											height : '1em'
										}}
									/>{' '}
								</a>{' '}
								<a title="vimeo" href="https://www.youtube.com/user/tqsare/about?view_as=subscriber">
									<img
										src={vimeo}
										alt="Vimeo"
										style={{
											width  : '1em',
											height : '1em'
										}}
									/>{' '}
								</a>{' '}
							</div>{' '}
						</div>{' '}
					</div>{' '}
				</div>{' '}
			</footer>
		);
	}
};

export default Footer;
