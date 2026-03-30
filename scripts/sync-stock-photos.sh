#!/usr/bin/env bash
# Synchronise les photos stock depuis Portfolio/PicFolder vers public/stock-photos/
# Usage : npm run sync:photos
#         PIC_FOLDER=/chemin/vers/PicFolder npm run sync:photos

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PIC="${PIC_FOLDER:-$ROOT/../PicFolder}"
DEST_TATTOO="$ROOT/public/stock-photos/tattoo-piercing"
DEST_SALON="$ROOT/public/stock-photos/salon-coiffure"
DEST_BOUL="$ROOT/public/stock-photos/boulangerie"

die() {
  echo "sync-stock-photos: $*" >&2
  exit 1
}

[[ -d "$PIC" ]] || die "dossier introuvable : $PIC (définir PIC_FOLDER si besoin)"

mkdir -p "$DEST_TATTOO" "$DEST_SALON" "$DEST_BOUL"

if [[ -d "$PIC/TattooPiercing" ]]; then
  rsync -a "$PIC/TattooPiercing/" "$DEST_TATTOO/"
  echo "→ TattooPiercing → public/stock-photos/tattoo-piercing/"
else
  echo "(!) absent : $PIC/TattooPiercing"
fi

if [[ -d "$PIC/SalonDeCoiffure" ]]; then
  rsync -a "$PIC/SalonDeCoiffure/" "$DEST_SALON/"
  echo "→ SalonDeCoiffure → public/stock-photos/salon-coiffure/"
else
  echo "(!) absent : $PIC/SalonDeCoiffure"
fi

if [[ -d "$PIC/Boulangerie" ]]; then
  rsync -a "$PIC/Boulangerie/" "$DEST_BOUL/"
  echo "→ Boulangerie → public/stock-photos/boulangerie/"
else
  echo "(!) absent : $PIC/Boulangerie"
fi

# Nom long → URL stable (référencé dans le code)
TP_SRC="$DEST_TATTOO/Thomas-Pineiro-tattoo-@thomaspineiro-5-e1692612372711.webp"
if [[ -f "$TP_SRC" ]]; then
  mv -f "$TP_SRC" "$DEST_TATTOO/thomas-pineiro-tattoo.webp"
  echo "→ renommé : thomas-pineiro-tattoo.webp"
fi

# Espace dans le nom → tiret (évite les URLs cassées)
if [[ -f "$DEST_SALON/a propo1.jpeg" ]]; then
  cp -f "$DEST_SALON/a propo1.jpeg" "$DEST_SALON/a-propo1.jpeg"
  rm -f "$DEST_SALON/a propo1.jpeg"
  echo "→ normalisé : a-propo1.jpeg"
fi

echo "OK — stock photos à jour."
