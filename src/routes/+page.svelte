<script lang="ts">
	import '../style.css';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import type { ActionData } from './auth/lucia/login/$types';
	let { form, data }: { form: ActionData; data: PageServerData } = $props();

	import type { PageServerData } from './auth/lucia/$types';
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
						<h1 class="mb-5 text-5xl font-bold">Hello, world!! </h1>
						<p class="mb-5">
							This is Random Stuff. You will find a lot of random stuff here. This is a place where you can find random pages I implemented for fun.
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
								src="https://i.namu.wiki/i/Wh33Jo92CkywkYMQ-J9BMiksh48mo6mOy3QGgyTAedieJh81aeOFlLwrfbRuZaZcGBOwGWD53yfHqcH5sCswig.webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://i.pinimg.com/736x/a9/0d/61/a90d61817963d0d306202027f8935391.jpg"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://i.pinimg.com/736x/3e/34/c3/3e34c3c9782e21789a97e230026cb786.jpg"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://public-cdn-s3-us-west-2.oss-us-east-1.aliyuncs.com/talkie-user-img/179423429476517/211247736287393.jpeg?x-oss-process=image/resize,w_1024/format,webp"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://media.tenor.com/t-u0MbTWh7UAAAAe/kaoruko-waguri.png"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdanbooru.donmai.us%2Fposts%2F7698042&psig=AOvVaw1WMrTs7i8dQAVW07Kg__lF&ust=1745661502341000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND80tb18owDFQAAAAAdAAAAABAE"
							/>
						</div>
						<div class="carousel-item h-full">
							<img
								alt="carousel"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnj5wVJE9OSup8ZHSEC0JSndHXHvk8BaSXKw&s"
							/>
						</div>
					</div>
					<div>
						<h1 class="text-5xl font-bold">New Waifu Arrived!</h1>
						<p class="py-6">
							This is Kaoruko Waguri, the most gorgeous waifu I have ever seen. 
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
							To see more random shit I implemented.
						</p>
					</div>
					<div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<div class="card-body">
							<div class="page-container">
								{#if data.user}
									<p>Logged in as {data.user.username}</p>
								{:else}
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
								{/if}
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
		& form {
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
