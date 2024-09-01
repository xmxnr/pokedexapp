import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css'

const HomePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(changeUser(inputTrainer.current.value.trim()));
		navigate('/pokedex')
	};

	const inputTrainer = useRef();

	return (
		<div className='flex-container home__container'>
			<img src='\pokeball.png' alt="Pokeball Image" />
			<h1 className='home__title'>Pokedex</h1>
			<h2 className='home__greeting'>Hi Trainer!</h2>
			<p className='home__trainer'>Please give me your trainer name!</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Write your trainer name"
					ref={inputTrainer}
					className='home__input'
				/>
				<button className='home__button'>Catch them all!</button>
			</form>
		</div>
	);
};

export default HomePage;
