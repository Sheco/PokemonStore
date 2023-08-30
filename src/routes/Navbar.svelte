<script>
	import { cartTotal,  creditAvailable } from "$lib";
	import { page } from "$app/stores";
</script>

<header class="d-flex flex-wrap justify-content-center py-1 mb-4 border-bottom text-bg-dark">
	<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
		<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
		<span class="fs-4 text-light">Pokemon Store 0.1.3</span>
	</a>

	<span class="nav navbar-text me-2">
		Total: <span class="fw-bold">${$cartTotal}</span>
	</span>
	<span class="nav navbar-text me-2">
		Credit: <span class="fw-bold">${$creditAvailable}</span><br>
	</span>

	<ul class="nav nav-pills">
		<li class="nav-item"><a href="/" class="nav-link text-light" class:active={$page.url.pathname=="/"} aria-current="page">Home</a></li>
		<li class="nav-item"><a href="/cart" class="nav-link text-light" class:active={$page.url.pathname=="/cart"}>Cart</a></li>
	</ul>
</header>


