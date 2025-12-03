//import type { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { umbExtensionsRegistry } from '@umbraco-cms/backoffice/extension-registry';
import { manifests } from './manifests.js';

//export const onInit: UmbEntryPointOnInit = (host, extensionRegistry) => {
//    extensionRegistry.registerMany(manifests);
//};

umbExtensionsRegistry.registerMany(manifests);