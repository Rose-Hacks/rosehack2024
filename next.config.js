/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/participants",
        permanent: true,
      },
      {
        source: "/user",
        destination: "/user/dashboard",
        permanent: true,
      },
      {
        source: "/form",
        destination: "/form/participant",
        permanent: true,
      },
      {
        source: "/donate",
        destination:
          "https://crowdfunding.ucr.edu/o/university-of-california-riverside/i/ucrcrowdfunding/s/winc-fy24",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
};

module.exports = nextConfig;
