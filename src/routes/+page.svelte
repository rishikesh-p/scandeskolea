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
              <span class="category-name">{category.name}</span>
            </div>
            <svg class="arrow {openCategories[category.id] ? 'open' : ''}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
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

  <section class="coffee-story container">
    <div class="editorial-intro">
      <h2 class="editorial-title">Our Coffee Beans</h2>
      <p class="editorial-quote">
        At Olea, we take pride in serving only the finest organic, single-origin coffee. The beans are carefully sourced to ensure the highest quality and a truly exceptional coffee experience. Our coffee beans come from nutrient-rich plots nestled in the Araku Valley, a region renowned for its rich biodiversity and perfect coffee-growing conditions.
      </p>
    </div>
    
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-accent"></div>
        <h4 class="metric-label">Freshness</h4>
        <p class="metric-value">Roasted & ground to order</p>
      </div>
      <div class="metric-card">
        <div class="metric-accent"></div>
        <h4 class="metric-label">Roast Profile</h4>
        <p class="metric-value">Medium Dark</p>
      </div>
      <div class="metric-card">
        <div class="metric-accent"></div>
        <h4 class="metric-label">Flavor Notes</h4>
        <p class="metric-value">Dark chocolate, Toffee & Sugarcane</p>
      </div>
    </div>

    <div class="editorial-outro">
      <p>We believe that great coffee begins with great beans. By focusing on single-origin, organic coffee, we ensure that each cup you enjoy is not only delicious but also supports sustainable farming practices and the local communities of the Araku Valley.</p>
      <p>Join us in savoring the distinct taste of our exceptional coffee beans. Each sip is a journey to the heart of the Araku Valley, where tradition and quality come together to create the perfect cup.</p>
    </div>
  </section>
</div>

<footer class="site-footer">
  <div class="footer-bottom">
    <div class="footer-contact">
      <img src={restaurant.logo} alt={restaurant.name} class="footer-logo-img" />
      
      <div class="contact-details">
        <p class="contact-item"><strong>Phone:</strong><br><a href="tel:{restaurant.phone.replace(/\\s+/g, '')}">{restaurant.phone}</a></p>
        <p class="contact-item"><strong>Email:</strong><br>
          {#each restaurant.emails as email}
            <a href="mailto:{email}">{email}</a><br>
          {/each}
        </p>
      </div>

      <div class="social-links">
        {#if restaurant.facebook}
          <a href={restaurant.facebook} target="_blank" rel="noopener noreferrer" class="social-link">Facebook</a>
        {/if}
        {#if restaurant.instagram}
          <a href={restaurant.instagram} target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
        {/if}
        {#if restaurant.whatsapp}
          <a href={restaurant.whatsapp} target="_blank" rel="noopener noreferrer" class="social-link">WhatsApp</a>
        {/if}
      </div>
    </div>
    
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
    border: 1px solid rgba(193, 159, 95, 0.15);
    border-radius: 4px;
    padding: 18px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: var(--font-sans);
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.2s ease;
    user-select: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .accordion-header:hover {
    background-color: #17243e;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    border-color: rgba(193, 159, 95, 0.3);
  }

  .accordion-header:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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

  /* ── Coffee Story Redesign ─────────────────────── */
  .coffee-story {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px 64px;
    color: var(--text-primary);
  }

  .editorial-intro {
    text-align: center;
    margin-bottom: 48px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .editorial-title {
    font-family: var(--font-sans);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--accent);
    margin-bottom: 24px;
  }

  .editorial-quote {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--brand-navy);
    margin: 0;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 48px;
  }

  @media (min-width: 600px) {
    .metrics-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }

  .metric-card {
    background-color: var(--brand-navy);
    border: 1px solid rgba(193, 159, 95, 0.15);
    padding: 32px 24px;
    border-radius: var(--radius-sm);
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .metric-accent {
    width: 32px;
    height: 2px;
    background-color: var(--accent);
    margin: 0 auto 24px;
  }

  .metric-label {
    font-family: var(--font-sans);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0 0 12px;
  }

  .metric-value {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    color: var(--bg-primary);
    margin: 0;
    line-height: 1.4;
  }

  .editorial-outro {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

  .editorial-outro p {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 16px;
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

  .footer-logo-img {
    width: 90px;
    height: auto;
    margin-bottom: 24px;
  }

  .footer-contact {
    max-width: 500px;
    margin: 0 auto 32px;
  }

  .contact-details {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .contact-item {
    font-size: 0.9rem;
    color: var(--bg-primary);
    line-height: 1.5;
    margin: 0;
  }

  .contact-item strong {
    color: var(--accent);
    font-weight: 600;
  }

  .contact-item a {
    color: var(--bg-primary);
    text-decoration: none;
    transition: color 0.2s;
  }

  .contact-item a:hover {
    color: var(--accent);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
  }

  .social-link {
    color: var(--accent);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: opacity 0.2s;
  }

  .social-link:hover {
    opacity: 0.8;
  }

  .footer-text {
    font-size: 0.8rem;
    color: rgba(193, 159, 95, 0.7);
    margin-top: 32px;
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
