import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Abilities from '../components/PokedexinfoPage/abilities';
import Types from '../components/PokedexinfoPage/Types';
import Movements from '../components/PokedexinfoPage/Movements';
import './styles/PokedexinfoPage.css';

const PokedexinfoPage = () => {
	const { name } = useParams();
	const [pokemon, getPokemon] = useFetch();

	useEffect(() => {
		const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
		getPokemon(url);
	}, [name]);

	return (
		<div className="infopoke__container">
				<img
					src={pokemon?.sprites.other['official-artwork'].front_default}
					alt={pokemon?.name}
					className="infopoke__img"
				/>
				<div>{pokemon?.order}</div>
				<h2 className="pokemon__name">{pokemon?.name}</h2>
				<hr />
				<div>
					<p>
						Weight <span>{pokemon?.weight}</span>
					</p>
				</div>
				<div>
					<p>
						Height <span>{pokemon?.height}</span>
					</p>
				</div>
				<section>
					<h3>Type</h3>
					{pokemon?.types.map((type) => (
						<Types key={type.type.url} type={type} />
					))}
				</section>
				<section>
					<h3>Abilities</h3>
					<div>
						{pokemon?.abilities.map((abilities1) => (
							<Abilities key={abilities1.ability.url} ability={abilities1} />
						))}
					</div>
				</section>
				<section>
					<h3>Movement</h3>
					{pokemon?.moves.map((move) => (
						<Movements key={move.move.url} move={move} />
					))}
				</section>
			
		</div>
	);
};

export default PokedexinfoPage;
