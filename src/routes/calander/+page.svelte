<script lang="ts">
	import 'cally';
	import '../../style.css';
</script>

<calendar-date class="cally bg-base-100 border-base-300 rounded-box border shadow-lg">
	<svg
		aria-label="Previous"
		class="size-4 fill-current"
		slot="previous"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg
	>
	<svg
		aria-label="Next"
		class="size-4 fill-current"
		slot="next"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg
	>
	<calendar-month></calendar-month>
</calendar-date>

<style>
    .cally {
        width: 80%;
        height: 100%;
    }
</style>
