<script lang="ts">
let { data } = $props<{
		notes: Array<{ id: number; title: string; content: string }>;
		user: { id: number; username: string };
	}>();
</script>

<div class="user-info">
	<div class="user-meta">
		<span class="label">Logged in as</span>
		<span class="username">mr good boy</span>
		<span class="user-id">#fdsg45dg51512ds</span>
		<!-- <span class="username">{data.user.username}</span>
		<span class="user-id">#{data.user.id}</span> -->
	</div>
	<form method="post" action="?/logout">
		<button class="signout-button" title="Sign out">Return</button>
	</form>
</div>