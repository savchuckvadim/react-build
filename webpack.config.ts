import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWevpackConfig';
import path from 'path';
import { APP, BuildMode, BuildPaths } from './config/build/types/types';

interface Envariables {
  mode: BuildMode
  port: number
  analyzer?: boolean
  inBitrix?: boolean
  app?: APP
}

export default (env: Envariables) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    scripts: path.resolve(__dirname, 'config/build/scripts'),
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    inBitrix: env.mode == 'production',
    app: env.app ?? APP.CALLINGS
  });
  return config;
};



// export default config;