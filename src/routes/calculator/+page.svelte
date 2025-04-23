<script lang="ts">
	import { create, all } from 'mathjs';
	import "../../style.css"
	const math = create(all);

	type CalcRecord = { expression: string; result: string };

	let expression = $state('');
	let result = $state('');
	let error = $state('');
	let history = $state<CalcRecord[]>([]);
	let graphVisible = $state(false);
	let graphData = $state<any[]>([]);
	let graph = $state<HTMLElement | null>(null);


	const append = (char: string) => {
		expression += char;
		error = '';
	};

	const clear = () => {
		expression = '';
		result = '';
		error = '';
		graphVisible = false;
	};

	const calculate = () => {
		try {
			const res = math.evaluate(expression);
			result = res.toString();
			history.push({ expression, result });
			error = '';
			if (expression.includes('x')) {
				plotGraph(expression);
			} else {
				graphVisible = false;
			}
		} catch {
			error = 'Invalid expression';
		}
	};

	const plotGraph = (expr: string) => {
		const x = math.range(-10, 10, 0.1).toArray();
		const y = x.map((val) => {
			try {
				return math.evaluate(expr.replace(/x/g, `(${val})`));
			} catch {
				return NaN;
			}
		});
		graphData = [{ x, y, type: 'scatter', mode: 'lines', name: expr }];
		graphVisible = true;
	};

	const buttons = [
		'7', '8', '9', '/', 'sqrt(', 'sin(', 'cos(',
		'4', '5', '6', '*', '(', ')', 'tan(',
		'1', '2', '3', '-', 'log(', 'ln(', '^',
		'0', '.', '=', '+', 'pi', 'e', 'x', 'clear'
	];

	$effect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Enter') calculate();
			else if (e.key === 'Backspace') expression = expression.slice(0, -1);
			else if (/^[0-9+\-*/^().a-z]$/.test(e.key)) append(e.key);
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});
</script>


<div class="calculator">
	<div class="display">
		<div class="expression">{expression}</div>
		<div class="result">{error || result}</div>
	</div>

	<div class="buttons">
		{#each buttons as btn}
			<button onclick={() => {
				if (btn === '=') calculate();
				else if (btn === 'clear') clear();
				else append(btn);
			}} class="btn btn-soft btn-accent">
				{btn}
			</button>
		{/each}
	</div>

	{#if history.length}
		<div class="history">
			<h3>History</h3>
			<ul>
				{#each history as item}
					<li>
						<button type="button" onclick={() => expression = item.expression} class="btn btn-soft btn-accent">
							{item.expression} = {item.result}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	{/if}

	{#if graphVisible}
		<div bind:this={graph}></div>
	{/if}
</div>



<style>
	.calculator {
		max-width: 600px;
		margin: 2rem auto;
		padding: 1rem;
		border: 2px solid #ccc;
		border-radius: 10px;
		background: #f9f9f9;
	}
	.display {
		background: #222;
		color: #0f0;
		padding: 1rem;
		border-radius: 5px;
		font-family: monospace;
		margin-bottom: 1rem;
	}
	.expression { font-size: 1.1rem; }
	.result { font-size: 1.3rem; }
	.buttons {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 0.5rem;
	}
	button {
		padding: 0.75rem;
		font-size: 1rem;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	.history {
		margin-top: 1rem;
	}
	.history ul {
		list-style: none;
		padding: 0;
	}
	.history li {
		cursor: pointer;
		padding: 0.5rem;
		background: #eee;
		margin: 0.2rem 0;
		border-radius: 4px;
	}
</style>