'use client';

import { BarChart, Box, ClipboardList, LogOut, Users, HelpCircle, Package, LayoutGrid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboardPage() {
    const router = useRouter();

    const stats = [
        { title: 'Total Products', value: '48', description: 'Across all categories', icon: Package },
        { title: 'Total Outfits', value: '8', description: 'Curated collections', icon: LayoutGrid },
        { title: 'Categories', value: '6', description: 'Active categories', icon: BarChart },
        { title: 'Newsletter', value: '-', description: 'Subscribers (mock)', icon: Users },
    ]

    return (
        <div className="flex flex-col min-h-screen bg-muted/40 dark:bg-zinc-900/40">
            <header className="bg-background dark:bg-card border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-xl font-semibold text-foreground">fancybyaifie Admin</h1>
                        <Button variant="outline" size="sm" onClick={() => router.push('/admin')}>
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1 p-4 sm:p-6 lg:p-8">
                <div className="max-w-7xl mx-auto">
                    <Tabs defaultValue="overview">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="products">Products</TabsTrigger>
                            <TabsTrigger value="outfits">Outfits</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {stats.map((stat) => {
                                    const Icon = stat.icon;
                                    return (
                                        <Card key={stat.title}>
                                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                                                <Icon className="h-4 w-4 text-muted-foreground" />
                                            </CardHeader>
                                            <CardContent>
                                                <div className="text-2xl font-bold">{stat.value}</div>
                                                <p className="text-xs text-muted-foreground">{stat.description}</p>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>

                            <Card className="mt-8">
                                <CardHeader>
                                    <CardTitle>Quick Actions</CardTitle>
                                    <CardDescription>Common management tasks</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button variant="outline" className="w-full justify-start">
                                        <Package className="mr-2 h-4 w-4"/>
                                        Manage Products
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <LayoutGrid className="mr-2 h-4 w-4"/>
                                        Manage Outfits
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="products">
                           <div className="text-center py-16 text-muted-foreground">Product management coming soon.</div>
                        </TabsContent>
                         <TabsContent value="outfits">
                           <div className="text-center py-16 text-muted-foreground">Outfit management coming soon.</div>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
