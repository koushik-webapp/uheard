'use client';

import React from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { MenuToggle } from '@/components/ui/menu-toggle';

export function SimpleHeader() {
	const [open, setOpen] = React.useState(false);
	const [searchOpen, setSearchOpen] = React.useState(false);

	const links = [
		{ label: 'Shop', href: '#shop' },
		{ label: 'Collections', href: '#collections' },
		{ label: 'Our Story', href: '#story' },
		{ label: 'Journal', href: '#journal' },
		{ label: 'Contact', href: '#contact' },
	];

	return (
		<header className="bg-white/95 supports-[backdrop-filter]:bg-white/90 sticky top-0 z-50 w-full border-b border-[#e8e8e8] backdrop-blur-lg">
			<nav className="mx-auto flex h-[72px] md:h-[84px] w-full max-w-7xl items-center justify-between px-8">

				{/* Left: Nav links (desktop) / Logo (mobile) */}
				<div className="flex items-center gap-6">
					{/* Mobile logo */}
					<a href="/" className="flex lg:hidden items-center shrink-0 py-2">
						<Image src="/logo.png" alt="U-Heard logo" width={120} height={40} priority className="object-contain h-9 w-auto" />
					</a>
					{/* Desktop nav links */}
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="hidden lg:block text-[11px] uppercase tracking-[1.5px] font-semibold text-[#2b2b2b] hover:text-[#C62026] transition-colors duration-150"
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Center: Icons */}
				<div className="hidden lg:flex items-center gap-2">
					<button
						onClick={() => setSearchOpen(v => !v)}
						aria-label="Search"
						className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#f5f5f5] text-[#2b2b2b] hover:text-[#C62026] transition-all duration-150"
					>
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none">
							<circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
							<path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
					</button>
					<a href="/account" aria-label="My Account" className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#f5f5f5] text-[#2b2b2b] hover:text-[#C62026] transition-all duration-150">
						<svg width="17" height="17" viewBox="0 0 24 24" fill="none">
							<circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
							<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
					</a>
					<button aria-label="Cart" className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#f5f5f5] relative text-[#2b2b2b] hover:text-[#C62026] transition-all duration-150">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
							<path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
							<path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
					</button>
				</div>

				{/* Right: Logo (desktop) + Mobile toggle */}
				<div className="flex items-center gap-4">
					<a href="/" className="hidden lg:flex items-center shrink-0 py-2">
						<Image src="/logo.png" alt="U-Heard logo" width={140} height={48} priority className="object-contain h-11 w-auto" />
					</a>

					{/* Mobile menu toggle */}
					<Sheet open={open} onOpenChange={setOpen}>
						<Button size="icon" variant="outline" className="lg:hidden border-[#e0e0e0]">
							<MenuToggle
								strokeWidth={2.5}
								open={open}
								onOpenChange={setOpen}
								className="size-6"
							/>
						</Button>
						<SheetContent
							className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
							showClose={false}
							side="left"
						>
							{/* Mobile logo */}
							<div className="flex items-center px-4 pt-6 pb-4 border-b" style={{ background: '#C62026' }}>
								<Image src="/logo.png" alt="U-Heard" width={100} height={34} className="object-contain h-8 w-auto brightness-0 invert" />
							</div>

							<div className="grid gap-y-1 overflow-y-auto px-4 pt-4 pb-5">
								{links.map((link) => (
									<a
										key={link.label}
										onClick={() => setOpen(false)}
										className={buttonVariants({
											variant: 'ghost',
											className: 'justify-start text-[13px] uppercase tracking-[1px] font-semibold text-[#2b2b2b] hover:text-[#C62026]',
										})}
										href={link.href}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter>
								<a href="/account" className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#434343]">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none">
										<circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
										<path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									My Account
								</a>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>

			{/* Search dropdown */}
			{searchOpen && (
				<div className="border-t border-[#e0e0e0] bg-white">
					<div className="mx-auto max-w-7xl px-6 py-4">
						<div className="relative">
							<input
								autoFocus
								type="text"
								placeholder="Search candles, scents, collections..."
								className="w-full border-b border-[#c0c0c0] pb-2 pr-8 text-[14px] text-[#2b2b2b] placeholder-[#8f8f8f] focus:outline-none focus:border-[#C62026] transition-colors bg-transparent"
							/>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
