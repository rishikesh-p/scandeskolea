<script lang="ts">
  let { item } = $props<{
    item: {
      name: string;
      description: string;
      price: number;
      image?: string;
    };
  }>();
</script>

<div class="menu-item">
  {#if item.image}
    <img src={item.image} alt={item.name} class="item-image" />
  {/if}
  
  <div class="item-content">
    <div class="item-header">
      <h3 class="item-name">{item.name}</h3>
      <div class="dotted-spacer"></div>
      <span class="item-price">₹{item.price}</span>
    </div>
    {#if item.description}
      <p class="item-desc">{item.description}</p>
    {/if}
  </div>
</div>

<style>
  .menu-item {
    display: flex;
    flex-direction: column;
    padding: 16px 0;
    gap: 12px;
  }

  .item-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border-radius: 8px;
  }

  .item-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }

  .item-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }

  .item-name {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
    white-space: nowrap;
  }

  .dotted-spacer {
    flex-grow: 1;
    border-bottom: 2px dotted rgba(0, 0, 0, 0.2);
    position: relative;
    top: -4px;
    min-width: 20px;
  }

  .item-price {
    font-weight: 600;
    color: var(--text-primary);
    font-size: 1rem;
    white-space: nowrap;
  }

  .item-desc {
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.4;
    margin: 0;
    max-width: 85%;
  }

  @media (min-width: 768px) {
    .menu-item {
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }

    .item-image {
      width: 120px;
      height: 120px;
      aspect-ratio: 1 / 1;
      border-radius: 8px;
      flex-shrink: 0;
    }

    .item-name {
      font-size: 1.1rem;
    }
    .item-price {
      font-size: 1.1rem;
    }
    .item-desc {
      font-size: 0.9rem;
    }
  }
</style>
