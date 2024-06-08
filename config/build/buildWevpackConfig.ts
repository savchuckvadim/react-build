import webpack from 'webpack';
import { buildDevserver } from './buildDevserver';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildMode, BuildOptions } from './types/types';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
// import type { Configuration } from "webpack";

export function buildWebpack(
    options: BuildOptions
): webpack.Configuration {
    const isDev = options.mode === 'development'

    return {

        mode: options.mode ?? 'development' as BuildMode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),

        module: { rules: buildLoaders(options) },
        resolve: buildResolvers(options),
        // https://webpack.js.org/configuration/devtool/
        devtool: isDev
            ? 'eval-source-map'
            : 'source-map', //'nosources-source-map',
        devServer: isDev ? buildDevserver(options) : undefined
    }

}