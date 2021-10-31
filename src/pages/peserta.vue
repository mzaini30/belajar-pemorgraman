<template layout="default" title='Peserta' description='List peserta yang belajar di blog ini
	'>
	<div class='body'>
		<h1>Peserta Belajar Pemrograman</h1>
		<div class="full">
			<Peserta client:load></Peserta>
		</div>
		<a href="/">cd ..</a>
	</div>
</template>

<style scoped>
	.body {
		@apply p-10 <md:p-3;
	}
	h1 {
		@apply text-3xl pb-5 text-center font-serif
	}
	.full {
		@apply max-w-full overflow-auto
	}
	a {
		@apply text-center underline block pt-3 italic
	}
</style>