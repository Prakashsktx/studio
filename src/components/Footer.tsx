'use client';

export function Footer() {
  const handleAdminClick = () => {
    // Dispatch custom event to show admin
    const event = new CustomEvent('show-admin');
    window.dispatchEvent(event);
  };

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-card dark:border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3">
          <div>
            <button 
              onClick={handleAdminClick}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 fancybyaifie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
