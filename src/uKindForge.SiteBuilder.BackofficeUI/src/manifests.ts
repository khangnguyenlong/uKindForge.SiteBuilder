// properties editor
import { manifests as togglePlusManifests } from './packages/property-editor/toggle-plus/manifests';

// theme settings
import { manifests as colorSettingsManifests } from './packages/property-editor/themeSettings/colorSettings/manifests';
import { manifests as typographySettingsManifests } from './packages/property-editor/themeSettings/typographySettings/manifests';
import { manifests as styleSettingsManifests } from './packages/property-editor/themeSettings/styleSettings/manifests';

// collection
import { manifests as themesCollectionManifests } from './packages/collection/themes/manifests';

// block preview
import { manifests as richTextBlockManifests } from './packages/block/rich-text/manifests';
import { manifests as buttonBlockManifests } from './packages/block/button/manifests';

// dashboard

export const manifests: Array<UmbExtensionManifest> = [
	// properties editor
	...togglePlusManifests,
	...colorSettingsManifests,
	...typographySettingsManifests,
	...styleSettingsManifests,

	// dashboard

	// collection
	...themesCollectionManifests,

	// block preview
	...richTextBlockManifests,
	...buttonBlockManifests
];
