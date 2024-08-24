'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<CountUp end={amount} separator='.' decimals={2} decimal=',' prefix='$' />
	);
};

export default AnimatedCounter;
