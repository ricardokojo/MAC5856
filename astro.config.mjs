// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://ricardokojo.github.io',
	base: '/MAC5856-2026',
	integrations: [mdx(), sitemap()],
});
