import { definePlugin } from '@crmd-quote-manager/sdk';

import { sharedLibFunction } from './sharedlib.ts';

const examplePlugin = definePlugin({
	message: 'Load',
	execute(context) {
		sharedLibFunction();
	},
});

export default {
	Plugins: [examplePlugin],
};
