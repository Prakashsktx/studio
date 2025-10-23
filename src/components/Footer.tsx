'use client';

import Link from "next/link";

export function Footer() {

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-card dark:border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-3">
          <div>
            <Link 
              href="/admin"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Admin
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 fancybyaifie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
