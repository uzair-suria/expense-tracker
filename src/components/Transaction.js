import React from 'react';

export const Transaction = ({ transaction }) => {
	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		<li className={sign === '-' ? 'minus' : 'plus'}>
			{transaction.text}{' '}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>
			<button className="delete-btn">
				<i className="las la-minus-circle"></i>
			</button>
		</li>
	);
};
