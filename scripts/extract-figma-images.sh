#!/bin/bash
set -e

echo "Wen Portfolio — Figma Image Extractor"
echo "Place Porfolio.fig and Game_UXR.fig in the project root before running."
echo ""

mkdir -p public/images/portfolio public/images/game-uxr /tmp/wen_figma_extract

# ── Portfolio.fig ─────────────────────────────────────────────────────────────
if [ -f "Porfolio.fig" ]; then
  echo "Extracting Porfolio.fig..."
  unzip -o Porfolio.fig -d /tmp/wen_figma_extract/portfolio
  SRC=/tmp/wen_figma_extract/portfolio/images

  cp "$SRC/b8e75f09d00d8f5ea1f080a3e62e83d705f8e6e8" public/images/portfolio/vandewiele-team.jpg
  cp "$SRC/99811ce1f08f92544dd795a714acfc99f1668430" public/images/portfolio/vandewiele-desk.jpg
  cp "$SRC/f0314f3cd0e89a1a8dbd45242b79535b7968f9a7" public/images/portfolio/little-big-futures-exhibit.jpg
  cp "$SRC/5c518036575e02b862562f3b0169746fcfdea75e" public/images/portfolio/mosaik-team.jpg
  cp "$SRC/026d349773943a7f3a563b535d6ad8a2bf3f68887" public/images/portfolio/romi-screens.png 2>/dev/null || \
  cp "$SRC/26d349773943a7f3a563b535d6ad8a2bf3f68887" public/images/portfolio/romi-screens.png
  cp "$SRC/027afbcb200a28b944cd2ca609ac2b0490960cab" public/images/portfolio/research-cardsort.jpg
  cp "$SRC/5476dc48ecc34a40e4648f5c17afb0c296c72ec3" public/images/portfolio/m2m-storyboard.jpg
  cp "$SRC/a9ca037d363bbdc47022bb59d08f2b6ae0ca6f1f" public/images/portfolio/romi-training.png

  echo "✓ Portfolio images extracted to public/images/portfolio/"
  echo ""
  echo "NOTE: No personal/about photo was found in the .fig files."
  echo "      Add your own photo manually as: public/images/about-hero.jpg"
else
  echo "Porfolio.fig not found — skipping"
fi

# ── Game_UXR.fig ──────────────────────────────────────────────────────────────
if [ -f "Game_UXR.fig" ]; then
  echo ""
  echo "Extracting Game_UXR.fig..."
  unzip -o Game_UXR.fig -d /tmp/wen_figma_extract/game
  SRC=/tmp/wen_figma_extract/game/images

  cp "$SRC/20f5ac28c9c140b8a58bf8e7c0769eecf5987de6" public/images/game-uxr/forspoken-hero.png
  cp "$SRC/505b96e0f376542b63edd347e0a04e6286f9cd10" public/images/game-uxr/forspoken-gameplay-1.png
  cp "$SRC/16ee1be1c016229283f2108729ca2e72042408bb" public/images/game-uxr/forspoken-gameplay-2.png
  cp "$SRC/581eb2b9d9003709e20533ad1f4ff8ad4c175345" public/images/game-uxr/witcher3.png
  cp "$SRC/7776470dd2e0bc65634ea50c9ff372f96f4a0a95" public/images/game-uxr/lost-soul-aside.png

  echo "✓ Game UXR images extracted to public/images/game-uxr/"
else
  echo "Game_UXR.fig not found — skipping"
fi

echo ""
echo "All done. Run 'npm run dev' to see images in the site."
