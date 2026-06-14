<script lang="ts">
  import { restaurant, categories, items } from "$lib/data.js";
  import Hero from "$lib/components/Hero.svelte";
  import MenuItem from "$lib/components/MenuItem.svelte";

  // Accordion state
  let openCategories = $state<Record<string, boolean>>({});

  // Group items by category
  let itemsByCategory = $derived(
    categories.map((category) => ({
      ...category,
      items: items.filter((item) => item.categoryId === category.id),
    }))
  );

  function toggleCategory(id: string) {
    openCategories[id] = !openCategories[id];
  }
</script>

<svelte:head>
  <title>{restaurant.name} | Virtual Menu</title>
  <meta name="description" content={restaurant.description} />
</svelte:head>

<div class="page-wrapper">
  <Hero {restaurant} />

  <main class="menu-content container">
    <div class="accordion-list">
      {#each itemsByCategory as category (category.id)}
        <div class="accordion-item">
          <button class="accordion-header" onclick={() => toggleCategory(category.id)}>
            <div class="header-content">
              <span class="icon">🍹</span>
              <span class="category-name">{category.name}</span>
            </div>
            <svg class="arrow {openCategories[category.id] ? 'open' : ''}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          
          {#if openCategories[category.id]}
            <div class="accordion-content">
              {#if category.items.length === 0}
                <p class="empty-state">No items available.</p>
              {:else}
                <div class="items-list">
                  {#each category.items as item (item.id)}
                    <MenuItem {item} />
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </main>
</div>

<footer class="site-footer">
  <div class="footer-bottom">
    <h2 class="footer-logo">PARK RESIDENCY</h2>
    <p class="footer-text">© 2026 {restaurant.name}. All rights reserved.</p>
    
    <div class="footer-powered">
      <p class="powered-label">Powered by <span class="powered-brand">ScanDesk</span></p>
      <p class="powered-cta">Get your digital menu ·
        <a href="tel:+916369169287" class="powered-phone">+91 63691 69287</a>
      </p>
    </div>
  </div>
</footer>

<style>
  .page-wrapper {
    background-color: var(--bg-primary);
    min-height: 100vh;
  }

  .menu-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 16px 80px;
  }

  .accordion-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .accordion-item {
    display: flex;
    flex-direction: column;
  }

  .accordion-header {
    background-color: var(--brand-navy);
    color: var(--accent);
    border: none;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 600;
    transition: background-color 0.2s;
  }

  .accordion-header:hover {
    background-color: #15223b;
  }

  .header-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    font-size: 1.2rem;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  .accordion-content {
    background-color: transparent;
    padding: 24px;
  }

  .items-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .empty-state {
    color: var(--text-secondary);
    font-style: italic;
  }

  /* ── Footer ────────────────────────────────────── */
  .site-footer {
    display: flex;
    flex-direction: column;
  }



  .footer-bottom {
    background-color: var(--brand-navy);
    color: var(--accent);
    text-align: center;
    padding: 48px 24px;
  }

  .footer-logo {
    font-family: var(--font-serif);
    font-size: 1.8rem;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .footer-text {
    font-size: 0.8rem;
    color: rgba(193, 159, 95, 0.7);
  }

  .footer-powered {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .powered-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .powered-brand {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s;
  }

  .powered-brand:hover {
    color: var(--accent);
  }

  .powered-cta {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 6px;
  }

  .powered-phone {
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
</style>
