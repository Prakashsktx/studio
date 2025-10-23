'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setSearchTerm('');
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg bg-background">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl text-primary">Search Products</DialogTitle>
                     <DialogDescription>
                        Find your perfect piece of clothing.
                    </DialogDescription>
                </DialogHeader>
                <div className="relative mt-4">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="e.g. 'White T-Shirt'" 
                        className="pl-12 h-12 text-lg" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="mt-6 text-center text-muted-foreground min-h-[100px]">
                    <p>Start typing to see search results.</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}
