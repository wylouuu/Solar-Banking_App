import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
	const loggedIn = {
		firstName: 'Wylouuu',
	};
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account and transaction efficiently'
					/>
				</header>

				<TotalBalanceBox
					account={[]}
					totalBanks={1}
					totalCurrentBalance={1250.35}
				/>
			</div>
		</section>
	);
};

export default Home;
