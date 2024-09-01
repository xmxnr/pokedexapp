import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/PokedexPage/PokeCard';
import './styles/PokedexPage.css';

const PokedexPage = () => {
	const trainer = useSelector((states) => states.userData);
	const [pokemons, getPokemons] = useFetch();

	useEffect(() => {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0';
		getPokemons(url);
	}, []);

	
	

	return (
		<div>
			<div className='flex-container title__container'>
				<h1 className="general__title">Pokedex</h1>
				<img src='\pokeball.png' alt="Pokeball Image" />
			</div>
			<p className="general__welcome">
				Welcome <span>{trainer}</span>, here you'll find your favorite Pokemons
			</p>

			<section className="cards__container flex-container">
				{pokemons?.results.map((poke) => (
					<PokeCard key={poke.url} poke={poke} />
				))}
			</section>
		</div>
	);
};

export default PokedexPage;
