import React from 'react';

function Monthly({ year, month, recent, bookColor }) {
	const cName = 'coverDesign ' + bookColor;
	return (
		<li>
			<figure className="book">
				<ul className="hardcover-front">
					<li>
						<div className={cName}>
							{recent ? <span className="ribbon">NEW</span> : ''}
							<h1>{year}</h1>
							<p>{month}</p>
						</div>
					</li>

					<li></li>
				</ul>
				<ul className="page">
					<li></li>
					<li>
						<a href="#" className="btn">
							일기 보기
						</a>
					</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul className="hardcover-back">
					<li></li>
					<li></li>
				</ul>
				<ul className="book-spine">
					<li></li>
					<li></li>
				</ul>
			</figure>
		</li>
	);
}

export default Monthly;
