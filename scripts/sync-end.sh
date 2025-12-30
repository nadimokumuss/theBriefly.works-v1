#!/bin/bash

# Renk kodları
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo ""
echo -e "${GREEN}📤 GitHub'a Gönderme İşlemi Başlatılıyor...${NC}"
echo ""

# Mevcut branch'i al
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "📍 Mevcut branch: ${YELLOW}${CURRENT_BRANCH}${NC}"
echo ""

# Değişiklik var mı kontrol et
if [[ -z $(git status -s) ]]; then
    echo -e "${YELLOW}ℹ️  Commit edilecek değişiklik bulunamadı.${NC}"
    echo ""
    exit 0
fi

# Değişiklikleri göster
echo -e "${BLUE}📋 Değişiklikler:${NC}"
git status -s
echo ""

# Commit mesajı iste
echo -e "${YELLOW}💬 Commit mesajı girin (Enter = otomatik mesaj):${NC}"
read -r COMMIT_MSG

# Eğer mesaj boşsa otomatik mesaj oluştur
if [[ -z "$COMMIT_MSG" ]]; then
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
    COMMIT_MSG="Update: $TIMESTAMP"
    echo -e "${YELLOW}Otomatik mesaj kullanılıyor: ${COMMIT_MSG}${NC}"
fi

# Stage all changes
echo ""
echo -e "${GREEN}📦 Değişiklikler stage ediliyor...${NC}"
git add -A

# Commit
echo -e "${GREEN}💾 Commit yapılıyor...${NC}"
git commit -m "$COMMIT_MSG"

# Push
echo ""
echo -e "${GREEN}🚀 GitHub'a push ediliyor...${NC}"
git push origin "$CURRENT_BRANCH"

echo ""
echo -e "${GREEN}✅ Başarıyla gönderildi!${NC}"
echo -e "${GREEN}Diğer bilgisayarda ${YELLOW}npm run sync-start${GREEN} komutunu çalıştırmayı unutmayın.${NC}"
echo ""
