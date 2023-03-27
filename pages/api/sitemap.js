import { SitemapStream, streamToPromise } from "sitemap";
const { Readable } = require("stream");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    // An array with your links
    const links = [
    ];

    // Add other pages
    const pages = ["/before-after",
        "/about",
      ];

    pages.map((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
    fs.writeFileSync('public/sitemap.xml', xmlString)
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};