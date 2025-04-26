<script lang="ts">
    import { page } from '$app/state';
  
    let password = $state('');
    let confirmPassword = $state('');
    let message = $state('');

    let token = $derived(() => page.url.searchParams.get('token'));

    async function submit(event: SubmitEvent) {
  event.preventDefault();
  if (password !== confirmPassword) {
    message = 'Passwords do not match!';
    return;
  }

  const res = await fetch('/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token(), password })
  });
  const data = await res.json();
  message = data.success ? 'Password reset successful!' : 'Reset failed.';
}

  </script>
  
  <form onsubmit={submit} class="flex flex-col gap-4 max-w-sm mx-auto mt-10">
    <h1 class="text-2xl font-bold">Reset Password</h1>
    <input type="password" bind:value={password} class="p-2 border rounded" placeholder="New password" required />
    <input type="password" bind:value={confirmPassword} class="p-2 border rounded" placeholder="Confirm password" required />
    <button class="p-2 bg-green-500 text-white rounded" type="submit">Reset Password</button>
    {#if message}
      <p class="text-center mt-4">{message}</p>
    {/if}
  </form>
  