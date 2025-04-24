<script lang="ts">
	import '../style.css';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import type { ActionData } from './auth/lucia/login/$types';
	let { form }: { form: ActionData } = $props();
</script>

<main>
	<div class="tabs tabs-lift tabs-bottom">
		<input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 1" checked={true} />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<div
				class="hero min-h-screen"
				style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
			>
				<div class="hero-overlay"></div>
				<div class="hero-content text-neutral-content text-center">
					<div class="max-w-md">
						<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
						<p class="mb-5">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>

		<input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 2" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<div class="hero bg-base-200 min-h-screen">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<div class="carousel carousel-vertical rounded-box h-96">
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
							/>
						</div>
					</div>
					<div>
						<h1 class="text-5xl font-bold">Box Office News!</h1>
						<p class="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>

		<input type="radio" name="my_tabs_5" class="tab" aria-label="Tab 3" />
		<div class="tab-content bg-base-100 border-base-300 p-6">
			<div class="hero bg-base-200 min-h-screen">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<div class="text-center lg:text-left">
						<h1 class="text-5xl font-bold">Login now!</h1>
						<p class="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
					<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div class="card-body">
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
									<button onclick={() => goto('auth/lucia/register')}>Register</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.page-container {
		/* display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: linear-gradient(to right, #e0eafc, #cfdef3);
		padding: 20px; */

		& form {
			/* 	background-color: #ffffff; */
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
