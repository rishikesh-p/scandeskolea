<script lang="ts">
  let { categories, activeCategory, onSelect } = $props<{
    categories: Array<{id: string, name: string}>;
    activeCategory: string;
    onSelect: (id: string) => void;
  }>();
</script>

<nav class="category-nav glass-panel">
  <div class="nav-container">
    {#each categories as category (category.id)}
      <button
        class="nav-btn"
        class:active={activeCategory === category.id}
        onclick={() => onSelect(category.id)}
      >
        {category.name}
      </button>
    {/each}
  </div>
</nav>

<style>
  /* ── Mobile: horizontal pill strip ──────────── */
  .category-nav {
    padding: 10px 0;
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    margin-bottom: 20px;
    background: rgba(10, 10, 10, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  }

  .nav-container {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    gap: 8px;
    padding: 0 16px;
    scrollbar-width: none;
  }

  .nav-container::-webkit-scrollbar {
    display: none;
  }

  .nav-btn {
    background: transparent;
    border: 1px solid transparent;
    color: var(--text-secondary);
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 7px 16px;
    white-space: nowrap;
    border-radius: 20px;
    cursor: pointer;
    transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
    flex-shrink: 0;
  }

  @media (hover: hover) {
    .nav-btn:hover {
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.06);
    }
  }

  .nav-btn.active {
    background: var(--accent);
    color: #000;
    font-weight: 700;
    border-color: transparent;
    box-shadow: 0 4px 14px rgba(var(--accent-rgb), 0.35);
  }

  /* ── Desktop: vertical sidebar ───────────────── */
  @media (min-width: 1024px) {
    .category-nav {
      position: sticky;
      top: 24px;
      padding: 8px;
      border-radius: var(--radius-md);
      border: 1px solid rgba(255, 255, 255, 0.07);
      margin-bottom: 0;
    }

    .nav-container {
      flex-direction: column;
      padding: 0;
      gap: 4px;
    }

    .nav-btn {
      text-align: left;
      padding: 12px 16px;
      border-radius: var(--radius-sm);
      font-size: 0.95rem;
      width: 100%;
    }

    .nav-btn.active {
      background: rgba(var(--accent-rgb), 0.15);
      color: var(--accent);
      border-color: rgba(var(--accent-rgb), 0.3);
      box-shadow: none;
      font-weight: 600;
    }

    /* Active indicator line on left */
    .nav-btn.active::before {
      content: '';
      display: inline-block;
      width: 3px;
      height: 1em;
      background: var(--accent);
      border-radius: 2px;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
</style>
