/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx'
import { hostname } from 'os';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-cdn.inc.com',
        port: '',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'startupsmagazine.co.uk',
        port: '',
        pathname: '/sites/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // revalidate: {
  //   paths: [
  //     {
  //       path: '/', // Path to the records page
  //       revalidate: 60, // Revalidate every 60 seconds
  //     },
  //   ],
  // },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
