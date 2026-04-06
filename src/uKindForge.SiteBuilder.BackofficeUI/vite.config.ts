import { defineConfig, PluginOption } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export const plugins: PluginOption[] = [
	viteStaticCopy({
		targets: [
			{
				src: 'src/umbraco-package.json',
				dest: '.', // outDir
			},
			{
				src: 'src/assets/*',
				dest: './assets',
			}
		]
	}),
];

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: "./src/index.ts", // input file
			formats: ['es'],
			fileName: () => 'ukindforge-sitebuilder-backofficeui.js', // output file
		},
		emptyOutDir: true,
		sourcemap: true,
		outDir: '../uKindForge.SiteBuilder.Web/App_Plugins/uKFSB',
		rollupOptions: {
			external: [/^@umbraco/],
		},
	},
	base: '/App_Plugins/uKindForge.PropertyEditors/',
	plugins
});
