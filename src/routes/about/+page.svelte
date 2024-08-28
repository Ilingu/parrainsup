<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>À propos de cette application</h1>
	<p>
		Ce site a pour objectif de vous aider à connaître vos parrains rapidement et à trouver le vôtre
		!
	</p>
	<p />
	<h2 class="section">Illustrations des genres</h2>
	<ul class="gender-grid">
		{#each ['Masculin : ♂', 'Féminin : ♀', 'Trans : ⚧', 'Non-binaire : 👽', 'Agenre : 🚫', 'Questionning : ❓', 'Pingouin-gender : 🐧'] as gender}
			<li>{gender}</li>
		{/each}
	</ul>
	<p />
	<h2 class="section">Remerciements</h2>
	<p>
		Merci à <a href="https://github.com/HiiGHoVuTi">Juliette</a> de m'avoir laissé reprendre son
		code, et à nos parrains, notamment Kenza et Solène, qui ont imaginé les questions du sondage.
		<br />
		Et enfin, merci à Arthur d'avoir fait du débugage pour permettre au site d'être déployé !
	</p>
	<p style="text-align:right; font-style:italic;">Hugo</p>
</div>
