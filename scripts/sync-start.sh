#!/bin/bash

# Renk kodları
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo ""
echo -e "${GREEN}🔄 GitHub Senkronizasyonu Başlatılıyor...${NC}"
echo ""

# Mevcut branch'i al
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "📍 Mevcut branch: ${YELLOW}${CURRENT_BRANCH}${NC}"

# Local değişiklikler var mı kontrol et
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Uyarı: Commit edilmemiş değişiklikler var!${NC}"
    echo ""
    git status -s
    echo ""
    echo -e "${RED}Önce değişikliklerinizi commit edin veya stash yapın.${NC}"
    echo -e "Komut: ${YELLOW}npm run sync-end${NC}"
    exit 1
fi

# GitHub'tan son değişiklikleri çek
echo -e "${GREEN}⬇️  GitHub'tan son değişiklikler çekiliyor...${NC}"
git fetch origin

# Local ile remote arasındaki farkı kontrol et
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse @{u} 2>/dev/null)
BASE=$(git merge-base @ @{u} 2>/dev/null)

if [ "$LOCAL" = "$REMOTE" ]; then
    echo -e "${GREEN}✅ Zaten güncelsiniz! Çalışmaya başlayabilirsiniz.${NC}"
    echo ""
elif [ "$LOCAL" = "$BASE" ]; then
    echo -e "${YELLOW}📥 Yeni değişiklikler bulundu, pull yapılıyor...${NC}"
    git pull origin "$CURRENT_BRANCH"
    echo ""
    echo -e "${GREEN}✅ Senkronizasyon tamamlandı! Çalışmaya başlayabilirsiniz.${NC}"
    echo ""
elif [ "$REMOTE" = "$BASE" ]; then
    echo -e "${YELLOW}⚠️  Local'de push edilmemiş değişiklikler var.${NC}"
    echo -e "Komut: ${YELLOW}npm run sync-end${NC}"
    echo ""
else
    echo -e "${RED}❌ CONFLICT! Local ve remote farklı commitlere sahip.${NC}"
    echo -e "${RED}Manuel müdahale gerekiyor.${NC}"
    echo ""
    exit 1
fi
