import assert from 'node:assert';
import test from 'node:test';

import { sharedLibFunction } from './sharedlib.ts';

test('Example test', () => {
	assert.doesNotThrow(() => sharedLibFunction());
});
