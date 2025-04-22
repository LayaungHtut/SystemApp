<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props<{
		notes: Array<{ id: number; title: string; content: string }>;
		user: { id: number; username: string };
	}>();

	let editNote = $state<{ id: number | null; title: string; content: string }>({
		id: null,
		title: '',
		content: ''
	});

	async function handleDelete(noteId: number) {
		try {
			const response = await fetch('?/deleteNote', {
				method: 'DELETE',
				body: JSON.stringify({ id: noteId })
			});
			if (response.ok) {
				data.notes = data.notes.filter((note: any) => note.id !== noteId);
			}
		} catch (error) {
			console.error('Delete failed:', error);
		}
	}

	function startEdit(note: { id: number; title: string; content: string }) {
		editNote.id = note.id;
		editNote.title = note.title;
		editNote.content = note.content;
	}

	function cancelEdit() {
		editNote.id = null;
		editNote.title = '';
		editNote.content = '';
	}
</script>

<svelte:head>
	<title>Notes</title>
</svelte:head>

<div class="user-info">
	<div class="user-meta">
		<span class="label">Logged in as</span>
		<span class="username">{data.user.username}</span>
		<span class="user-id">#{data.user.id}</span>
	</div>
	<form method="post" action="?/logout">
		<button class="signout-button" title="Sign out">Return</button>
	</form>
</div>

<div class="notes-container">
	<h1>My Notes</h1>

	<form method="POST" action="?/createNote" use:enhance class="note-form">
		<h2>Create New Note</h2>
		<input name="title" type="text" placeholder="Note title" required />
		<textarea name="content" placeholder="Note content" rows="4" required></textarea>
		<button type="submit">Create Note</button>
	</form>

	<div class="notes-list">
		{#each data.notes as note (note.id)}
			<div class="note-card">
				{#if editNote.id === note.id}
					<form method="POST" action="?/updateNote" use:enhance onsubmit={() => cancelEdit()}>
						<input type="hidden" name="id" value={note.id} />
						<input name="title" type="text" bind:value={editNote.title} required />
						<textarea name="content" bind:value={editNote.content} rows="4" required></textarea>
						<div class="form-actions">
							<button type="submit">Save</button>
							<button type="button" onclick={cancelEdit}>Cancel</button>
						</div>
					</form>
				{:else}
					<h3>{note.title}</h3>
					<pre>{note.content}</pre>
					<div class="note-actions">
						<button onclick={() => startEdit(note)}>Edit</button>
						<form method="POST" action="?/deleteNote" use:enhance>
							<input type="hidden" name="id" value={note.id} />
							<button type="submit">Delete</button>
						</form>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.user-info {
		position: absolute;
		top: 1rem;
		right: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #f8f8fa;
		padding: 0.75rem 1.25rem;
		border-radius: 10px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		color: #333;
		font-size: 0.9rem;

		& .user-meta {
			display: flex;
			flex-direction: column;

			& .label {
				font-size: 0.75rem;
				color: #777;
			}

			& .username {
				font-weight: 600;
				color: #007acc;
			}

			& .user-id {
				font-family: monospace;
				font-size: 0.75rem;
				color: #aaa;
			}
		}

		& .signout-button {
			background: none;
			border: none;
			color: #ff5c5c;
			font-weight: bold;
			cursor: pointer;
			padding: 0.25rem 0.5rem;
			border-radius: 6px;
			transition: background 0.2s;

			&:hover {
				background: rgba(255, 92, 92, 0.1);
			}
		}
	}

	.notes-container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;

		& .note-form,
		& .note-card {
			background: #fff;
			padding: 20px;
			border-radius: 8px;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
			margin-bottom: 20px;
		}

		& .note-form {
			& h2 {
				font-size: 1.25rem;
				margin-bottom: 15px;
				color: #333;
			}
		}

		input,
		textarea {
			width: 100%;
			margin-bottom: 10px;
			padding: 8px;
			border: 1px solid #ddd;
			border-radius: 4px;

			&:focus {
				border-color: #007acc;
				outline: none;
			}
		}

		textarea {
			resize: vertical;
			min-height: 100px;
		}

		button {
			background: #007acc;
			color: white;
			border: none;
			padding: 8px 16px;
			border-radius: 4px;
			cursor: pointer;
			transition: background 0.3s ease;

			&:hover {
				background: #005d9c;
			}
		}

		.note-actions {
			margin-top: 10px;
			display: flex;
			gap: 10px;
		}

		.notes-list {
			margin-top: 30px;

			.note-card {
				h3 {
					font-size: 1.25rem;
					color: #333;
				}

				pre {
					white-space: pre-wrap;
					font-family: inherit;
					color: #444;
					margin: 10px 0;
				}

				.note-actions {
					display: flex;
					gap: 10px;

					button {
						background: #ff5c5c;
						color: white;

						&:hover {
							background: #d94a4a;
						}
					}
				}
			}
		}
	}
</style>
