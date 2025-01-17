import React from 'react';
import Header from '~/components/layouts/components/Header';
import Sidebar from './Sidebar/index';

function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div className="container">
				<Sidebar />
				<div className="content">
					{children}
				</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
