<script>
	import { credit } from "$lib";
	import { page } from "$app/stores";
</script>

<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom text-bg-dark">
	<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
		<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
		<span class="fs-4 text-light">Pokemon Store</span>
	</a>

	<span class="d-flex flex-wrap py-2 me-2">
		Available credit: <span class="fw-bold">${$credit}</span>
	</span>

	<ul class="nav nav-pills">
		<li class="nav-item"><a href="/" class="nav-link text-light" class:active={$page.url.pathname=="/"} aria-current="page">Home</a></li>
		<li class="nav-item"><a href="/cart" class="nav-link text-light" class:active={$page.url.pathname=="/cart"}>Cart</a></li>
	</ul>
</header>


