<script lang="ts">
	let username = $state('');
	let password = $state('');
	let message = $state('');
	let email = $state('');

	const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const response = await fetch('/auth/lucia/register', {
        method: 'POST',
        body: formData
    });

    if (response.redirected) {
        window.location.href = response.url;
        return;
    }

    if (!response.ok) {
        const data = await response.json();
        message = data.message || 'An error occurred';
    }
};

</script>

<div class="form-container">
	<form onsubmit={handleSubmit}>
		<h2>Create an Account</h2>

		<div class="input-group">

			<label for="email">Email</label>
			<input
				type="email"
				id="email"
				name="email"
				bind:value={email}
				placeholder="Enter your email"
				required
			/>

			<label for="username">Username(all small letters)</label>
			<input
				type="text"
				id="username"
				name="username"
				bind:value={username}
				placeholder="Enter your username"
				required
			/>
			{#if message && message.includes('username')}
				<div class="error">{message}</div>
			{/if}
		</div>

		<div class="input-group">
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				bind:value={password}
				placeholder="Enter your password"
				required
			/>
			{#if message && message.includes('password')}
				<div class="error">{message}</div>
			{/if}
		</div>

		<button type="submit">Register</button>

		{#if message && !message.includes('username') && !message.includes('password')}
			<div class="message">{message}</div>
		{/if}

		<p class="message">
			Already have an account? <a href="/auth/lucia/login" class="link">Login here</a>
		</p>
	</form>
</div>

<style>
	.form-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color: #f0f2f5;

		& form {
			background: white;
			padding: 30px;
			border-radius: 8px;
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
			width: 100%;
			max-width: 400px;

			& h2 {
				text-align: center;
				margin-bottom: 20px;
				font-size: 24px;
				color: #333;
			}

			& .input-group {
				margin-bottom: 15px;

				& label {
					font-size: 14px;
					font-weight: 600;
					color: #333;
					display: block;
					margin-bottom: 5px;
				}

				& input[type='text'],
				& input[type='password'],
				& input[type='email'] {
					width: 100%;
					padding: 12px;
					font-size: 14px;
					border: 1px solid #ddd;
					border-radius: 4px;
					background-color: #f9f9f9;
					transition: border 0.3s ease;

					&:focus {
						border: 1px solid #5a9df0;
						outline: none;
					}
				}

				& .error {
					color: red;
					font-size: 12px;
					margin-top: 5px;
				}
			}

			& button {
				width: 100%;
				padding: 12px;
				background-color: #5a9df0;
				color: white;
				border: none;
				border-radius: 4px;
				font-size: 16px;
				cursor: pointer;
				transition: background-color 0.3s ease;

				&:hover {
					background-color: #3a8fd4;
				}
			}

			& .message {
				text-align: center;
				margin-top: 10px;
				font-size: 14px;
				color: #e74c3c;
			}

			& .link {
				color: #5a9df0;
				text-decoration: none;
			}
		}
	}
</style>
