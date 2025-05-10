
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Mobile theme toggle sync with desktop
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const mobileSunIcon = document.getElementById('mobileSunIcon');
  const mobileMoonIcon = document.getElementById('mobileMoonIcon');
  
  mobileThemeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Sync all theme icons
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
    mobileSunIcon.classList.toggle('hidden');
    mobileMoonIcon.classList.toggle('hidden');
  });
