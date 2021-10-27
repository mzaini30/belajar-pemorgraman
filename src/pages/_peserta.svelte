<script>
	import redaxios from 'redaxios'
	const {post} = redaxios
	import {stringify} from 'qs'
	import {headers} from 'zen-headers'
	import {komentar, sql} from './_api'

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