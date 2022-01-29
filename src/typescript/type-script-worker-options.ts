import type { TypeScriptVueExtensionOptions } from './extension/vue/type-script-vue-extension-options';
import type { TypeScriptConfigOverwrite } from './type-script-config-overwrite';
import type { TypeScriptDiagnosticsOptions } from './type-script-diagnostics-options';

type TypeScriptWorkerOptions = {
  memoryLimit?: number;
  configFile?: string;
  configOverwrite?: TypeScriptConfigOverwrite;
  context?: string;
  build?: boolean;
  mode?: 'readonly' | 'write-tsbuildinfo' | 'write-dts' | 'write-references';
  diagnosticOptions?: Partial<TypeScriptDiagnosticsOptions>;
  extensions?: {
    vue?: TypeScriptVueExtensionOptions;
  };
  profile?: boolean;
  typescriptPath?: string;
};

export { TypeScriptWorkerOptions };
