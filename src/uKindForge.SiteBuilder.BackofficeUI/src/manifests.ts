// properties editor
import { manifests as togglePlusManifests } from './packages/property-editor/toggle-plus/manifests';
import { manifests as themeManifests } from './packages/property-editor/themeSettings/manifests';

// collection
import { manifests as themesCollectionManifests } from './packages/collection/themes/manifests';

// block preview
import { manifests as richTextBlockManifests } from './packages/block/rich-text/manifests';
import { manifests as buttonBlockManifests } from './packages/block/button/manifests';

// dashboard

export const manifests: Array<UmbExtensionManifest> = [
	// properties editor
	...togglePlusManifests,
	...themeManifests,

	// dashboard

	// collection
	...themesCollectionManifests,

	// block preview
	...richTextBlockManifests,
	...buttonBlockManifests
];
