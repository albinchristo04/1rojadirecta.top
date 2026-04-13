#!/usr/bin/env bash
set -euo pipefail

SITE="https://1rojadirecta.top"
SITEMAP="${SITE}/sitemap.xml"

echo "[ping] Pinging Google..."
curl -sf "https://www.google.com/ping?sitemap=${SITEMAP}" || echo "Google ping failed (non-critical)"

echo "[ping] Pinging Bing..."
curl -sf "https://www.bing.com/ping?sitemap=${SITEMAP}" || echo "Bing ping failed (non-critical)"

echo "[ping] Done."
