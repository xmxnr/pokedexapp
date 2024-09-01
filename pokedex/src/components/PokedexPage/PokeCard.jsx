import { useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/PokeCard.css';

const PokeCard = ({ poke }) => {
	const [pokemon, getPokemon] = useFetch();
	const [moves, getMoves] = useFetch()
	const navigate = useNavigate();
	useEffect(() => {
		getPokemon(poke.url);
	}, []);

	const handleNavigate = (e) => {
		navigate(`/pokedex/${pokemon.name}`);
	};

	useEffect(() => {
	  getMoves('https://pokeapi.co/api/v2/type/')
	}, [])

	return (
		<article
			onClick={handleNavigate}
			className="card__container flex-container"
		>
			<header>
				<img
					src={pokemon?.sprites.other['official-artwork'].front_default}
					alt={pokemon?.name}
				/>
			</header>

			<section className="card__info">
				<h3 className="card__title">{pokemon?.name}</h3>
				<ul className='card__type'>
					{pokemon?.types.map((typeInfo) => (
						<li className={`${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
					))}
				</ul>
				<hr />
				<ul className="card__stats">
					{pokemon?.stats.map((statInfo) => (
						<li key={statInfo.stat.url} className='stats__li'>
							<span className='stat__name'>{statInfo.stat.name}</span>
							<span className='stat__info'>{statInfo.base_stat}</span>
						</li>
					))}
				</ul>
			</section>
		</article>
	);
};

export default PokeCard;
