import { getData, fromArray } from '$lib/parrain.js';
import { redirect } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const parrains = (await getData()).map(fromArray);
	const nom = parrains[Math.floor(Math.random() * parrains.length)].nom;
	throw redirect(307, '/p/' + nom);
}
