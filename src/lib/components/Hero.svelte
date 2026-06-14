<script lang="ts">
  let { restaurant } = $props<{
    restaurant: { name: string; description: string; logo: string; heroImage: string }
  }>();
</script>

<div class="hero">

  <div class="hero-content">
    <h3 class="subtitle">Urban House Restobar</h3>
    <h1 class="title">Sip, Savor & Socialize</h1>
    <p class="desc">Explore our vibrant bar menu—crafted cocktails, drink specials, and flavorful bites await. Make every visit memorable at {restaurant.name}.</p>
    
    <div class="image-container">
      <img src={restaurant.heroImage} alt="Hero" class="hero-image" />
    </div>

    <div class="bottom-content">
      <h3 class="subtitle">Signature Sips & Savory Bites</h3>
      <p class="desc">Discover our standout cocktails, drink specials, and curated food pairings. At {restaurant.name}'s Urban House Restobar, our menu is crafted to perfection.</p>
    </div>
  </div>
</div>

<style>
  .hero {
    padding-top: 48px;
    padding-bottom: 32px;
  }

  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
  }

  .subtitle {
    font-family: var(--font-serif);
    color: var(--accent);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }

  .title {
    font-size: 3rem;
    color: var(--text-primary);
    margin-bottom: 16px;
    line-height: 1.1;
  }

  .desc {
    font-size: 0.95rem;
    color: var(--text-primary);
    max-width: 600px;
    margin: 0 auto 32px;
    line-height: 1.6;
  }

  .image-container {
    width: 100%;
    margin-bottom: 32px;
  }

  .hero-image {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: var(--radius-sm);
    box-shadow: var(--shadow-md);
  }

  .bottom-content {
    margin-top: 32px;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 4rem;
    }
    .desc {
      font-size: 1.1rem;
    }
    .hero-image {
      max-height: 500px;
    }
  }
</style>
