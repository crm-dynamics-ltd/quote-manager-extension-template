import * as esbuild from 'esbuild';
import { cleanPlugin } from 'esbuild-clean-plugin';

await esbuild.build({
	entryPoints: ['src/**/*.plugin.ts'],
	plugins: [cleanPlugin()],
	outdir: 'dist',
	format: 'esm',
	metafile: true,
	bundle: true,
	minify: true,
});
