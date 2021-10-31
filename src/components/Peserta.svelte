<script>
	import axios from 'axios'
	const {post} = axios
	import {stringify} from 'qs'
	import {headers} from 'zen-headers'
	import {komentar, sql} from '~/api'

	let datanya = []

	async function ambilData(){
		const {data} = await post(sql, stringify({
			id: komentar,
			kunci: 'peserta'
		}), {headers})
		datanya = data
	}
	ambilData()
</script>

<table>
	<thead>
		<tr>
			<th>Nama</th>
			<th>Rumah</th>
		</tr>
	</thead>
	<tbody class='peserta'>
		{#if datanya}
			{#each datanya as x}
				<tr>
					<td>{x.nama}</td>
					<td>
						<a href={x.link} rel='nofollow'>{x.link}</a>
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>

<style>
	table {
		@apply mx-auto
	}
	td, th {
		@apply border !border-gray-300 px-5 py-1
	}
	td {
		@apply border border-gray-300 px-5 py-1
	}
	a {
		@apply underline
	}
</style>