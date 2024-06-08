
import { Configuration, DefinePlugin } from "webpack";
import webpack from 'webpack';
import path from "path";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import WebpackShellPluginNext from "webpack-shell-plugin-next";





export function buildPlugins({
    mode,
    paths,
    analyzer,
    app,
    inBitrix,

}: BuildOptions): Configuration['plugins'] {
    const isDev = mode === 'development'
    const isProd = mode === 'production'
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            title: isDev ? 'Development' : 'Production',
            favicon: path.resolve(paths.public, 'favicon.ico'),
            scriptLoading: 'defer'

        }),

        new MiniCssExtractPlugin(
            {
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css",
            }
        ),
        new DefinePlugin({
            __APP__: JSON.stringify(app),
            __IN_BITRIX__: JSON.stringify(inBitrix),
            __ENV__: JSON.stringify(mode),
            __IS_PROD__: JSON.stringify(isProd),
        }),


    ];



    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin()

        )
        // Выносит проверку типов в отдельный процесс связан с
        // tsLoader transpileOnly
        plugins.push(
            new ForkTsCheckerWebpackPlugin()
        ),
        plugins.push(
            new ReactRefreshWebpackPlugin()
        )
    }
    if (isProd) {

        plugins.push(
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(paths.public, 'btx-php'), to: paths.output },
                ],
            }),
        )

        plugins.push(
            new WebpackShellPluginNext({
                onBuildStart: {
                    scripts: ['echo "nmbrsdntl build start"'],
                    blocking: true,
                    parallel: false
                },
                onBuildEnd: {
                    scripts: [`ts-node ${paths.scripts}/update-php.ts`],
                    blocking: false,
                    parallel: true
                }
            })
        )
    }

    // }
    if (analyzer) {

        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }
    return plugins
}