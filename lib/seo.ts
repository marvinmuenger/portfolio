import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'marvin ─ developer';
	const description = "Hey 👋 I'm Marvin, a developer";

	return {
		title,
		description,
		canonical: `https://marvinmuenger.ch/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'marvin',
			url: `https://marvinmuenger.ch/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: '/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
