# Mídia de origem

Arquivos brutos que **não** vão para o deploy. Tudo em `public/` é copiado
para a imagem Docker e servido publicamente — o `mobile.MP4` original tem
42,4 MB, mais de mil vezes o peso da página inteira, e estava lá dentro.

## mobile.MP4
Gravação de tela do app no simulador do iPhone. HEVC, 1440×2560, 60fps, 46s.

Dele saem, por `ffmpeg`, os arquivos em `public/video/`:

    CROP="crop=1095:2192:171:345,scale=720:-2,fps=30"

    ffmpeg -ss 4 -t 10 -i mobile.MP4 -vf "$CROP" \
      -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 27 -preset medium \
      -movflags +faststart -an ../public/video/rovee-app.mp4

    ffmpeg -ss 4 -t 10 -i mobile.MP4 -vf "$CROP" \
      -c:v libvpx-vp9 -crf 38 -b:v 0 -deadline good -cpu-used 3 -an \
      ../public/video/rovee-app.webm

    ffmpeg -ss 4.2 -i mobile.MP4 -vf "crop=1095:2192:171:345,scale=720:-2" \
      -frames:v 1 -q:v 4 ../public/video/rovee-app-poster.jpg

O recorte tira a janela do simulador e a barra de status — era ali que
ficava o banner DEBUG do Flutter.

Resultado: 42,4 MB → 452 KB (mp4) + 406 KB (webm) + 76 KB (poster).

## Ao regravar
- rodar em release (`flutter run --release`) para não sair o banner DEBUG
- gravar sem cursor do mouse na tela
- popular a conta antes: as telas atuais mostram "R$ 0,00 separados" e
  "0 transações", o que contradiz o que a landing promete
