/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en", "tr"],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "tr",
  },
  ...nextConfig
};
