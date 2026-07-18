/**
 * Prépare les assets du site à partir des fichiers crawlés dans /infos.
 * Usage : node scripts/prepare-assets.mjs
 */
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const crawled = path.join(root, "infos", "images", "crawled");
const photos = path.join(root, "infos", "images", "photos");
const publicImages = path.join(root, "public", "images");
const appDir = path.join(root, "app");

await mkdir(publicImages, { recursive: true });

// 1. Logos — la variante -2 est jaune+bleu (fonds clairs), logo-ouine1-1 est
// jaune+blanc (fonds sombres uniquement)
await copyFile(
  path.join(crawled, "logo-ouine-distribution-2.webp"),
  path.join(publicImages, "logo-ouine.webp"),
);
await copyFile(
  path.join(crawled, "logo-ouine1-1.webp"),
  path.join(publicImages, "logo-ouine-dark-bg.webp"),
);
await copyFile(
  path.join(crawled, "logo-mufeed.png"),
  path.join(publicImages, "logo-mufeed.png"),
);

// 2. Photos (recompression légère)
const photoJobs = [
  ["food-spread.jpg", "hero-food.jpg", 1600],
  ["almonds.jpg", "almonds.jpg", 1200],
  ["grocery.jpg", "grocery.jpg", 1400],
  ["warehouse.jpg", "warehouse.jpg", 1200],
];
for (const [srcName, destName, width] of photoJobs) {
  await sharp(path.join(photos, srcName))
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(path.join(publicImages, destName));
}

// 3. Favicon + apple icon depuis l'avatar carré
const avatar = path.join(crawled, "logo-avatar-ouine-distribution.webp");
await sharp(avatar).resize(512, 512).png().toFile(path.join(appDir, "icon.png"));
await sharp(avatar).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));

// 4. Image OpenGraph 1200×630 : fond blanc, logo centré, liseré marque
const logoBuffer = await sharp(path.join(crawled, "logo-ouine-distribution-2.webp"))
  .resize({ width: 860 })
  .toBuffer();
const logoMeta = await sharp(logoBuffer).metadata();

const yellowBar = await sharp({
  create: { width: 1200, height: 14, channels: 4, background: "#FDC217" },
})
  .png()
  .toBuffer();
const blueBar = await sharp({
  create: { width: 1200, height: 14, channels: 4, background: "#30539F" },
})
  .png()
  .toBuffer();

await sharp({
  create: { width: 1200, height: 630, channels: 4, background: "#FBFAF7" },
})
  .composite([
    { input: logoBuffer, left: Math.round((1200 - 860) / 2), top: Math.round((630 - logoMeta.height) / 2) },
    { input: blueBar, left: 0, top: 602 },
    { input: yellowBar, left: 0, top: 616 },
  ])
  .png()
  .toFile(path.join(root, "public", "og.png"));

console.log("Assets prêts : logos, photos, icônes, og.png");
