<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { goto } from '$app/navigation';

	let { form }: { form: ActionData } = $props();
</script>

<h1>Welcome to Note Pad Online</h1>
<div class="page-container">
	<form method="post" action="?/login" use:enhance>
		<label>
			Username(all small letters)
			<input name="username" />
		</label>
		<label>
			Password
			<input type="password" name="password" />
		</label>
		<p style="color: red">{form?.message ?? ''}</p>
		<button>Login</button>
		<!-- <button formaction="?/register">Register</button> -->
		<button onclick={() => goto('/register')}>Register</button>
	</form>
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 15px;
		font-size: 28px;
		color: #333;
		font-weight: 600;
	}

	.page-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: linear-gradient(to right, #e0eafc, #cfdef3);
		padding: 20px;

		& form {
			background-color: #ffffff;
			border-radius: 12px;
			box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
			padding: 40px 30px;
			max-width: 400px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 20px;
			animation: fadeIn 0.5s ease-in-out;

			& label {
				display: flex;
				flex-direction: column;
				font-size: 14px;
				font-weight: 500;
				color: #444;

				& input {
					margin-top: 6px;
					padding: 12px;
					font-size: 14px;
					border: 1px solid #ccc;
					border-radius: 6px;
					background-color: #f9f9f9;
					transition: border-color 0.2s ease;

					&:focus {
						border-color: #5a9df0;
						outline: none;
						background-color: #fff;
					}
				}
			}

			& p {
				text-align: center;
				color: #e74c3c;
				font-size: 14px;
				margin-top: 10px;
			}

			& button {
				padding: 12px;
				border: none;
				border-radius: 6px;
				background-color: #5a9df0;
				color: white;
				font-size: 15px;
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #3a8fd4;
				}
			}
		}
	}

	button + button {
		background-color: #6c63ff;

		&:hover {
			background-color: #5848d9;
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
