import type { IApi } from '@/types';
import { getSchemas } from './schema';

export default (api: IApi) => {
  const configDefaults: Record<string, any> = {
    resolve: {
      docDirs: ['docs'],
      entityDirs: [{ type: 'component', dir: 'src' }],
      codeBlockMode: 'active',
    },
    themeConfig: {},
  };

  const schemas = getSchemas();
  for (const key of Object.keys(schemas)) {
    const config: Record<string, any> = {
      schema: schemas[key] || ((joi: any) => joi.any()),
    };
    if (key in configDefaults) {
      config.default = configDefaults[key];
    }
    api.registerPlugins([
      {
        id: `virtual: config-${key}`,
        key: key,
        config,
      },
    ]);
  }
};
