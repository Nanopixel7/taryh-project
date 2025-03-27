"use strict";

spanToCloseInfo.onclick = function hideInfo() {
  darken.style.top = "-150%";
  darken.style.transform = "scale(0.5)";
};
function openGame(id, item, text) {
  darken.style.top = "0";
  darken.style.transform = "scale(1)";
  idForInfo.innerHTML = id;
  itemForInfo.innerHTML = item;
  textForInfo.innerHTML = `${text}`;
}

const chapters = {
  chapter1: {
    id: "I. Türkmen milli oýunlarynyň görnüşleri",
    items: [
      "Aýterek - günterek",
      "Ogar - ogar",
      "Töňňe - töňňe",
      "Gubagazlar",
      "Gözdaňdy",
      "Altyçöp",
      "Düzme",
      "Kerwen",
      "Alany ýanynda",
      "Guýruk tutdy",
      "Ortada durmak",
      "Pişik - pişik",
      "Parran",
      "Guşakgoýdy",
      "Tor",
      "Ýaglyga towusmak",
      "Urup gaçdy",
      "Çopan bilen möjek",
      "Süňk - süňk",
      "Elek - çelek",
      "Kyrk göjek",
      "Jemile",
      "Agsak towuk",
      "Agsak durna",
      "Uran - urdy",
      "Awçylar we ördekler",
      "Topargaçdy",
      "Ýaranyma - ýaranym",
      "Düzzüm",
      "Ýeditop",
      "Ýüpek - ýüpek",
      "Guşakgapdy",
      "Kepbämgurdy",
      "Eşek mündi",
      "Çürrükkesdi",
      "Mergenlik",
      "Çekişme",
      "Haýat ýykyldy",
      "Eşegarka",
      "Öz baýdagyňy tap!",
      "Bukuldym",
      "Görüp - gaçdy",
      "Basyrdy",
      "Gizlenpeçek",
      "Garaňy gördüm - paňk",
      "Tarapma - tarap bukuldym",
      "El degirdi",
      "Eliňi uzat",
      "Arany kesip geç",
      "Dony çöz",
      "Aýagyňy ýerden üz",
      "Ýeke aýakda el degirdi",
      "Gurbagalar",
    ],
    texts: [
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýunçylar deň sanda iki topara bölünip, olar biribirinden 10–15 metr uzaklykda, biribiriniň elinden tutup, ýüzbeýüz durýarlar.
Oýunçynyň sany 20–30a çenli bolup biler. Bije atyşyp, haýsy toparyň oýny birinji başlamalydygyny belli edýärler.
Oýnuň oýnalyşy. Oýny birinji başlaýan toparyň oýunçylarynyň hemmesi bir ses bilen “Aýterek” diýşip, ikinji toparyň oýunçylaryna ýüzlenýärler. Ikinji toparyň oýunçylary “Günterek” diýşip, jogap berýärler.
Soň birinji topar: “Bizden size kim gerek?” diýşip, olara ýüzlenýärler. Ikinji topar: “Saýrap duran dil gerek” diýşip jogap berýärler.
Birinji topar: “Dilleriň haýsy gerek?” diýýär.
Ikinji topar birinji toparyň oýunçylarynyň biriniň adyny tutup: “Serdar gerek” diýşip çagyrýarlar. Serdar atly oýunçy bat bilen ylgap gelip,
ikinji toparyň oýunçylarynyň elleriniň arasyny üzüp geçmäge synanyşýar.
11
Egerde oýunçylaryň elleriniň arasyny üzüp bilse, onda ol üzen
oýunçylarynyň birini öz toparyna alyp gidýär. Eger Serdar oýunçylaryň
elleriniň arasyny üzüp bilmese, onda ol oýny şol toparyň hatarynda
dowam edýär. Oýny başlamak gezegi ikinji topara geçýär. Netijede,
haýsy toparyň oýunçylarynyň sany az bolsa şol toparyň utuldygy bolýar.
Oýnuň başga görnüşlerinde aşakdaky ýaly hem bolup biler:
1. Aýdylyşýan sözleri her toparyň bir oýunçysy aýdyp biler.
2. Ady tutulyp çagyrylan oýunçy elleriniň arasyny üzüp bilmese, onda
şol ýerde bir oýunçynyň arkasynda durup, “olja” bolup galýar.
3. Ady tutulyp, çagyrylan oýunçy elleriniň arasyny üzüp bilse, onda bir
oýunçyny öz toparyna äkidip, arkasynda durzup, “olja” edip alýar.
4. Her toparyň oýunçylary birbada “olja” alyp bilerler we öz “oljalaryny” boşadybam bilerler.
Oýnuň düzgünleri:
1. Ady tutulyp çagyrylan oýunçy garşydaş toparyň oýunçylarynyň
elleriniň arasyny islän ýerinden üzüp biler.
2. Mümkin boldugyça toparlaryň oýunçylarynyň hemmesiniň ady tutulyp çagyrylmalydyr. Sebäbi munuň özi oýunçylaryň hemmesinde
uly gyzyklanma döredýär, oýna işeňňir gatnaşýar, höwes oýarýar`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 10dan 40a çenli oýunçy gatnaşyp biler.
Oýunçylaryň islegleri boýunça ýada bije atyşyp, sanawaç aýdyşyp,
möjek saýlanýar. Möjek saýlanlaryndan soň oýunçylar biribirleriniň
ellerinden tutup, tegelenip durýarlar, möjek bolsa tegelegiň ortasynda
uklan bolup ýatýar.
Oýnuň oýnalyşy. Oýunçylar her hili hereketler edip, aýdym
aýdyşyp, tegelegi barha gysyp, möjege golaýlaşýarlar. Oňa ellerini degirmäge synanyşýarlar. Oýunçylaryň elleri möjege degeninden soň, möjek
çalt ýerinden turup, oýunçylaryň yzyndan kowalap, tutmaga synanyşýar.
Möjek oýunçylaryň birine elini degrip tutsa, onda tutulan oýunçy möjek
bolýar. Eger-de tutup bilmese, onda oýun täzeden dowam edýär.
12
Oýnuň düzgünleri. Oýun ýolbaşçynyň rugsady bilen başlanýar.
Möjek oýunçylary diňe çäklendirilen ýere çenli kowalap, tutup biler.
Oýnuň başga görnüşlerinde aşakdaky ýaly hem bolup biler:
1. Möjek birbada birnäçe oýunçyny kowalap, el degrip tutup biler. Tutulan oýunçylar oýundan çykarylýar. Haýsy möjek oýunçyny köp
tutsa, şol möjege çalt, çalasyn we batyr möjek diýip baha berilýär.
2. Oýunçylaryň sany köp bolsa, onda oýny iki tegelekde geçirmek
bolar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20den 30a çenli oýunçy gatnaşyp biler. Oýny oýnamak üçin giňligi 5–6 metr bolan tegelek çyzyk çyzylýar. Şol tegelek çyzyk pellehana hasaplanýar. Pellehananyň ölçegi
oýunçylaryň sanyna görä üýtgäp biler. Oýunçylar bije atmak bilen bir
oýunçyny töňňe saýlaýarlar. Galan oýunçylar döwçi bolýarlar. Olar
hem özlerine öňbaşçy saýlaýarlar.
13
Oýnuň oýnalyşy. Töňňe bolan pellehanadan birneme daşlaşyp,
çommalyp, kellesini egip, eli bilen gözüni tutup tegelegiň içinde durýarlar. Öňbaşçy öz döwçülerine: “Ýörüň, çöpleme çöplemäge gideliň!” diýip, olara ýüzlenýär. Döwçüler töwerege ýaýrap, eglipgalyp,
çöpleme çöplän bolýarlar. Çöpleme çöpläp ýören döwçiniň biri töňňäniň üstünden baryp: “Men töňňe tapdym, geliň göterişiň” diýip,
beýleki döwçüleri çagyrýar. Döwçüleriň hemmesi gelip, töňňäniň
elinden, aýagyndan tutup, göterip, pellehana getirýärler. Döwçüler
töňňäni pellehanada goýup, ýenede töwerege ýaýrap töňňeden gözlerini aýyrman, çöpleme çöplän bolýarlar. Döwçüler mazaly töwerege
ýaýranlaryndan soň, töňňe döwçüleri pellehana girizmän, kowalap
tutmaga synanyşýar. Eger töňňe döwçüleriň birini tutsa, tutulan töňňe
bolýar we oýun täzeden dowam edýär. Döwçüleriň hiç biri hem töňňä
tutdurman, pellehana girseler, onda öňki töňňe ýenede töňňeligine
galýar.
Oýnuň düzgünleri:
1. Töňňäni göterip, pellehana eltmäge hemme döwçüler gatnaşmaly.
Eger ýer bolmasa, onda töňňäni ýere gaçyrman, beýleki döwçüler
bilen çalyşmaly.
2. Töňňe getirilen mahaly hiç hili garşylyk görkezmeli däl.
3. Töňňäniň tutan döwçüsi oňa boýun egmeli, bidüzgünçilik etmeli
däl.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 10dan 30a çenli oýunçy gatnaşyp biler.
Oýunçylar bije atmak bilen bir oýunçyny gurt edip saýlaýarlar. Galan oýunçylar gubagazlar bolýarlar. Meýdançanyň ortasynda köpriniň
şekilini çyzmaly. Gurt köpriniň ortasynda durýar, gubagazlar bolsa
meýdançanyň bir çetinde öňbaşçynyň arkasynda yzlyyzyna setire
düzülip durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen, gubagazlar
düzülişip, duran ýerlerinde elleri bilen gazlaryň uçuşyna öýkünip,
“kyrkaw”, “kyrkaw” diýşip, köpriniň ýanyna gelýärler. Şol wagt köprini goraýan gurt olaryň öňünden çykyp, olaryň nirä barýandygyny soraýar. Gubagazlaryň hersi bir şäheriň adyny tutup (Aşgabat, Daşoguz,
Balkanabat we ş.m.), barýan ýerini aýdýar. Soň gubagazlar gurtdan
köprüden geçirmegi haýyş edýärler we gurt köprüden geçirse, barýan
şäherlerinden bir zat getirip bermegi wada edýärler. Diňe şondan soň
gurt olary köprüden geçirýär. Gubagazlar köprüden geçip, meýdançanyň çetine çenli gazlara öýkünişip gidýärler we ýenede yzyna köpriniň ýanyna dolanyp gelýärler. Olary ýenede gurt garşy alýar. Ol
gubagazlardan nireden gelýändigini soraýar. Gubagazlar bolsa öňki
aýdan şäherleriniň adyny tutup, şol ýerden gelýändigini aýdýar. Ondan soň gurt olardan: “Wada eden zatlaryňyzy getirdiňizmi?” diýip
soraýar. Gubagazlar hiç zat getirmändiklerini aýdyp, gurtdan gaçyp,
köprüden geçmäge synanyşýarlar. Gurt olary tutmak üçin kowalap
başlaýar. Eger gurt olaryň birini köprüden geçmänkä tutup bilse, onda
onuň bilen ýerini çalyşýar. Egerde tutup bilmese, onda gurt gurtlugyna galyp, oýun täzeden başlanýar.
15
Oýnuň düzgünleri:
1. Gubagazlaryň hersi bir şäheriň adyny tutup, nirä barýandygyny
gurda aýtmaly.
2. Iki oýunçy (gubagazlar) bir şäheriň adyny aýtmaly däl.
3. Hemme gubagazlar köpriniň üstünden geçmeli.
`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýlerinde oýnalýar. Oýun üçin göz daňar ýaly
arassa ýaglyk, arassa ak kagyz, tegelek çyzar ýaly hek gerekdir.
Oýna taýýarlyk. Meýdançada giňligi 4–5 metr tegelek çyzylýar.
Oýunçylar bije atyşyp, kimiň gözi daňylmalydygyny belli edýärler.
Gözi daňylmaly oýunçy belli bolan soň, oýunçylar tegelegiň daşyna
düzülýärler, gözi daňylgy oýunçy bolsa tegelegiň ortasynda durýar.
Oýnuň oýnalyşy. Oýun ýolbaşçynyň rugsady bilen başlanýar.
Oýunçylaryň hemmesi tegelegiň içine girip, gözi daňlan oýunça ellerini degirýärler. Gözi daňlan oýunçy hem öz gezeginde, elini degirýän
oýunçylary tutmaga synanyşýar. Egerde oýunçylaryň birini tutaýsa,
onda tutulan oýunçy, gözi daňlan oýunçynyň adyny sesini üýtgedip
aýdýar. Gözi daňlan oýunçy ony sesi boýunça tanap, adyny aýtmaly.
Gözi daňlan oýunçy ony sesinden tanap, adyny aýtsa, onda gözdaňy-
16
ny tanalan oýunça berýär. Eger tanap bilmese, onda ýenede öňküsi
ýaly, oýny dowam edýär we beýleki oýunçylary tutmaga synanyşýar.
Oýnuň düzgünleri:
1. Gözi arassa ýaglyk bilen daňmaly. Ýaglygyň aşagynda arassa ak
kagyz goýmak bolar.
2. Gözi daňlan oýunça gödeklik bilen el degirmek bolmaz, diňe
guşaklygyndan ýokarsyna el degirmäge rugsat berilýär.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin uzynlygy bir garyş, ýogynlygy süýem barmakdan ýogyn bolmadyk, uçlary
kütek alty sany çöp we göwrümi uly bolmadyk ýeňil rezin top gerek.
Oýna taýýarlyk. Oýna 10dan 30a çenli oýunçy gatnaşyp biler.
Oýunçylar iki topara bölünip, özlerine öňbaşçy saýlaýarlar. Bije atyşyp,
haýsy toparyň oýna birinji başlamalydygyny anyklaýarlar. Şondan soň iki
toparyň aralygynda 6 sany çöpi biribiriniň üstünde atanak edip goýýarlar. Goýlan çöpleriň her gapdalyndan bir garyş çemesi ölçegde dörtburçluk çyzylýar. Şol dörtburçluk çyzykdan toparyň oýunçylaryna çenli üç
ädim bolmalydyr. Oýunçylaryň durýan ýerleri çyzyk bilen çäklendirilýär.
Oýnuň oýnalyşy. Haýsy toparyň ilkinji başlaýanlygy mälim bolandan soň, öňbaşçynyň görkezmesi boýunça bir oýunçy eline top
alyp, çyzygyň daşynda durup, çyzygyň içindäki çöplere topy zyňyp,
çöpleri çyzykdan çykarmaga synanyşýar. Egerde zyňlan topuň netijesinde alty çöpem çyzygyň daşyna çyksa, onda çöpi çyzykdan çykaran toparyň oýunçylary döwçi, ikinji toparyň oýunçylary bolsa awçy
bolýarlar. Döwçüler çöpleriň hemmesini çyzykdan çykan badyna
meýdançada pytrap, awçylardan gaçyp, top bilen urdurman, pytradan
çöplerini ýenede öňküsi ýaly goýmaga synanyşýarlar. Awçylaram öz
gezeginde meýdança ýaýrap, topy biribirine oklaşyp, döwçüleri top
bilen urjak bolşup we çöpleri goýdurmajak bolşup synanyşmaly. Eger
de döwçüler top bilen urdurman, pytran çöpleri goýsalar, onda şol topar bir utuk gazanýar. Egerde döwçi toparyň oýunçylarynyň biri top
bilen urulsa, onda oýunçy çöpi goýmak hukugyny ýitirýär we oýundan çykarylýar. Awçy toparyň oýunçylary döwçi toparyň oýunçylaryna çöpleri goýdurman, hemme oýunçylaryny top bilen urup bilseler,
onda olar bir utuk gazanýarlar we oýny täzeden başlaýarlar.
Egerde oýny birinji başlan toparyň oýunçysy goýlan çöpleriň
hemmesini topy zyňyp, çyzykdan çykaryp bilmese, onda topy zyňmak gezegi ikinji toparyň oýunçysyna berilýär. Olar hem öz gezeginde topy zyňyp, çöpleriň galanlaryny çyzykdan çykaryp bilmese, onda
ýenede gezek garşydaş toparyňky bolýar. Şeýdip, tä iň soňky çöp
çyzykdan çykýança, toparlaryň oýunçylary gezekligezegine topy zyňyp, çöpi çyzykdan çykarmaga synanyşýarlar.
Oýnuň düzgünleri. Oýunçylar üçin bellenen çyzygy basman,
çyzykdan daşda durup, topy zyňyp, çöpleri dörtburçlukdan çykaryp
bilerler.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýunçylary 10–15 adamdan 2–3 topara bölmek
bolýar. Egerde olaryň sany köp bolsa, toparlaryň oýunçylary biribiriniň bilinden tutup, hatara durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady boýunça, oýny toparyň
oýunçylary öňbaşçynyň yzy bilen başlaýarlar. Olar ýuwaşýuwaşdan
ýörişlerini çaltlaşdyryp, ylgawa geçýärler. Şonuň bilen birlikde öňde
barýan öňbaşçy ugruny birnäçe gezek çalt üýtgedýär. Şeýle ýagdaýa
eýerip bilmän, elini goýberen oýunçy oýundan çykarylýar. Oýun wagt
bilen çäklendirilýär. 3–5 minudyň dowamynda oýunda saklanyp bilen
oýunçylara ýeňijiler diýilýär. Şu oýny toparlaryň arasynda bäsleşik
geçirmek äheňinde oýnamak bolýar.
Oýnuň düzgünleri:
1. Topardaky oýunçylaryň hemmesi öňbaşçynyň hereketine eýermeli.
2. Oýun wagty öňbaşça boýun egmedik oýunçy oýundan çykarylýar.
3. Bäsleşik wagt bilen ölçelýär.
4. Haýsy topar ellerini üzmän, pellehanadan pellehana çalt gidip
gelip, ýerlerinde dursalar, şol topar ýeňiji bolýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýunçylar sanawaç sanaşyp, bije atyşyp, birini
it saýlaýarlar. Galan oýunçylar düýe bolup, özlerine kerweni çeker
ýaly kerwenbaşy belleýärler. Şondan soň düýeler kerweniň yzyndan
biribiriniň bilinden tutuşyp, meýdançanyň bir gyrasynda durýarlar.
Ýarak it bolsa meýdançanyň ortasynda ýatýar. Oýna 10–15 oýunçy
gatnaşýar. Meýdançada pellehanalary aňladýan iki sany garşylyklaýyn çyzyk çyzylýar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen kerwen (obanyň
çetinden) pellehanadan pellehana tarap ýöräp ugraýar, şol wagt meýdançanyň ortasynda ýatan ýarak it kerwene tarap okdurylýar. Kerwenbaşy öz düýelerini ite ýardyrman, ýetdirmän, tutdurman, her dürli hereketler, tilsimler edip, pellehana çenli gaçýar. It kerweniň yzyndan
ylgap, düýeleri tutup, alyp galmaga synanyşýar. Eger it düýeleriň
hemmesini pellehana çenli kerwenbaşydan üzüp, alyp galyp bilse,
onda ilkinji aýrylan düýe it bolýar we oýun täzeden başlanýar. Eger
de it kerwenbaşydan düýeleriň hemmesini aýryp bilmese, onda itligine galyp, oýun ýene-de dowam etdirilýär.
20
Oýnuň düzgünleri:
1. It diňe pellehana çenli kerweni kowalap, düýeleri alyp galyp bilýär.
2. Itiň düýelere eli degse, bölünip, alnyp galyndygydyr.
3. Alnyp galynan düýeler derrew oýundan çykarylýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Meýdançada göni çyzygy aňladýan, birinibirinden 16–18 metr uzaklykda, uzynlygy 18–20 metr ýanaşyk (parallel)
çyzyk geçirilýär. Meýdançanyň ölçegleri oýunçylaryň sanyna görä
üýtgäp biler. Oýna 10dan 30a çenli oýunçy gatnaşyp biler. Oýunçylar iki topara bölünýärler. Olar uzaklykdaky çyzygyň daşynda, ýagny
pellehanalarda durýarlar. Her topar özüne öňbaşçy saýlaýar we bije
atylyp, haýsy toparyň oýna birinji başlamalydygy bellenilýär.
Oýnuň oýnalyşy. Oýny birinji başlaýan toparyň öňbaşçysy bir
oýunçyny hüjümçi belleýär. Garşydaş toparyň öňbaşçysy bolsa, bir
oýunçyny goraýjy edip, meýdançanyň ortasyna çykarýar. Ýolbaşçynyň rugsady bilen hüjümçi öz pellehanasyndan beýleki pellehana go-
21
raýja tutdurman, gidip gelmeli. Egerde goraýjy hüjümçä elini degrip
bilse, onda şol hüjümçi olja edilip alynýar we bellenilen ýerde oturdylýar. Hüjümçiler goraýjy, goraýjylaram hüjümçi bolýarlar. Eger
hüjümçi goraýja tutdurman, pellehanadan pellehana gidip gelse, onda
goraýjylaryň bir oýunçysy olja edilip berilýär. Ol hem ýörite bellenen
ýerde oturdylýar. Oýny hüjümçiler dowam etdirýärler. Oýnuň netijesinde haýsy topar köp olja alsa, şol topar ýeňiji bolýar.
Oýnuň düzgünleri:
1. Hüjümçä oýun meýdançasynyň çäginden çykmak bolmaýar.
2. Eger hüjümçi goraýjydan gaçyp, meýdançadan çyksa, onda ol
olja edilip alynýar.`,
      `Oýnalýan ýeri. Sport meýdançasy ýada sport öýi.
Taýýarlyk. Bu oýna 10dan 40a çenli oýunçy gatnaşyp biler.
Olardan birini möjek saýlaýarlar. Ol tegelegiň merkezinde oturyp, ýalandan uklan bolýar.
Oýnalyş täri. Oýunçylar tegelekden ýöräp, haýsyda bolsa bir aýdyma hiňlenýärler. Soňra tegelegi gysyp, möjege golaýlaşýarlar we oňa
degmäge çalyşýarlar. Möjek duýdansyz bökýär. Oýunçylar gorkup, dürli
tarapa gaçýarlar. Möjek bolsa kimem bolsa birini tutmaga çalyşýar.
Oýnuň düzgünleri:
1. Tutulan oýunçy möjekden gaçmaly däl.
2. Tutulandan soň ol möjek bolýar.
Oýnuň terbiýeçilik ähmiýeti we onuň geçiriliş usulyýeti. Oýun
sahna häsiýetli bolup, ýaşlar tarapyndan oýnalýar. Oýun synçylygy,
ünslüligi, çalasynlygy ösdürmäge ýardam berýär. Oýunda esasy hereketler sazlaşykly ýöremek we çalt ylgamak bolup durýar. Möjege
oýundan çykýan birnäçe oýunçyny tutmaga mümkinçilik berip, şonuň
netijesinde möjekleriň arasynda has köp oýunçylary tutany başarjaň,
çalasyn hasaplap bolýar. Oýnuň ahyrynda bir gezek hem tutulmadyk
oýunçylary bellik etmeli. Oýunçylaryň sany köp bolan halatynda 2–3
tegelekli oýny gurap bolýar. Bu bolsa işjen hereketligi ösdürer.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Meýdançada biribirinden 20–30 metr uzaklykda iki sany garşylyklaýyn çyzyk geçirilýär. Oýna 10dan 30a çenli oýunçy gatnaşyp biler. Oýunçylar sanawaç sanaşyp, bije atyşyp,
bir oýunçyny goraýjy saýlaýarlar. Galan oýunçylar hüjümçi bolýarlar.
Olar bir çyzygyň daşynda ýerleşýärler, goraýjy bolsa iki çyzygyň ortasynda durýar.
Oýnuň oýnalyşy. Ýolbaşçy oýny başlamaga rugsat bereninden
soň, hüjümçiler ýekeýekeden yzlyyzyna sapalak atyp, goraýja tutdurman, beýleki çyzyga baryp gelmäge synanyşýarlar. Goraýjy hem
öz gezeginde gaçyp barýan hüjümçileriň birini tutjak bolýar. E1 degrilip, tutulan hüjümçi goraýjy bolýar we oýun täzeden başlanýar. Eger
goraýjy hüjümçileriň hiç haýsyny tutup bilmese, onda ol goraýjylygyna galýar we oýun dowam edýär.
Oýnuň başga görnüşlerinde aşakdaky ýaly hem bolup biler:
1. Goraýjy çyzykdan çyzyga çenli gaçyp barýan hüjümçileriň birnäçesini tutup biler. Iň soňky tutulan goraýjy bolýar.
2. Egerde oýunçylaryň sany kän bolsa, onda ortada 2–3 goraýjy
bellemek bolýar.
23
Oýnuň düzgünleri:
1. El degrilen hüjümçiler tutuldygy hasap edilýär.
2. Goraýjy hüjümçini çäklendirilen meýdançada tutup biler.`,
      `Oýnuň oýnaljak ýeri. Oýun ygalsyz günler sport meýdançalarynda, ygally günler sport öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20–30 oýunçy gatnaşyp, bir tegelek bolup durýarlar. Olar bije atyşyp, birini ene, ýene birini bolsa pişik edip
belleýärler.
Oýnuň oýnalyşy. Ene tegelekdäki çagalaryna ýüzlenip: “Men bazara gidýän, süýdi pişikden goraň” diýip tabşyrýar. Soňra ol çagalardan daşlaşyp, oýunçylar görmez ýaly, olara arkasyny öwrüp durýar. Şol
wagt pişik tegelege girip süýdi içýär (süýdi içen ýaly hereket edýär).
Soňra pişik oýunçylaryň biriniň arkasynda gizlenýär. Ene bazardan
gelip, süýdi tapmansoň, çagalardan: “Süýdi kim içdi?” diýip soraýar.
Çagalaryň hemmesi bilelikde: “Pişik içdi” diýşip jogap berýärler. Ene
pişigiň gözlegine çykýar we ony tapyp kowalaýar. Çagalar hem biribi-
24
rine gysylyşyp durup, pişigi tutaýsalar, ony enelerine berýärler. Şondan
soň täzeden enäni we pişigi saýlap, oýny dowam etdirýärler.
Oýnuň düzgünleri:
1. Oýunçylar pişigi elleri bilen tutmaly däl, diňe tegelekde gysylyşyp, göwreleri bilen oňa päsgel bermeli.
2. Ene gözleýän, kowalaýan pişigini diňe tegelegiň çäginde tutup
biler.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport
meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin
ýaglykdan ýada ýumşak matadan işilen bir sany guşak gerek.
Oýna taýýarlyk. Oýna 10dan 30a çenli oýunçy gatnaşyp biler.
Oýunçylar biribirine elleri ýetmez ýaly aralykda tegelenişip oturýarlar. Oýunçylar öz aralarynda bijäniň ýada sanawaçlaryň esasynda guşakçy saýlaýarlar. Guşakçy eli guşakly tegelenip oturan oýunçylaryň
ortasynda durýar.
Oýnuň oýnalyşy. Ortada duran guşakçy bir zadyň adyny tutup:
“Uçdy” diýýär. Mysal üçin: “Garga uçdy”, “Serçe uçdy”, “Jaý uçdy”
we. ş.m. Egerde ady tutulan zat uçýan bolsa, onda hemme oýunçylar ellerini ganat ýaly galgadyp, ýerinden galýarlar we onuň uçýandygyny aňladýarlar. Egerde uçmaýan zadyň ady tutulsa (jaý uçdy),
onda oýunçylar gozganman oturýarlar. Kimde kim ýalňyşsa, onda ol
ýerinden turup, oýunçylaryň daşyndan ylgap, aýlanyp gelip, ýerinde oturýar. Şol wagt ortada duran guşakçy ylgap barýan oýunçynyň
yzyndan kowalap, guşak bilen urmaga synanyşýar. Egerde guşakçy
ylgap barýan oýunçynyň yzyndan ýetip, guşak bilen ursa, onda olar
ýerlerini çalyşýarlar. Egerde ýetip bimese, onda oýun dowam edýär.
Oýnuň düzgünleri:
1. Oýunçylaryň hemmesi guşakçynyň aýdan sözleriniň manysyna
degişli hereket etmelidirler.
2. Guşakçy ýalňyşyp, ylgap barýan oýunçyny öz ýerinde oturmanka, guşak bilen urmaga haky bardyr.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýny sport meýdançalarynda ýada sport öýünde oýnamak bolýar. Oýny oýnamak
üçin degende tenini agyrtmaz ýaly, gowşak işilen guşak gerekdir.
Oýna taýýarlyk. Oýunçylar öz aralarynda bije atyşyp, birini
guşakçy edip saýlaýarlar. Galanlary bolsa biribirlerinden bir ädim
uzaklykda tegelenişip, tegelegiň içine seredip, çommalyp oturýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen guşakçy elindäki
guşak bilen oturanlaryň daşyndan aýlanyp başlaýar. Guşagy haýsy
hem bolsa bir oýunçynyň arkasynda duýdurman goýýarda, oturanlaryň daşyndan aýlanmagyny dowam etdirýär. Guşakçy öwrülip gelýänçä, oýunçy arkasynda goýlan guşagy duýmasa, onda guşakçy ony
26
goýlan guşak bilen bir gezek urup, guşagy gapdala zyňyp goýberýär
we tegelegiň daşyndan ylgap, guşak goýlan oýunçynyň ýerini eýelemäge synanyşýar. Guşak bilen urlan oýunçy zyňlan guşaga tarap ylgap, guşagy alyp, öňki guşakçynyň yzyndan ylgap ýetmäge we guşak
bilen urmaga synanyşýar. Egerde yzyndan ylgap ýetip, guşak bilen
urup bilse, onda öňki guşakçy guşakçylygyny dowam etdirýär. Eger
de ýetip bilmese, onda ol guşakçy bolýar. Egerde oýunçy yzynda
guşak goýlanyny duýaýsa, onda guşagy alyp, guşakçynyň yzyndan
ylgaýar. Ol öz ýerine guşakçy geçip oturýança ýetse, onda ony guşak
bilen urýar we öňki guşakçy ýenede guşakçylygyna galýar.
Oýnuň düzgünleri:
1. Oýunçylara yzyna seretmek we yzynda guşak goýlan oýunça bu
barada duýdurmak bolmaýar.
2. Guşak bilen urlanda agyrtmaz ýaly, ol gowşak işilen bolmaly.
3. Oýunçylaryň ýagyrnysyndan başga ýerine urmak bolmaýar.
4. Eger oýunçylaryň biri “arkamda guşak goýuldy” diýip, bilmän
tursa, yzyna gaňrylyp seretse we ş. m. hereket etse, ol guşakçy
bolýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20–30 we ondanam köp oýunçy gatnaşyp
biler. Oýunçylar öz aralarynda bije atyşyp, sanawaç sanaşyp, bir
oýunçyny balykçy saýlaýarlar, galan oýunçylar bolsa balyk bolýarlar.
Meýdançanyň ölçegleri oýunçylaryň sanyna görä bolup, deňzi ýada
derýany göz öňünde tutup araçäklemeli. Balykçy meýdançanyň ortasynda durýar, galan oýunçylar (balyklar) bolsa meýdançanyň bir gyrasynda ýerleşýärler.
1
2
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen balyklar suwda
ýüzüp başlaýarlar. Şol wagt balykçy olaryň birini tutmaga synanyşýar. Balykçynyň tutan oýunçysy balykça kömekçi bolýar. Ol ikisi biribiriniň elinden tutup, balyklary kowalap, ýekeýekeden tutup, özlerine kömekçi edip, “tor” emele getirýärler. Şeýdip, tutan balyklaryny
28
tora goşup, balyklaryň hemmesini tor bilen tutýarlar. Iň soňky tutulan
balyk balykçy bolýar we oýun täzeden dowam edýär.
Oýnuň düzgünleri:
1. Balykçy balyklary çäklendirilen ýerde tutup biler.
2. Tordaky oýunçylar ellerini biribirinden üzmän, balyklary ýeke
ýekeden tutmalydyrlar. Eger olar balyklary ellerini biri-birinden
üzüp tutsalar, onda balyklaryň tutuldygy däldir.`,
      `Has ýokarlygyna bökmäge ukyplylaryň ýaryşyna kimiň tomaşa
edesi gelenok? Ine, bu ýaryşa hem türkmenler ýaglyga towusmak
diýip at berýärler.
Oýnalýan ýeri, oňa gerek tükellemeler. Sport meýdançasy ýada
sport öýi. Dürli reňkli ýaglyklar.
Taýýarlyk. Oýunçylar sany we
güýji boýunça iki topara bölünýärler. Meýdançanyň ortasynda dürli
beýiklikde birnäçe reňkli ýaglyklar
asylýar. Oýunçylaryň esasy maksady has ýokarda ýerleşýän ýaglygy
towsup almak bolup durýar. Oýunçy
has ýokarda ýerleşýän ýaglygy
alanda 3 ball, ortada ýerleşýän
ýaglygy alanda 2 ball, aşakda ýerleşýän ýaglygy alanda bolsa 1 ball
gazanýar.
Oýnalyş täri. Toparlar gezekligezegine towusmak bilen ýaglygy
almaga çalyşýarlar. Has köp ball
gazanan topar ýeňiji hasaplanylýar.
Oýnuň düzgünleri:
1. Her oýunçynyň bir synanyşyga hukugy bar.
2. Oýunçy böküp, ýaglygy alyp bilse, ol onuňky hasaplanylýar.
29
3. Oýunçy ýaglyga el degrip bilmese ýada ony alyp bilmese, onuň
yz ýanynda nobatda garaşyp duran ylgaýar we ýokary bökýär.
Oýnuň terbiýeçilik ähmiýeti we onuň geçiriliş usulyýeti.
“Ýaglyga towusmak” gadymy türkmen halk oýny bolup, ol häzirki
zaman türkmen toýlarynyň we döwletimizde geçirilýän ähli baýramçylyklaryň bezegi bolup durýar. “Ýaglyga towusmak” sportuň milli
görnüşidir. Oýunda beýiklige bökmek, ylgamak endikleri ösdürilýär,
dostluk, ýoldaşlyk duýgulary kämilleşdirilýär`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20–30 oýunçy gatnaşyp biler. Oýunçylar
iki topara bölünip, özlerine öňbaşçy saýlaýarlar. Meýdançada uzynlygy 20–30 metrlikde garşymagarşy iki çyzyk çyzýarlar. Her topar öz
tarapyndaky çyzygyň daşynda biribirlerine ýüzbeýüz durýarlar. Iki
çyzygyň ortasynda meýdançany ikä bölýän ýene bir çyzyk çyzýarlar.
Bije atyşyp, haýsy toparyň oýna birinji başlaýanlygy kesgitlenilýär.
30
Oýnuň oýnalyşy. Oýny birinji başlaýan topar, hüjümçi, beýleki topar goraýjy bolýar. Ýolbaşçynyň rugsady bilen, oýny birinji
başlaýan toparyň bir oýunçysy (öňbaşçynyň görkezmesi bilen) garşydaş toparyň oýunçylarynyň ýanyna ylgap baryp, bir oýunçynyň eline
urup, yzyna gaçyp, özüni goraýjy toparyň oýunçysyna tutdurman, ýerine geçip durmaga synanyşýar. Eline urduran oýunçy uran oýunçynyň yzyndan ylgap, orta çyzyga çenli ýetip, tutmaga synanyşýar. Eger
eline urlan oýunçy ony orta çyzyga çenli tutup bilse, onda tutulan
oýunçy oýundan çykyp oturýar we oýny başlamaga hukuk gazanýar.
Egerde ony tutup bilmese, onda onuň özi oýundan çykyp oturýar we
oýun täzeden dowam edýär.
Oýnuň düzgünleri:
1. El degrilen oýunçy tutuldygy hasap edilýär.
2. Meýdançanyň orta çyzygyna çenli tutmak bolýar.
3. Goraýyş toparyň oýunçylary ellerini öňe uzadyp durmalydyrlar.
4. Hüjümçi toparyň oýunçysy goraýjy toparyň islendik oýunçysynyň eline urup biler.
5. Oýnuň netijesinde haýsy toparyň oýunçysynyň sany az bolsa ýa
da oýunçysy gutarsa, şol toparyň ýeňildigi hasaplanýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 10dan 30a çenli oýunçy gatnaşyp biler.
Oýunçylar bije atyşyp, sanawaç sanaşyp, möjegi we çopany saýlaýarlar. Galan oýunçylar çopanyň goýunlary bolýarlar. Hemme oýunçylar
çopanyň yzynda biribiriniň bilinden tutuşyp, meýdançanyň bir gyrasynda durýarlar. Möjek bolsa meýdançanyň ortasynda durýar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen möjek çopana ýüzlenip: “Eteketek almam bar” diýýär. Onda çopan oňa: “Sürisüri goýnum
bar” diýip, jogap berýär we möjekden: “Almaňdan dadyraý!” diýip soraýar. Onda möjek çopana: “Bir alma bir goýun çalşaly” diýip, teklip
edýär. Çopan oňa: “Ýok” diýip razylaşanok. Şondan soň: “Bir goýny
31
aljak” diýip, sürüsine topulýar. Çopan hem oňa: “Hany, aljak bolubam
gör!” diýip, möjege garşylyk görkezip başlaýar. Möjek her dürli hereket edip, sapalak atyp, goýunlaryň düzüminiň iň soňkusyny tutmaga
synanyşýar. Goýunlaram oňa tutdurmajak bolşup, sagasola hereket
edýärler. Eger möjek goýunlaryň düzüminiň iň soňkusyny tutup bilse,
onda olar ýerlerini çalyşýarlar we oýun täzeden dowam edýär.
Oýnuň düzgünleri:
1. Çopan goýunlary möjekden diňe elini gerip, gorap biler.
2. Mümkin boldugyça oýunçylary möjegiň, çopanyň we düzümiň iň
soňky oýunçysynyň ornunda bolar ýaly edip oýnatmaly`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Göz daňar ýaly arassa
ýaglyk gerek.
Oýna taýýarlyk. Oýna 10–15 oýunçy gatnaşyp, bir tegelege
düzülip oturýarlar. Eger oýunçylaryň sany köp bolsa, onda oýny 2–3
tegelekde geçirmek bolýar. Oýunçylar bije atyşyp, sanawaç sanaşyp,
oýna öňbaşçy saýlaýarlar. Öňbaşçy oýunçylardan 5–6 metr daşlykda
32
oýunçylara tarap arkan durýar. Tegelekde oturan oýunçylar bolsa özlerine goýnuň süňkleriniň biriniň adyny belleýärler (mysal üçin, injik).
Oýnuň oýnalyşy. Oýun ýolbaşçynyň rugsady bilen başlanýar.
Öňbaşçy yzyna öwrülmän, goýnuň islendik süňküniň adyny tutýar.
Eger tegelekde oturan oýunçylaryň arasynda öňbaşçynyň adyny tutýan süňküni (injik) bellän oýunçy bar bolsa, onda ol ýerinden turup,
öňbaşçynyň ýanyna barýar. Öňbaşçy oýunçylara tarap öwrülip, onuň
gözüni ýaglyk bilen daňýar we birnäçe gezek saga ýada çepe tarap
duran ýerinden pyrlaýar. Şondan sol ol tegelenip oturan oýunçylary gözlemäge ugraýar. Gözi daňlan oýunçy tegelenip oturan topary
tapyp bilse, onda oýun öňküsi ýaly dowam edýär. Eger gözi daňlan
oýunçy ugruny ýitirip, köp wagtlap tapyp bilmese, onda oýun saklanyp, öňbaşçy bilen ýerini çalşyp, oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Tegelenip oturan oýunçylar ümsümligi saklamalydyr.
2. Egerde gözi daňlan oýunçy ugruny ýitirip, daşa gitse, onda tegelenip oturan oýunçylardan biri oturan ýerlerini aňdyrman onuň
daşa gidenini duýdurýar`,
      `Gyzlar üçin hödürlenýän oýun.
Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20den 30a çenli oýunçy gatnaşyp biler.
Bije atyp, sanawaç sanap, oýunçylar iki topara bölünýärler. Her topar
özlerine öňbaşçy saýlaýarlar. Meýdançada uzynlygy 10–15 metrlikde
garşymagarşy iki çyzyk çyzylýar. Her topar öz tarapyndaky çyzygyň
daşynda çommalyp, toparlar biri birlerine ýüzbeýüz oturýarlar. Her
toparyň öňbaşçysy öz oýunçylaryna şaýseplere degişli lakamlar (atlar) dakýarlar. Şondan soň öňbaşçylar “Dähedemdessem” edip, haýsy toparyň oýny birinji başlamalydygyny kesgitleýärler.
Oýnuň oýnalyşy. Ýolbasçynyň rugsady bilen oýna birinji
başlaýan toparyň öňbaşçysy ýeke aýagynda bökjekläp, beýleki toparyň öňbaşçysynyň ýanyna baryp: “Gelnejem gelnejem, aglap otyr,
ýaşmajygyny baglap otyr, bir dilimjik gawun beräý!” diýip ýüzlenýär. 
Beýleki toparyň öňbaşçysy bolsa oňa hiç zat bermän: “Bar git’’ diýip,
yzyna gaýtarýar. Yzyna gaýtarylan öňbaşçy lapy keç bolup, öz toparyna tarap ýöreýär. Ol öz toparyna ýetipýetmänkä, ikinji toparyň
öňbaşçysy rehimlik edip, yzyna “geläýgeläý” diýip çagyrýar we islän gawunyny saýlamaga rugsat berýär. Şondan soň birinji toparyň
öňbaşçysy çommalyp oturan ikinji toparyň oýunçylarynyň kellesine
pitikläp, haýsysynyň bişendigini saýlap alýar. Şol oýunçynyň arkasyna geçip, onuň gözüni eli bilen ýapýar. Şondan soň ol: “Elekçelek,
miwe gerek, gelsin bilezik” diýip, öz toparynyň oýunçylarynyň biriniň şaýseplerden (bilezik) dakylan lakamyny tutup çagyrýar. Lakamy tutulan oýunçy ýuwaşlyk bilen garşydaş topardaky gözi ýapylan
oýunçysyna tarap ýöreýär. Ikinji toparyň oýunçylary bolsa çagyrylan
garşydaş toparyň oýunçysynyň ýörişini, boýuny, eşigini, gylykhäsiýetini we ş.m. söz bilen şekillendirýärler. Çagyrylan oýunçy gözi
ýapylan oýunçynyň kellesine elini degrip, yzyna öz toparyna baryp,
hemme oýunçylar bilen bilelikde garşydaş topardan öwrülip, çommalyp oturýarlar we ellerini ýere urup: “Mamam çörek bişirdi” diýip, tä
gözi ýapylan oýunçy gelýänça gaýtalaýarlar. Birinji toparyň oýunçylary öwrülip oturanlaryndan soň, gözi ýapylan oýunçynyň gözi açylýar. Soňra ol garşydaş oýunçylarynyň ýanyna baryp, arka tarapynda
gezmeläp, haýsy oýunçynyň kellesine el degrip gaýdanyny bilmäge
synanyşýar. Eger el degren oýunçyny tanasa, onda tanalan oýunçyny
öz toparyna alyp gidýär we oňa täzeden şaýseplerden lakam dakýarlar. Olara bir utuk berlip, oýna täzeden başlamaga hukuk berilýär.
Egerde tanap bilmese, onda özi şol toparda galýar we oňa hem täzeden lakam dakylýar. Özüni tanatmadyk oýunçynyň toparyna bir utuk
berilýär we oýny täzeden başlamaga hukuk berilýär.
Oýnuň düzgünleri:
1. Oýny birinji başlaýan toparyň oýunçysy, garşydaş toparyň
oýunçylarynyň ýanyna barýança, ýeke aýakda bökjekleýär.
2. Oýunçylaryň kellesine ýuwaşlyk bilen pitiklemeli.
3. Oýunçylar özlerine dakylan lakamlaryny ýatda berk saklamalydyrlar.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin palçykdan ýasalan 40 sany göjek gerek. Göjekleri ýygnap salar ýaly göjek haltajygy gerek.
Oýna taýýarlyk. Oýna 20–30 oýunçy gatnaşyp biler. Oýunçylar bije atyşyp, sanawaç sanaşyp, iki topara bölünýärler we her topar
özüne öňbaşçy saýlaýar. Oýnuň ýolbaşçysy, öňbaşçylar we oýunçylar özara maslahatlaşyp, meýdançanyň ölçeglerini kesgitleýärler we
iki garşydaş çyzyk çyzyp, pellehanalary belleýärler. Birinji pellehanada iki toparyň hem oýunçylary çyzygyň daşynda durýarlar. Ikinji
pellehanada bolsa 40 sany göjegi biribirinden deň aralykda hatara
düzüp goýýarlar. Şondan soň toparlaryň öňbaşçylary özara bije atyşyp, haýsy toparyň pellehanadan pellehana ylgap gelmelidigini, haýsy toparyň hem göjekleri ýekeýekeden haltajyga toplamalydygyny
kesgitleýärler.
36
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen öňbaşçylaryň görkezmesi esasynda her topardan bir oýunçy birinji pellehanadan ikinji
pellehana tarap ylgaýar. Bijede kesgitlenişi ýaly, bijesi utan toparyň
oýunçysy ikinji pellehana baryp, yzyna gaýdyp gelýär. Beýleki toparyň oýunçysy bolsa ikinji pellehana baryp, düzülen göjekleri ýekeýekeden haltajyga toplamaly. Eger göjekleri haltajyga toplaýan oýunçy
beýleki oýunçynyň pellehanadan pellahana baryp gelýänçä, göjekleri
toplap ýetişse, onda onuň ýeňdigi hasaplanýar we öz toparyna bir utuk
getirýär. Egerde toplap ýetişmese, onda beýleki toparyň oýunçysynyň ýeňdigi we toparyna bir utuk getirýär. Oýnuň netijesinde haýsy
toparyň oýunçylary köp utuk gazansa, şol topar ýeňiji bolýar.
Oýnuň düzgünleri:
1. Göjekleri toplaýan oýunçy her göjegi alanda bir gezek eglip
galmaly.
2. Oýun oýnaljak bolnanda göjek ýok bolsa, ikinji bir gabyl zady
göjegiň deregine ulanyp bolar.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport
meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin
göwrümi uly bolmadyk bir sany rezin top, başam barmakdan ýogyn
bolmadyk uçlary kütek, uzynlygy bir garyş bolan 7 sany çöp we bir
bölek hek gerek.
Oýna taýýarlyk. Oýna 20–30 oýunçy gatnaşyp biler. Oýunçylar iki deň topara bölünip, özlerine öňbaşçy saýlaýarlar. Meýdançanyň ortasynda, her ýapragy bir metrden kiçi bolmadyk 6 ýaprakly
tegelek gülüň şekilini çyzmaly. Gülüň ortasynda çöpleri üçburçluk
görnüşinde düzüp goýmaly. Ortaky gülüň bir çetinden iki ädimlikde
pellehana belläp, çyzyk çyzmaly, gülüň beýleki garşydaş tarapynda
bäş ädimlikde hem pellehana bellenip, çyzyk çyzylýar. Toparlaryň
öňbaşçylary bije atyşyp, haýsy toparyň oýny birinji başlamalydygyny
kesgitleýärler. Oýny birinji başlaýan topar hüjümçi bolup, gülden bäş
ädimlik pellehanada durýar. Beýleki topar bolsa goraýjy bolup, gülden iki ädimlik pellehanada durýar.
37
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen hüjümçi toparyň
oýunçylary pellehanadan çyzygy basman, topy zyňyp, gülüň ortasynda dikilen çöpleri pytratmaga synanyşýarlar. Egerde topy birinji zyňan oýunçy çöpleri pytradyp bilmese, onda şol toparyň oýunçylary
gezekligezegine topy zyňyp, tä çöpleri pytradýança, top zyňmany
dowam edýärler. Hüjümçileriň hemmesi topy zyňyp, çöpi pytradyp
bilmeseler, onda goraýjylar hüjümçi, hüjümçilerem goraýjy bolup,
ýerlerini çalşyp, oýny täzeden başlaýarlar. Eger hüjümçiler topy zyňyp, çöpleri pytratsalar, onda olar meýdançanyň içine dargaýarlar.
Goraýjylar bolsa zyňlan topy alyp, biribirine oklaşyp, hüjümçileri
top bilen urmaga synanyşýarlar we çöpleri gülüň ýapragyna düzdürmejek bolýarlar. Hüjümçiler meýdançada pytrap, özlerini goraýjylara
top bilen urdurman, pytradan çöpleriniň 6syny ýekeýekeden gülüň
ýapraklarynda, birini bolsa gülüň ortasynda goýmaly. Eger hüjümçiler özlerini top bilen urdurman, çöpleri ýerbeýer goýsalar, onda öňbaşçynyň ýolbaşçylygynda hemmesi “Jemile düzüldi” diýip, bege-
38
nişip, el çarpyşyp, öz pellehanalaryna ýygnanýarlar we oýun täzeden
başlanýar. Eger goraýjylar çöpler düzülmänkä, meýdançada pytran
hüjümçileri top bilen urup bilseler, onda goraýjylar hüjümçi, hüjümçilerem goraýjy bolýarlar we oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Hüjümçileriň çöpleri pytratmak üçin zyňan topuny goraýjylar tutup, hüjümçilere bermeli.
2. Hüjümçiler pytran çöpleri gülüň ýapraklaryna goýanyndan soň,
goraýjylaryň hüjümçileri top bilen urmaga haky ýokdur.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
39
Oýna taýýarlyk. Meýdançada 30–40 metr aralykda garşylyklaýyn iki çyzyk çyzylyp, pellehana bellenilýär. Oýunçylaryň sany
30–40 we ondanam köp bolup biler. Olar iki topara bölünýärler. Toparyň oýunçylary üçüçden bölünişýärler. Her üçlükde iki oýunçy biri
biriniň elinden tutýar. Üçünji oýunçy bolsa olaryň tutluşan elleriniň
üstüne bir aýagyny atýar we dyzyndan epläp, aşak sallaýar, beýleki
aýagy ýerde durýar. Ortaky oýunçylar ellerini iki gapdalky oýunçylaryň eginlerinde goýýarlar. Her toparyň üçlükleri garşylyklaýyn geçirilen çyzyklaryň (pellehananyň) daşynda taýýar bolup durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen her toparyň
oýunçylarynyň bir üçlügi pellehanadan pellehana tarap ylgaýar. Üçlügiň ortanjy oýunçysy agsak towuk bolup, ol ýere degýän bir aýagy bilen böküp gidýär. Haýsy toparyň oýunçylarynyň üçlügi pellehananyň
çyzygyndan ilkinji bolup geçse, şol toparyň üçlügi ýeňýär we olara
bir utuk san berilýär. Toparlaryň haýsysy köp utuk san gazansa, şol
toparyň oýunçylary ýeňiji bolýarlar.
Oýnuň düzgünleri:
1. Eger ortaky oýunçynyň iki aýagy hem ýere degse, onda şol üçlük
ýeňýär.
2. Oýun ikinji gezek gaýtalananynda, ortaky oýunçy çetki oýunçylaryň biri bilen çalşyrylmalydyr.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde geçirilýär.
Oýna taýýarlyk. Oýna 30dan 40a çenli oýunçy gatnaşyp biler.
Oýunçylar öz aralarynda iki sany öňbaşçyny saýlaýarlar. Öňbaşçylar oýunçylary biribiri bilen azaşdyryp, güýji deňräk iki topara
bölýärler. Oýnaljak meýdançada arasy 20–25 metrlikde iki sany çyzyk çyzylýar. Iki topar hem biribiriniň garşysynda çyzygyň daşynda, bir aýagyny epläp, uýlugyna çekip, ony bir eli bilen tutup, oýna
bir aýakda bökjekläp, taýýar bolup durýar. Eger uýluga çekilen sag
aýak bolsa, onda ony çep eli bilen tutmaly we tersine.
40
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen toparlaryň oýunçylary bir aýakda çyzyklaryň çäklerinde bökjekläp, biribirlerine ýakynlaşýarlar. Soňra olar has ýakynlaşyp, biribiriniň eginleri bilen itişýärler
we iki aýagyň üstünde duruzmaga synanyşýarlar. Iteleşikde her oýunçy
öz garşydaşyny uýluga çekilen aýagynyň üstünde duruzmaga synanyşýar. Iteleşikde haýsy oýunçy uýluga çekilen aýagyny ýere degirse, onda
ol oýunçy oýundan çykýar. Üstün çykan oýunçy öz öňbaşçysyny goramaga çalyşýar we garşydaş toparyň öňbaşçysynyň üstüne hüjüm edýär.
Ýeke aýakda iteleşigiň hetijesinde haýsy öňbaşçynyň uýluga çekilen
aýagy ilki ýere degse, şol toparyň utuldygy hasap edilýär.
Oýnuň düzgünleri:
1. Bu oýunda öňbaşçy saýlananda, onuň güýçlüligini, çydamlylygyny, ugurtapyjylygyny, ýeke aýakda köp wagtlap bökjekläp durup bilýänligini, birnäçe oýunçylaryň garşysyna çykyp biljekligini göz öňünde tutmalydyrlar.
2. Eger oýunçy bir aýagynyň üstünde bökjekläp ýadasa, oňa beýleki
aýagyna geçmäge rugsat edilýär.
3. Oýunçylar diňe eginleri bilen iteleşip bilerler.
41
Şu oýnuň beýleki görnüşinde. Öňbaşçylaryň görkezmesi bilen
her toparda bir oýunçy ýeke aýakda bökjekläp, meýdançanyň ortasynda eginleri bilen itekleşýärler. Ýeňlen oýunçy oýundan çykýar.
Şeýdip, her toparyň oýunçylarynyň birini meýdançanyň ortasyna çykaryp, oýny dowam etdirýärler we netijede, haýsy toparyň oýunçysynyň sany köp bolsa, şol toparyň utdugy hasap edilýär.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun sport meýdançalarynda ýada sport öýünde geçirilýär. Oýny oýnamak üçin
göwrümi uly bolmadyk bir sany ýumşak rezin top gerek.
Oýna taýýarlyk. Oýna islendik sandaky oýunçylar gatnaşyp bilerler. Oýunçylar öz arasynda bir oýunçyny topy ilkinji gezek “Gök”
bermäge saýlaýarlar. Topy “Gök” berýän oýunçy meýdançanyň ortasynda eli toply durýar. Galan oýunçylar hem topy “Gök” berýän
oýunçynyň töwereginde durýarlar.
42
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen topy „Gök“ berýän
oýunçy elindäki topy 2–2,5 metr ýokarlygyna oklap, gapyp, beýleki
oýunçylara gaçmaga maý berýär. Beýleki oýunçylar pursatdan peýdalanyp, meýdançanyň içine ýaýraýarlar. Topy „Gök “ beren oýunçy
bolsa oklan topuny gapyp, haýsy hem bolsa bir oýunçyny top bilen
urmaga synanyşýar. Eger zyňlan top bir oýunça degse, onda topy zyňan oýunça bir utuk san berilýär. Egerde zyňlan top oýunça degmese,
onda haýsy oýunçy topa golaý bolsa şol hem topy alyp, özüne ýakyn
duran oýunça çenäp zyňýar. Beýleki oýunçy özüne zyňlan topy gapyp
ýada onuň öňünden sowlup biler. Eger oýunçy özüne zyňlan topy gapyp bilse, onda oňa hem bir utuk san berilýär we topy bir oýunça çenäp zyňmaga hukuk gazanýar. Oýnuň netijesinde haýsy oýunçy köp
utuk san gazansa, şol oýunçy ýeňiji hasaplanýar.
Oýnuň düzgünleri:
1. Eli toply oýunçy beýleki oýunçylary kowalap, top bilen urmak
gadagan.
2. Eli toply oýunçy duran ýerinden ýada iki ädimden soň, topy
oýunça çenäp, zyňyp biler.
3. Eli toply oýunçy beýleki oýunçyny kowalap, top bilen ursa, onda
oňa jerime san berilýär.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin bir
sany göwrümi uly bolmadyk rezin top ýa-da woleýbol topy gerek.
Oýna taýýarlyk. Oýna 30–40 oýunçy gatnaşyp biler. Oýunçylar
bije atyşyp, deň iki topara bölünýärler we haýsy toparyň “awçy”
ýada “ördek” bolmalydygy kesgitlenilýär. Meýdançada adam sanyna görä, “köli” aňladýan tegelek ýada dörtburçluk çyzyk çyzylýar.
Awçy toparyň oýunçylary kölüň daşynda deň aralygy saklap, çyzygy basman durýarlar. Ördek toparyň oýunçylary bolsa kölüň içine
pytraýarlar.
43
44
Oýnuň oýnalyşy. Ýolbaşçy awçy toparyň oýunçysyna topy berip,
oýny başlamaga rugsat edýär. Şondan soň awçy toparyň oýunçylary
topy öz oýunçylaryna oklaşyp, amatly pursatdan peýdalanyp, ördek
toparyň oýunçylaryny top bilen urup, oýundan çykarmaga synanyşýarlar. Ördek toparyň oýunçylary bolsa kölüň çäginden çykman,
islendik tarapa ylgap, dürli hereketler edip, awçylara top bilen urdurmajak bolýarlar. Top bilen urlan oýunçy oýundan çykýar. Oýun
awçylaryň ördek toparynyň oýunçylarynyň hemmesini top bilen urup
çykarýança, dowam edýär. Soň oýnaljak ýer we oýunçylar orunlaryny çalyşýarlar we oýun täzeden başlanýar. Oýun wagt bellenip hem
oýnalýar. Haýsy topar ördekleri çalt awlan bolsa, şol topar hem utýar.
Oýnuň düzgünleri:
1. Awçylar duran ýerlerinden çyzygy basman, topy ördeklere çenäp
zyňyp ýada biribirlerine oklaşyp bilerler.
2. Awçynyň zyňan topy, ýere degmän, ördege göni degse, onda ol
oýundan çykýar. Egerde top ýere degip, soň ördege degse, ol
hasap edilmeýär.
3. Kölüň çäginden çykan ördek uruldy hasap edilip, oýundan çykarylýar.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin bir
sany rezin topy (tennis topy) we uzynlygy 1 metre golaý taýak gerek.
Oýna taýýarlyk. Oýna 18den 22ä çenli jübüt sanly oýunçy gatnaşyp biler. Olar bije atyşyp, iki topara bölünýärler. Eger oýunçylaryň
sany köp bolsa, onda olar üç topara bölünip bilerler. Her topar özlerine
öňbaşçy saýlaýar we toparlaryň oýnaýyş tertibini kesgitläp, haýsy toparyň
oýny ilki başlaýanlygyny belleýär. Şondan soň toparyn öňbaşçylarynyň
umumy ylalaşygy bilen pellehanalaryň çäkleri kesgitlenýär we çyzyklar çyzylýar. Her pellehananyň çyzyklarynyň çep gyrasynda 1,5 metr, iç
ýüzünde giňligi 2 metrlik tegelek çyzylýar. Oýny birinji başlaýan toparyň
oýunçylary birinji pellehananyň çyzygynyň daş ýüzünde durýarlar. Oýny
ikinji başlaýan toparyň bir oýunçysy topçy bolup, birinji pellehanada top
oklamak üçin galýar. Beýleki oýunçylar bolsa pellehanadan daşlykda
oýna syn edip, öz gezeklerine garaşyp durýarlar.
45
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen oýunçylar nobatmanobat hersi bir gezek topçynyň oklaýan topuny taýak bilen
meýdança tarap urýar. Öz urma nobatyny geçiren oýunçy pellehananyň iç ýüzündäki tegelege girip durýar. Urgy nobaty iň soňky oýunça
geleninde tegelekdäki oýunçylar birinji pellehanadan ikinji pellehana tarap ylgamaga taýýar bolup durýarlar. Iň soňky oýunçynyň salan
taýagy topa degsedegmese, taýagy taşlaman, tegelekdäki oýunçylar
bilen bilelikde ikinji pellehana tarap ylgaýarlar. Topy oklaýan oýunçy
öz gezeginde urlan topuň yzyndan ylgap, topy alyp, pellehanadan pellehana tarap ylgap barýan oýunçylara zyňyp, olaryň birini urmaga synanyşýar. Eger ol top bilen bir oýunçyny urup bilse, onda onuň topary
oýna täzeden başlaýar. Eger oňa top bilen urmak başartmasa, onda
oýny ýenede şol öňki topar ikinji pellehanadan dowam etdirýär.
Oýnuň düzgünleri:
1. Topy urýan oýunçy taýagy bilen topy meýdança tarap urup bilse,
onda ol öz toparyna bir utuk san getirýär.
2. Topy urýan oýunçynyň salgan taýagy topa degmese, onda topy
urmak gezegini geçirdi hasap edilýär.
46
3. Topy urýan oýunçylar pellehanadaky we tegelegiň daşyndaky çyzyklary basmaly däldirler.
4. Eger topy urýan oýunçylaryň biri çyzygy basyp dursa, top oklaýan
oýunçy, ony top bilen uraýsa, urlan oýunçynyň topary top urmak
gezegini geçirdi hasap edilýär we oýny ikinji başlaýan toparyň
oýunçylary oýny täzeden başlaýarlar.
5. Topy oklaýan oýunçy her urlan topuň yzyndan ylgap, topy alyp,
ýene-de öz ýerine gelmeli.
6. Topy oklaýan oýunçy topa ellerini degirmeli däldirler. Eger olaryň biri ýalňyşyp, topa elini degräýse, onda şol toparyň bir utuk
sany kemelýär.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde geçirilýär.
Oýna taýýarlyk. Oýun üçin aralygy 20–30 metrlikde iki sany
çyzyk çyzylyp, pellehanalar bellenilýär. Oýunçylar bije atyşyp, sanawaç sanaşyp, deň iki topara bölünip, özlerine öňbaşçy saýlaýarlar.
Öňbaşçylar üçin meýdançanyň ortasynda ýörite ýer bellenilýär. Her
topar bellenen pellehananyň çyzygynyň daşynda garşydaş toparyň
oýunçylary bilen ýüzbeýüz bolup, hatara durýarlar. Öňbaşçylar bolsa
ortada bellenen ýere geçýärler. Öňbaşçylar öz aralarynda bije atyşyp,
oýny kimiň başlamalydygyny belli edýärler. Şondan soň öňbaşçylar
sorajak zatlary barada ylalaşýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen bijesi çykan toparyň öňbaşçysy oýny başlaýar. Ol öz oýunçylaryna ýüzlenip: “Ýaranymaýaranym” diýýär. Oýunçylar: “Lepbeýlepbeý turanym” diýşip,
jogap berýärler. Öňbaşçy: “Ýurdumyzda aýalgyzlaryň arasynda iň
ökde küştçi kim?” diýip soraýar. Oýunçylar: “Ýurdumyzda aýalgyzlaryň arasynda iň ökde küştçi pylany” diýşip jogap berýärler.
Eger berlen jogap nädogry bolsa, onda ol sorag beýleki topara
berilýär. Şeýlelikde, iki öňbaşçynyň göz öňünde tutýan jogaby aýdylýança, toparlara gezekligezegine sorag berlip durulýar.
47
Soragyň dogry jogabyny haýsyda bolsa bir toparyň oýunçylary bilse, onda olaryň öňbaşçysy: “Berekella, üstünden bardyň!” diýip
gygyrýar. Şondan soň soraga dogry jogap beren toparyň oýunçylary,
garşydaş toparyň oýunçylaryna tarap ylgap, olary tutup, arkalaryna
hopba bolup, öz çyzyklaryna çenli münüp gelmäge synanyşýarlar.
Garşydaş toparyň oýunçylary bolsa olara tutdurman, garşydaş çyzykdan geçjek bolýarlar.
Tutulyp, arkasyna hopba eden oýunçylar oýundan çykarylýar.
Haýsy toparda köp oýunçy galsa, şol topar hem utýar.
Oýnuň düzgünleri:
1. Toparlaryň oýunçylary kimiň kimi tutmalydygyny belli etmeli
we öz garşydaşynyň gabadynda durmaly.
2. Tutulan oýunçy tutan oýunçyny, tutulan ýerinden arkasyna hopba
edip, pellehana getirmeli.
3. Soraga dogry jogap beren toparyň oýunçylary öňbaşçynyň: “Berekella, üstünden bardyň!” diýip, gygyranyndan soň, garşydaş
toparyň oýunçylaryna tarap ylgap bilýärler.`,
      `Oýnalýan ýeri. Bu oýny oýnamak üçin hiç hili enjam, meýdança
hem gerek bolmaýar.
Taýýarlyk. Düzzüm oýnamak isleýän iki adamynyň her biri
garşydaşynyň daşyndan özüniň reňki boýunça tapawutlanýan birmeňzeş 8 sany daş alýar hemde gaty kagyzyň ýüzünde şu aşakdaky ýaly
çyzgyny çyzýar.
Oýnalyş täri. Oýunçy daşlarynyň 4sini ortaky çyzykda goýýar.
Şondan soň olar öz aralarynda kimiň öň göçmelidigi barasynda bije
atyşýarlar. Bijesi çykan oýunçy 5nji daşyny islän nokadynda goýýar.
Ol soňky daşlary haýsyda bolsa bir çyzygyň ugrundaky hatarda 3
daş ýerleşdirmäge dyrjaşýar. Birinji oýunçy 5nji daşyny bir nokatda
goýanyndan soň, onuň garşydaşy hem birinji oýunça 3 daşy hatara
goýdurmajak bolup, onuň daşlarynyň arasyndaky nokatda öz daşyny
goýýar. Oýunçylaryň birinjisi haýsyda bolsa bir hatardaky nokatlaryň 3sinde öz daşyny hatarlap goýup bilse, ikinji oýunçynyň indiki
goýjak daşlarynyň birini alýar.
Oýnuň düzgünleri:
1. Iki tarapyň oýunçysy hem öz daşlaryny tiz düzmäge, garşydaşynyň daşlaryny düzjek bolup edýän synanyşygyny başa bardyrmazlyga çalyşmaly.
2. Düzzüm oýnuny iki adam oýnap, olaryň her birine 3–4 adamy
kömekçi berip bolar.
3. Oýnuň terbiýeçilik ähmiýeti we onuň geçiriliş usulyýeti: Düzzüm
oýny oýunçylarda sowukganlylygy, pähimliligi, dürs pikirlenmäni kämilleşdirýär. `,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýny düz meýdançalarda, baýyrlaryň arasynda, çägesöw ýerlerde, takyrlarda, sport meýdançalarynda, sport öýlerinde hemde amatly ýerlerde geçirmek bolýar.
Meýdançanyň ölçegleri: pellehanalaryň aralygy 60–100 metr ýada
40–60 ädim çemesinde bolmalydyr. Ol adam sanyna görä, üýtgäp biler.
Oýny geçirmek üçin bir sany rezin top we uzynlygy 1 metre golaý taýak gerek. Taýagyň tutulýan ýeri tutmaga amatly bolmaly.
Oýna taýýarlyk. Oýna 10–16, 20–26 we ondanam köp oýunçy
gatnaşyp biler. Oýna näçe köp adam gatnaşsa, ol şonçada şowhunly geçýär. Bije atyşyp, sanawaç sanaşyp, oýunçylar deň iki topara
bölünýärler. Her topar özüne öňbaşçy saýlaýar. Şondan soň iki pellehana bellenilýär. Pellehanalaryň biri topy urmak we gaçmak üçin,
beýlekisi gaçyp barylýan we yzyna gaýdylýan pellehana. Pellehanalar uzyn we ýogyn çyzyklar bilen biribirinden tapawutly bolmaly.
Pellehanalar bellenenden soň toparyň haýsysynyň döwçi, haýsysynyň
topçy bolmalydygyny kesgitleýärler. Topçy toparyň bir oýunçysy
döwçülere top oklamak üçin top urulýan pellehanada galýar. Topçy
toparyň oýunçylary meýdançanyň içine ýaýramak we topy biribirine
oklaşmak, urlan topy gapmak, döwçi toparyň topy urup, gaçyp barýan
oýunçysyny top bilen urmak üçin amatly bolar ýaly, hersi bir ýerde
durýarlar. Döwçi toparyň oýunçylary top urulýan pellehanada galyp,
nobatma-nobat oklanan topy urýarlar.
4.
50
Oýnuň oýnalyşy. Ýolbaşçynyň rugsadyndan soň, döwçüleriň biri
topçy bilen 2–2,5 metr aralykda ýüzbeýüz durýar. Topçy elindäki
topy döwçi bilen aralyga düşer ýaly edip, 2–2,5 metr ýokary oklaýar.
Döwçi elindäki taýak bilen topy urmaly. Ilki başda her döwçiniň topy
bir gezek urmaga hukugy bar. Döwçi topy urup, topçular topy getirýänçäler pellehana baryp, dolanyp gelse, indiki nobaty urmaga ýetişse, döwçi topary üç gezek urmaga hukuk gazanýar. Egerde nobatdaky döwçiniň salgan taýagy topa degmese, onda ol bellenen ýerde
gaçmaga maý bolýança garaşmaly. Ol maý tapyp, pellehana baryp
gelse, oňa ýene bir gezek topy urmaga hukuk berilýär. Kähalatlarda
döwçüleriň birisine beýleki pellehana baryp, dolanyp gelmäge maý
bolman galýar ýada döwçüleriň hemmesi pellehana ýygnanýarlar.
Şeýle ýagdaýda topçy döwçüleriň 3–4 metr gapdalynda durup, topy
“göge”, ýagny, topy 2,5–3 metr ýokary oklap gapýar we döwçülere
gaçmaga maý berýär. Döwçüler has çakgan, sapalak atyp, amatly pursatdan peýdalanyp, top urulýan pellehana tarap gaçýar. Ol özüni top
bilen urdurman gelse, ýenede oklanan topy urup, ýoldaşlarynyň dolanyp gelmegine mümkinçilik döredýär. “Gök” berýän oýunçy hem
öz gezeginde ylgap barýan oýunçynyň öňräginde duran öz ýoldaşy-
51
na topy çalt oklaýar. Öňdäki duran oýunçy topy gapyp, ylgap barýan
döwçini urup biler.
Oýnuň düzgünleri:
1. Oýunçylar iki topara bölünende mümkün boldugyça olaryň ýyndamlaryny, çalasynlaryny, topy oňat urýanlaryny, topy göni zyňyp bilýänlerini iki tarapada deň bölmeli.
2. Topy uzaga ýada topçularyň seýrek ýerine urup, şol gezekde
hem pellehana baryp dolanyp gelen oýunça topy üç gezek urmak
hukugy berilýär. Beýleki halatlarda oýunçylar topy ýeke gezek
urup bilerler.
3. Öz top urmak gezegini geçiren oýunçy amatly pursatdan peýdalanyp, pellehana baryp, ýene-de dolanyp gelse, nobaty gelende
oňa ýeke gezek topy urmak hukugy berilýär.
4. Öň üç gezek topy urmak hukugyny gazanan oýunçy ikinji gezeginde ýene-de topy jaý urup, pellehana baryp dolanyp gelse,
onuň indi 5 gezek top urmak hukugy bar. Iki top öňküsi, üç top
hem täzeden baryp geleni üçin.
5. Eger topçular döwçüleriň uran topuny gapsalar, onda olar döwçi
bolýarlar.
6. Döwçi topa tötänleýin galtaşaýsa, onda olaryň bütin topary topçy
bolýarlar.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin ýörite işilen guşak gerek.
Oýna taýýarlyk. Meýdançanyň bir çetinde, ortarakdan giňligi
2,5–3 metrlik tegelek çyzmaly. Oýna 20–30 oýunçy gatnaşyp biler.
Oýunçylar bije atyşyp, sanawaç sanaşyp, iki topara bölünýärler. Olar
özlerine öňdaşçy saýlaýarlar we bir oýunçyny jarçy edip belleýärler.
Şondan soň toparyň öňbaşçylary we eli guşakly jarçy dagy tegelegiň içinde oturýarlar. Toparlaryň biri olardan 15–20 metr uzaklykda
çep tarapynda, beýlekisi bolsa sag tarapynda durýarlar. Oňbaşçylar
öz aralarynda bije atyşyp, kimiň oýny birinji başlamalydygyny kes-
52
gitleýärler. Bijesi çykan öňbaşçy ýüpek reňkiniň adyny belleýär we
beýleki öňbaşça hemde jarça mälim edýärler.
Oýnuň oýnalyşy. Oýun ýolbaşçynyň rugsady bilen başlanýar.
Öňbaşçylar öz toparynyň oýunçylarynyň birini ýanlaryna çagyrýarlar.
Çagyrylan oýunçy tegelegiň ýanyna baryp, oýny birinji başlaýan toparyň oýunçysy jarçynyň elindäki guşagynyň ujundan tutup: “Ýüpek
ýüpek” diýýär. Jarçy bolsa: “Nähili ýüpek?” diýip soraýar. Oýunçy
bir ýüpek reňkiniň adyny çak bilen aýdýar. Eger oýunçynyň aýdan
ýüpek reňki bellenen reňk bilen deň gelse, onda jarçy elindäki guşagy
goýberip: “Bildiň! Ýetde derrew mün!” diýýär. Şondan soň reňkiň
adyny bilen oýunçy guşagy alyp, beýleki oýunçyny tutup, arkasyna
hopba bolup, öz toparynyň duran ýerine çenli münüp gidýär we bir
utuk gazanýar. Egerde ol bellenen ýüpek reňkiniň adyny bilmese,
onda ol sorag beýleki oýunça berilýär. Beýleki oýunçy hem bellenen
reňki bilmese, onda olaryň ikisinem yzyna gaýtaryp, başga oýunçylary çagyrýarlar. Oýun şeýle tertipde dowam edýär we haýsy topar köp
utuk san gazansa, şol topar hem utýar.
53
Oýnuň başga görnüşlerinde. Bellenen ýüpek reňkiniň adyny bilen oýunçy beýleki oýunçynyň yzyndan ýetip, arkasyna hopba bolup
münmän, onuň yzyndan ýetip, guşak bilen arkasyna urup, bir utuk san
gazanyp biler.
Oýnuň düzgünleri:
1. Guşak gowşak işilen matadan bolmaly.
2. Her gezekde toparyň oýunçylary çagyrylanynda bellenýän ýüpek
reňkleriniň atlary üýtgemeli.`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar. Oýny oýnamak üçin matadan işilen, uzynlygy 50–60 santimetrlik guşak gerek.
Oýna taýýarlyk. Oýna gatnaşyjylaryň sany jübüt bolup, 20–30,
ondanam gowrak bolup biler. Oýunçylar bije atyşyp, sanawaç sanaşyp,
iki sany öňbaşçy belleýärler. Beýleki oýunçylar hem azaşyp, deň ikä
54
bölünýärler. Ikibirikibir azaşan oýunçylar ýaş, güýç taýdan desdeň
bolmalydyrlar. Toparlaryň öňbaşçylary öz aralarynda bije atyşyp,
haýsy toparyň döwçüdigini ýada guşakçydygyny kesgitleýärler. Toparlar garşymagarşy durar ýaly, arasy 8–10 metr çemesinde iki göni
çyzyk çyzylýar. Toparlaryň oýunçylary çyzygyň daşynda düzülip,
oýna taýýar bolup durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen guşakçy toparyň
oýunçylarynyň biri döwçi toparyň oýunçylaryna tarap guşagy zyňýar.
Döwçi toparyň oýunçylary ýerlerinden üýtgemän, guşagy gapjak bolýarlar. Eger döwçüler guşagy gapyp bilmeseler, onda olar guşakçy
bolýarlar. Egerde döwçi toparyň bir oýunçysy guşagy gapsa, onda
ol guşagy alyp, garşysynda duran özi bilen azaşan oýunçysynyň arkasyna hopba bolup münýär. Ýaňky döwçi guşakçy toparyň oýunçysynyň arkasyna münüp, oturan ýerinden guşagy öz oýunçylaryna tarap zyňýar. Zyňlan guşagy döwçüleriň biri gapaýsa, onda döwçüleriň
hemmesi guşakçylara tarap ylgap barýarlar hemde her kim özi bilen
azaşan oýunçysyny münüp, öňki duran ýerlerine barýarlar we bir utuk
san gazanýarlar. Guşakçylar döwçüleri arkasyna mündürip, öz ýerlerine eltip, yzlaryna dolanýarlar we çyzykda öňki ýaly hatara durýarlar. Eger döwçüler öz oýunçysynyň zyňan guşagyny gapyp bilmeseler, onda olar guşakçy bolýarlar we oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Guşakçy toparyň oýunçylary bellenen çyzygy basman, ýerlerinden üýtgemän, guşagy zyňmalydyrlar.
2. Döwçi toparyň oýunçylary hem bellenen çyzygy basman, ýerlerinden üýtgemän, guşagy gapmalydyrlar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Bu oýun ýetginjek oglanlaryň oýnaýan oýnudyr.
Oýny oýnamak üçin oýunçylaryň sanyna görä, tegelek çyzyk çyzylýar. Oýna 10–12 oýunçy gatnaşyp biler. Eger oýunçylaryň sany köp
bolsa, onda oýny iki tegelek çyzykda geçirip bolar. Oýunçylar bije
55
atyşyp, sanawaç sanaşyp, deň iki topara bölünýärler we özlerine öňbaşçy saýlap, haýsy toparyň döwçüdigi ýada goraýjydygy kesgitlenilýär. Şondan soň goraýjy toparyň oýunçylary tegelegiň içine girip,
öňbaşçyny garawul goýup, galanlary bolsa tegelegiň içinde biribiriniň eginlerine ellerini goýup, kellelerini aşak egip, tegelenip durýarlar. Döwçi toparyň oýunçylary çyzygyň daşynda oýna taýýar bolup
durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen döwçi toparyň
oýunçylary tegelek çyzygyň daşyndan aýlanyp, garawulyň gözüne sap atyp, çyzygyň içindäki kepbe görnüşinde duran oýunçylaryň
üstüne böküp münmäge synanyşýarlar. Kepbäni goraýan oýunçy bolsa kepbä böküp münjek bolýan ýada ondan düşjek bolýan döwçi toparyň oýunçylaryna çyzygyň içinde elini ýada aýagyny degirmäge
çalyşýar. Eger kepbäni goraýan oýunçy döwçi toparyň bir oýunçysyna elini ýada aýagyny degirse, onda ol oýunçy goraýjy bolýar, galan döwçüler bolsa ortada kepbe bolup durýarlar. Kepbäniň üstünde
56
oturan oýunçynyň aýagy ýere degse, onuň toparynyň utuldygy hasap
edilýär we oýun täzeden başlanýar. Eger döwçüleriň hemmesi özüni
goraýja tutdurman, ortaky kepbä böküp münüp, ýenede düşüp, öz
ýerlerine barsalar, onda olar bir utuk san gazanýarlar we oýun täzeden
başlanýar.
Oýnuň düzgünleri:
1. Garawul bolýan oýunçy döwçi toparyň oýunçylarynyň birine
çyzygyň içinde elini ýada aýagyny degirse, onda ol oýunçynyň
utuldygy hasapdyr.
2. Ortada duran oýunçylar öz üstündäki oýunçylary bilgeşleýin
ýykmaly däldirler.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 10–12 sany ýetginjek oglanlar gatnaşyp
biler. Olar bije atyşyp, deň iki topara bölünip, özlerine öňbaşçy saýlap, haýsy toparyň döwçüdigini ýada goraýjydygyny kesgitleýärler.
Şondan soň goraýjy toparyň oýunçylarynyň öňbaşçysy garawul durup, ýene biri diwara ýada haýata ellerini diräp, eglip durýar. Oňa
ýassyk diýilýär. Onuň yzyndan beýlekiler hem biribiriniň bilinden
tutup, öňdäki oýunçylara ýaplanyp, eşek bolup durýarlar. Döwçi toparyň oýunçylary bolsa, eşek bolup duran oýunçylaryň üstüne münmäge taýýarlanýarlar.
57
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen döwçi toparyň
oýunçylarynyň iň ýyndamy, çalasyny batlybatly ylgap, eşek bolup
düzülen oýunçylaryň öňdäkisiniň üstüne böküp münmäge synanyşýar. Sebäbi ol iň öňdäkiniň üstüne böküp münüp bilmän, üçünji ýa
da dördünji oýunçynyň üstüne münse, onda beýleki böküp münjek
oýunçylara ýer galman biribiriniň üstüne böküp münmäge mejbur
bolýarlar. Netijede, eşegiň üstünden taýyp, ýykylyp, garawula tutdurmagy mümkin. Şeýlelik bilen döwçi toparyň oýunçylarynyň birisi böküp müneninden soň, beýlekileri hem yzlyyzyna eşegiň üstüne
böküp münýärler.
Goraýjy toparyň oýunçylary eşek bolup üstlerine batly böküp
münülende ýykylmajak bolup synanyşýarlar. Hemme döwçüler eşegiň üstüne münenlerinden soň, oýnuň şertine görä, belli bir sana 25
ýada 30a çenli sanalýar ýada wagt bellenilýär. Eger goraýjy toparyň
oýunçylary eşek bolup, bellenen sana ýada wagta çenli ýykylman,
üstündäki oýunçylary saklasalar, onda olar bir utuk gazanyp, toparlar
ýerlerini çalyşýarlar. Eger üstündäki oýunçylary saklap bilmeseler,
onda döwçüler bir utuk gazanýarlar we oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Döwçi toparyň oýunçylary eşegiň üstüne böküp münenlerinden
soň, ýerinden gozganman oturmalydyrlar.
2. Döwçi toparyň oýunçylary eşegiň üstünde aýaklaryny ýere degirmeli däldirler.
3. Eglip duran oýunçylaryň kellesine ýada başga ýerine zeper
ýetirmeli däldirler.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Meýdançada oýunçylaryň sanyna görä, uly tegelek çyzylýar. Şol tegelegiň içinde ýene bir tegelek çyzylýar. Iki tegelegiň arasy iki metrden az bolmaly däldir. Oýunçylaryň sany jübüt
58
bolup, iki topara bölünýärler. Bije atyşyp, haýsy toparyň döwçi ýada
goraýjy bolmalydygyny kesgitleýärler. Şondan soň goraýjy toparyň
oýunçylary içki tegelekde durýarlar. Döwçi toparyň oýunçylary bolsa
daşky tegelegiň daşynda durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen döwçi toparyň
oýunçylary goraýjy toparyň oýunçylarynyň arasyndan geçip, içki
tegelege girmäge synanyşýarlar. Goraýjy toparyň oýunçylary bolsa
döwçi toparyň oýunçylaryny içki tegelege goýbermejek bolýarlar.
Egerde döwçi toparyň oýunçylarynyň biri iki oýunçynyň arasyndan
geçip, özüni tutdurman, içki tegelege girip bilse, onda ol arasyndan
geçen iki oýunçysyny olja edip alýar. Eger geçip bilmän, goraýjylara
tutdursa, onda onuň özüni olja edip alýarlar. Oýun wagt bellenip oýnalýar. Toparlar nobatmanobat ýerlerini çalyşýarlar. Köp olja alan
topar utýar.
Oýnuň düzgünleri:
1. Goraýjy toparyň oýunçylary döwçüleri daşky tegelegiň çyzygyna
çenli tutup bilerler.
2. Döwçi toparyň oýunçylary iki tegelegiň arasynda diňe öňe we
yza, ýagny arkanlygyna ylgap bilerler.
3. Iki tegelegiň arasynda tutulan oýunçy hem olja edilip alynýar.
`,
      `Oýnuň oýnaljak ýeri we oňa degişli serişdeler. Oýun sport meýdançalarynda ýada sport öýünde oýnalýar.
Oýny oýnamak üçin bir sany woleýbol top gerek.
Oýna taýýarlyk. Oýny woleýbol meýdançasynda geçirmek bolýar. Meýdançanyň maňlaý çyzyklaryndan 1,5 metr çemesi daşlykda
ýene bir çyzyk çyzmaly. Oýunçylaryň sany jübüt (20–30 çemesi) bolup, bije atyşyp, deň iki topara bölünip, özlerine öňbaşçy saýlaýarlar.
Toparlaryň hersi meýdançanyň bir tarapynda ýerleşýär. Meýdançanyň maňlaý çyzyklaryndan daşlykda geçirilen çyzyk aralygy oljalar
üçin niýetlenen ýerdir.
59
Oýnuň oýnalyşy. Oýun ýolbaşçynyň topy islendik tarapa
oklamagy bilen başlanýar. Top oklanan tarapyň oýunçylarynyň biri
topy alyp, ortaky çyzygy basman, garşydaş toparyň oýunçylarynyň
birine degirjek bolup zyňýar. Garşydaş toparyň oýunçylary zyňlan
topdan sowulýarlar ýada ony gapmaga synanyşýarlar. Olaram öz
gezeginde topy alyp, garşydaş toparyň oýunçylaryna tarap zyňýar.
Oýun şu tertipde dowam edýär. Eger zyňlan top toparyň oýunçylarynyň birine degäýse ýada gapyp bilmese, gapyp elinden gaçyrsa, onda ol oýunçy olja edilip alynýar. Olja edilip alnan oýunçy
öz bellenen ýerinden çykman, öz çägindäki topy alyp, garşydaş
toparyň oýunçylaryna tarap zyňyp bilýär ýada öz oýunçylaryna
oklap bilýär. Olja edilen oýunçyny oljalykdan boşatmagam bolýar.
Şonuň üçin oňa topy ýokardan gapar ýaly edip zyňmaly. Topy gapan olja topy elinde saklap, öz toparynyň oýunçylarynyň hataryna
geçýär. Oýun wagt bellenip oýnalýar. Haýsy topar köp olja alsa,
şol topar hem utýar.
60
Oýnuň düzgünleri:
1. Zyňlan topy gapan oýunçy öz toparyna bir utuk san getirýär.
2. Meýdançadaky toparyň oýunçylary olja üçin bellenen çyzyklary
basmaga, bellenen ýere girmäge, şol ýerdäki topy almaga haklary
ýokdur.
3. Zyňlan top oýunça ýere degmän, göni degse, onda ol olja edilip
alynýar.
4. Olja edilip alnan oýunçy zyňlan topy bellenen ýeriň çäginden
çykman, göni gapsa, oljalykdan boşadylýar.
5. Oljanyň zyňan topy garşydaş toparyň bir oýunçysyna göni degse,
ol hem olja edilip alynýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Çekişme oýnuny oýnamak üçin oýunçylaryň
sany jübüt bolup, güýçleriniň deňligine seredip, bije atyşyp, deň iki
topara bölünýärler. Şondan soň meýdançanyň ortasyndan uzyn çyzyk
çyzylýar. Toparlaryň hersi çyzygyň bir tarapynda durýar. Toparlaryň
oýunçylary güýçleriniň deňligine seredip, biribiriniň garşysynda
aýaklarynyň ujuny çyzyga degirmän, biribiriniň ellerinden berk tutup, ýüzbe-ýüz durýarlar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen toparlaryň oýunçylary öz garşydaşyny eli bilen öz tarapyna çekip, çyzykdan geçirmäge
synanyşýarlar. Haýsy oýunçynyň iki aýagy hem çyzygyň beýleki tarapyna geçse, ol oýundan çykýar. Garşydaşyny çekip, çyzykdan geçiren oýunçy bolsa öz ýoldaşlaryna kömege barýar. Ol öz ýoldaşlarynyň biriniň bilinden tutup, garşysyndaky oýunçyny çekip, çyzykdan
geçirip, oýundan çykarýar. Şeýlelikde, haýsy toparyň oýunçylarynyň
sany köp bolsa şol hem utýar.
Oýnuň düzgünleri:
1. Oýunçylar çyzygy basman, aýaklaryny islendik ýagdaýda goýup
bilerler (bir aýagy öňe, iki aýagy jüp we ş.m.)
61
2. Çekişme wagtynda iki oýunçynyň tutluşan eli sypsa, onda ikisiniň arasynda oýun täzeden başlanýar.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20–30dan hem gowrak oýunçy gatnaşyp biler. Oýunçylar bije atyşyp, sanawaç sanaşyp, iki deň topara bölünýärler. Oýny oýnamak üçin meýdançanyň ortasynda arasy
3–4 metrlikde üç sany göni çyzyk çyzylýar. Çyzygyň uzynlygy
oýunçylaryň sanyna görä bolmaly. Iki toparyň oýunçylary ortaky
çyzygyň iki tarapynda hatarlanyşyp, biribirine arkasyny öwrüp,
el tutuşyp durmaly. Hatar duran her bir toparyň oýunçylary haýat
bolmaly.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen her toparyň oýunçylary tutuş hatarlanyşyp, arkalary bilen garşydaş toparyň oýunçylaryny itekläp, daşky çyzykdan çykarmaga synanyşýarlar. Çyzykdan
çykarylan oýunçy oýundan çykarylýar. Oýun toparlaryň biriniň
oýunçylarynyň hemmesi çyzykdan çykarylýança, dowam etdirilýär.
Haýsy toparyň oýunçylary daşky çyzykdan ilki çykarylyp gutarsa, ol
toparyň utuldygy hasaplanýar. Utan topara bir utuk san berilýär we
oýun täzeden başlanýar.
62
Oýnuň düzgünleri:
1. Oýunçylar diňe arkalary bilen garşydaş toparyň oýunçylaryny
itekläp bilerler.
2. Öz garşydaşyny daşky çyzykdan itekläp çykaran oýunçy öz toparynyň oýunçylaryna kömege baryp biler.`,
      `Oýnuň oýnaljak ýeri. Oýun sport meýdançalarynda ýada sport
öýünde oýnalýar.
Oýna taýýarlyk. Oýna 20–30dan hem gowrak oýunçy gatnaşyp biler. Oýunçylar bije atyşyp, sanawaç sanaşyp, iki deň topara bölünýärler. Şondan soň kimiň eşegarka, kimiň bolsa döwçüdigi
kesgitlenýär. Eşegarka toparynyň oýunçylary meýdançanyň ortasynda biribirinden 1–2,5 metr daşlykda hatara durýarlar. Olar aýaklarynyň arasyny egniniň giňliginde goýup, bir aýagyny azowlak öňe
süýşürip, ellerini öňdeaýagynyň dyzynyň üstünde goýup, arkasyny
eşegarka meňzedip, kellesini aşak egip durýarlar. Döwçi toparyň
oýunçylarynyň üstünden bökmäge taýýar bolup hatara durýarlar.
63
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen döwçi toparyň
oýunçylary gezekligezegine ylgap, eşegarka toparyň oýunçylarynyň
hemmesiniň üstünden ellerini arkasyna degrip, böküp geçýärler. Eger
döwçi toparyň oýunçylary eşegarka toparyň oýunçylarynyň hemmesiniň üstünden ylgawyny ýazdyrman, böküp geçseler, onda olar bir
utuk gazanýarlar we oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Bökülýän wagtynda döwçüler elinden başga ýerini eşegarka toparyň oýunçylaryna degirmeli däldir. Eger elinden başga ýeri
degse, onda toparlar ýerlerini çalyşýarlar.
2. Eger döwçi toparyň oýunçylary eşegarka toparyň oýunçylarynyň
üstünden bökeninde ylgawyny ýazdyryp säginse, biriniň üstünden böküp bilmese, onda toparlar ýerlerini çalyşýarlar we oýun
täzeden başlanýar.
Uly ýaşly mekdep okuwçylary hem kiçi we orta ýaşly mekdep
okuwçylarynyň türkmen milli oýunlarynda ulanýan sanawaçlaryny we
bije atmagyň usullaryny peýdalanyp bilerler. Ýöne uly ýaşly mekdep
okuwçylary sanawaçlary sananlarynda özleriniň çeper höwesjeňlik
ussatlyklaryny ýüze çykarmalydyrlar. Sözleriň her biriniň anyk, takyk manysyny bermegi başarmalydyrlar. Aýdalyň, kiçi ýaşly mekdep
okuwçylary sanawaçlary ýalňyşsyz, säginmän, çaltçaltdan sanamaga
ýykgyn edýän bolsalar, uly ýaşlylar sözüň düýp manysyny berýän terbiýeçilik ähmiýetini ýüze çykarmalydyrlar
Bije atylanda kiçi ýaşlylar öz öňbaşçylarynyň ýanlaryna gelenlerinde birisi özüne “derýa” ikinjisi özüne “deňiz” diýip at dakýar. Şu
ýerde uly ýaşly mekdep okuwçylary pähimpaýhas taýdan tapawutlanmalydyrlar. Mysal üçin, olaryň biriniň ady “Watan”, ikinjisiniň ady
“Halk” diýen ýaly giň manyda, çuňňur mazmunda bolmalydyr.`,
      `Oýnuň oýnaljak ýeri we oňa gerek enjamlar. Oýun ýaşaýyş
toplumlarynyň dynç alyş meýdançalarynda, sport öýlerinde, sport
meýdançalarynda we başgada ylgamaga päsgel bermeýän arassa, tekiz meýdançalarda oýnalýar. Oýny oýnamak üçin dürli reňkli (ýaşyl,
gyzyl, gök, sary, ak, goňur, gyrmyzy, melewşe we ş.m.) baýdajyklar
ýada türkmen gölli baýdajyklar, daşary ýurt döwletleriniň baýdaklary we Garaşsyz hem baky Bitarap Türkmenistan ýurdumyzyň ýaşyl
baýdagy gerek.
Oýna taýýarlyk. Bu oýna dürli müçe ýaşly adamlar (çagalar bagyndan başlap, okuw mekdepleriniň, harby gullukdakylar we kärhananyň işgärleri) gatnaşyp bilerler. Oýun toparlaryň arasynda ýaryş görnüşinde geçirilýär. Toparlaryň sany baýdaklaryň sanyna görä
bolmaly. Her toparyň oýunçylarynyň sany 10–12den az bolmaly
däl. Toparlaryň oýunçylarynyň sany näçe köp bolsa, oýun şonçada
şowhunly we gyzykly geçýär. Her toparyň öňbaşçysy ýada kapitany
bolmaly.
Oýny guramaçylykly geçirmek üçin oýnuň emin agzalary bellenilmeli:
1. Baş emin.
2. Toparyň sanyna görä eminler.
3. Oýnuň ýazmaça beýanyny alyp barýan kätip.
Meýdançanyň ortasynda Garaşsyz hem baky Bitarap Türkmenistan ýurdumyzyň ýaşyl baýdagy dikilýär. Toparlaryň hemmesi meýdançada bellenen ýerinde aýryaýrylykda hatara düzülip durýarlar.
Baş eminiň görkezmesi boýunça her topara bellenen emin toparyň baýdagyny öňbaşçysyna ýada kapitanyna gowşurýar. Toparyň
öňbaşçysy öz oýunçylaryny öz baýdaklary bilen tanyşdyrýar. Şondan
soň ol bir oýunçyny baýdak göteriji edip belleýär.
Baýdak göterijiler we eminler meýdançadaky bellenen ýerlerine
baryp durýarlar. Baş eminiň görkezmesi bilen baýdak göterijiler öz
toparlarynyň garşysynda meýdança tarap arkan durýarlar. Toparlaryň
oýunçylary hem şol wagt meýdança tarap arkan öwrülip, gözlerini
ýumup durýarlar. Şol wagt oýnuň kätibi baýdaklaryň duran ýerlerini
bellige alýar.
Oýnuň oýnalyşy. Baş eminiň rugsady bilen “Öz baýdagyňy tap!”
diýen sözden soň, baýdak göterijiler meýdança tarap öwrülip, baýdaklaryny ýokaryk galdyryp durýarlar. Şol pursatda toparlaryň oýunçylary hem gözlerini açyp, meýdança tarap öwrülip, öz baýdaklaryna
tarap uly tizlik bilen ylgaýarlar. Toparyň oýunçylary şol ylgap barşyna öz baýdak göterijisiniň daşyna tegelenişip, gymyldaman durýarlar. Şondan soň toparyň eminleri haýsy toparyň näçenji bolup gelendiklerini baş emine hasabat berýärler. Baş eminiň görkezmesi bilen
oýnuň kätibi oýnuň netijesini ýazmaça beýana belleýär. Soňra oýnuň
netijesi, ýagny haýsy toparyň näçenji orny eýeländigi yglan edilýär.
Toparlaryň hemmesi biribirlerini el çarpyşma bilen gutlaýarlar.
Gutlagdan soň 1nji orny eýelän topar meýdançanyň ortasynda
dikilen Türkmenistanyň baýdagynyň daşyna birinji halka bolup, el tutuşyp durýarlar. Beýleki toparlar hem öz alan orunlaryna laýyklykda
yzygiderli halka bolup, el tutuşyp durýarlar.
Saz çalnyp başlanmagy bilen birinji halka sagdan çepe, ikinji
halka çepden saga we beýlekilerem şu tertipde el tutuşyp, baýdagyň
daşyndan aýlanyşyp, aýdym bilen bezeýärler.
Şu oýnuň başga görnüşleri:
1. Baýdak göterijiler öz toparlarynyň garşysynda durman, olar
biribirleri bilen ýerlerini çalşyp, meýdança tarap arkan durýarlar.
Oýun başlananda toparlaryň oýunçylary indi garşysyndaky baýdaga
tarap ylgaman, öz baýdagynyň nirededigini anyklap, onsoň baýdagyna tarap ylgamaly we öz baýdak göterijisiniň daşyna tegelenişip,
gymyldaman durmalydyrlar.
Oýnuň bu görnüşini baýdak göterýänçileriň ýerlerini çalşyp, birnäçe gezek gaýtalap, geçirip bolar.
2. Şu oýnuň öňki görnüşinde baýdak göterýänçiler ýerlerini çalyşýan bolsalar, indi olar baýdaklaryny çalyşýarlar. Toparyň
oýunçylary öz baýdak göterijilerine tarap ylgaman, öz baýdaklaryna
tarap ylgap, onuň daşyna tegelenip, gymyldaman durmalydyrlar. Şu
tertipde baýdak göterijileriň baýdak çalyşmaklary bilen oýny birnäçe
gezek gaýtalap geçirip bolar.
3. Şu oýnuň öňki görnüşinde dürli reňkli baýdaklar ulanylan bolsa, oýnuň indiki görnüşinde ýurdumyzyň mukaddes ýaşyl baýdagynyň ýüzünde ýerleşdirilen 5 gölüni hem aýratynlykda ulanyp bolar.
5.
66
1) Ahal – teke göli.
2) Balkan – ýomut göli.
3) Mary – pendi göli.
4) Lebap – ärsary göli.
5) Daşoguz – gökleň göli.
Şu oýun öňki görnüşindäki tertipde dürli reňkdäki baýdaklaryň
ýerine türkmen göllerini baýdak hökmünde ulanyp geçirilse, ol has
şowhunly we gyzykly bolar. Sebäbi türkmen göllerinde umumy meňzeşlikler bar, şol meňzeşlikler oýunçylardan ünslüligi we çalt duýgurlygy talap edýär.
4. Şu oýnuň öňki görnüşlerinde dürli reňkli baýdaklar, türkmen
gölleri ulanylan bolsa, oýnuň indiki görnüşlerinde Döwlet baýdaklary, ýagny daşary ýurt döwlet baýdaklaryny ulanyp bolar.
“Öz baýdagyňy tap!” oýnuny öňki görnüşlerindäki ýaly tertipde
daşary ýurtlaryň döwlet baýdaklaryny hem ulanyp geçirip bolar. Bu
oýun ýaş aýratynlyklaryna garamazdan, hemme adamlaryň ünslüligini, ýönekeý we çylşyrymly duýgynyň tizligini, aňlylygyny, ýatkeşligini, tutanýerliligini, işeňňirligini, bilimliligini artdyrýar.`,
      `Oýnuň oýnaljak ýeri. Oýun ýaşaýyş toplumlarynyň dynç alyş
meýdançalarynda, beýiklipesli ýerlerde, baglyklarda gündizlerine bukular ýaly ýeri bolan ýerlerde ýada agşamlaryna aýaýdyňda oýnalýar.
Oýna taýýarlyk. Oýunçylaryň sany jübüt bolmaly. Olar bije
atyşyp, sanawaç sanaşyp, iki deň topara bölünip, özlerine öňbaşçy
saýlaýarlar. Şondan soň, ýerde oýunçylaryň sanyna görä, tegelek çyzyk çyzylyp, oýnuň pellehanasy bellenilýär. Toparlaryň öňbaşçylary
öz aralarynda bije atyşyp, haýsy toparyň döwçi, haýsysynyň goraýjy
bolmalydygyny kesgitleýärler.
Oýnuň oýnalyşy. Goraýjy toparyň oýunçylary tegelegiň içine girip, çommalyp, kellesini aşak egip, gözüni ýumup oturýarlar. Döwçi
toparyň oýunçylary bolsa çar tarapa bukulmaga gidýärler. Gidenleriň
hemmesi bukulanlaryndan soň, öňbaşçy “Guk” diýip gygyryp, habar
berýär. Şondan soň goraýjy toparyň oýunçylary gözlerini açyp, ýer-
67
lerinden turýarlar. Olaryň birnäçesi döwçüleri gözlemäge gidýärler.
Galanlary pellehanany goraýarlar. Eger goraýjy toparlaryň oýunçylarynyň biri döwçülerden birini tapaýsa, onda ol derrew öz oýunçylaryna habar berýär. Şeýle habardan soň goraýjylar döwçüleri tegelege,
ýagny pellehana girizmän, tutmaga synanyşýarlar. Pellehana ýetmän
tutulan döwçüler olja edilip alynýar we tegelegiň içinde oturdylýar.
Egerde döwçüierden birini tutup bilmän, pellehana goýberseler, onda
olar öňki goraýjylygyna galýarlar.
Oýnuň düzgünleri. Döwçüler gaty uzaga gidip, goraýjylary
heläklemez ýaly, bukulmagyň, kowup gaçmagyň çägi bellenilýär.`,
      `Oýnuň oýnaljak ýeri. Bu oýny kiçi ýaşly, ýagny 5 ýaşdan 10 ýaşa
çenli oglangyzlar ýaşaýyş toplumlarynyň dynç alyş meýdançalarynda,
agşamara, bukular ýaly ýeri bolan ýerlerde garyşyp, oýnap bilerler. 10
ýaşdan ýokary çagalar we ýetginjekler şäheriň, obanyň çetinde beýikli
pesli ýerlerde, baglyklarda, agşamlaryna özbaşdak oýnap bilerler.
Oýna taýýarlyk. Oýna oýunçylaryň islendik sany gatnaşyp biler.
Oýunçylar meýdançanyň bir gyrasynda ýada ortasynda çüle (pellehana) belleýärler. Şondan soň olar öz aralarynda bije atyşyp, sanawaç
sanaşyp, bir oýunçyny çülçi saýlaýarlar. Galanlary bolsa döwçi bolýarlar. Çülçi çülede gözüni ýumup, çommalyp oturýar. Döwçüler çar
tarapa ýaýrap bukulýarlar.
Oýnuň oýnalyşy. Döwçüler çar tarapa ýaýrap, buky ýerlerde
gizlenenlerinden soň, çar tarapdan “Guk” diýip gygyryp, çülçä gözlege
çykmak üçin habar berýärler. Çülçiniň esasy wezipesi bukulan oýunçylaryň hemmesini gözläp tapmak we olary oýundan çykarmak bolýar.
Şonuň üçin ol ilki ýakyn töwerekdäki oýunçylaryň ýanyna ýuwaşlyk
bilen ýakynlaşyp, bukulan oýunçynyň birini tanap, adyny tutup, mysal
üçin, “Çary, sen çyk!” diýip, çülä tarap ylgaýar. Eger tapylan oýunçynyň ady dogry tutulsa, onda ol derrew gizlenen ýerinden çykyp, çülçini
kowalap başlaýar. Şu ýagdaýda çülçi tutdurman, çülä gelse, onda ady
tutulan döwçi oýundan çykarylyp, çülede oturdylýar. Şeýdip, çülçi beýleki döwçüleri hem gözläp tapyp, adyny dogry tutup, döwçülere ýet­
68
dirmän, çülä ilki baryp, olary oýundan çykaryp, çülede oturdýar. Ýöne
çülçi döwçiniň adyny nädogry tutaýsa, onda ol “bilmediň, men Çary
däl” diýip, ýerinden turmaly. Şeýle ýagdaýda çülçi oýny täzeden başlamaly bolýar. Eger tanalan döwçi çülä çülçüden öň gelse, onda hem çülçi
çülçüligine galyp, oýun täzeden başlanýar. Kähalatlarda çülçi gözlege
çykan wagtynda bukulyp ýatan döwçüleriň biri amatly pursatdan peýdalanyp, çülçä görünmän, ýerinden turup, çülä tarap ylgap, çülçüden
öň gelse, onda tanalyp, oýundan çykarylanlar hem oýna girýärler we
oýun täzeden başlanýar. Eger çülçi döwçüleriň hemmesini ýekeýekeden tanap, oýundan çykaryp, çülä üýşürse, onda ilki tanalyp, oýundan
çykarylan döwçi çülçi bolýar we oýun täzeden başlanýar.
Oýnuň düzgünleri. Çülçi döwçüleriň biriniň adyny tutup, tananyndan soň, mekirlik edip, ýerini üýtgetmäge haky ýokdur.`,
      `Oýnuň oýnaljak ýeri. Oýun yaşaýyş toplumynyň dynç alyş meýdançalarynda ilki agşam ýada aý aýdyň gijeler oýnalýar.
Oýna taýýarlyk. Bu oýny oýnamak üçin oýunçylar bije atyşyp,
sanawaç sanaşyp, deň iki topara bölünip, özlerine öňbaşçy saýlaýarlar. Öňbaşçylar öz arasynda haýsy toparyň döwçüdigini we haýsy toparyň çülçüdigini kesgitleýärler. Şondan soň her topar meýdançanyň
bir gyrasynda özlerine çüle belleýärler.
Oynuň oýnalyşy. Bijäniň esasynda çülçi toparyň oýunçylary öz
çülesinde tükge düşüp ýada ýüzin ýatyp, özlerini tanamaz ýaly, öz
eşikleri bilen üstüni basyrýarlar. Döwçi toparyň oýunçylary bolsa
öz çülesinde çülçülere arkan durup, gözlerini ýumýarlar. Çülçi toparyň oýunçylary basyrynyp bolanlaryndan soň, öňbaşçy “Guk” diýip,
taýýardyklaryny habar berýärler. Şondan soň döwçüleriň hemmesi
çülçüleriň ýanyna baryp, basyrynyp ýatanlary tanamaga synanyşýarlar. Döwçüler çülçüleriň birini tanap, adyny tutup, üstüni açýarlar we
öz çülelerine tarap ylgaýarlar. Doly tanalyp, ady tutulan çülçi derrew
ýerinden turup, döwçüleriň yzyndan ylgap, olaryň birini çülä çenli
69
tutmaga çalyşýar. Eger döwçüler özlerini çülä çenli tutdurman gelseler, onda tanalyp, ady tutulan çülçi olja edilip alynýar we oýun öňki
öňküligine dowam etdirilýär. Egerde ady tutulyp, tanalan çülçi bir
döwçini çülä çenli tutaýsa ýada döwçüler çülçüleriň biriniň adyny
tanaman, nädogry aýtsa, onda çülçüleriň döwçüler bilen ýerleri çalşyrylyp, oýun täzeden başlanýar. Oýnuň dowamynda haýsy topar köp
gezek döwçi bolan bolsa şol ýeňiji hasaplanýar.
Oýnuň düzgünleri:
1. Döwçüler çülçüleriň birini tanaman, adyny tutman, üstüni açmaly
däldirler.
2. Diňe tanalyp, ady tutulan çülçi döwçüleri çülä çenli kowalap,
tutup biler.`,
      `Oýnuň oýnaljak ýeri. Oýun şäheriň ýaşaýyş toplumlarynyň dynç
alyş meýdançalarynda, obalaryň çetinde bukular ýaly ýeri bolan ýerlerde oýnalýar.
Oýna taýýarlyk. Oýna başlamazdan öň pellehana bellenilýär.
Onuň üçin hemme oýunçylaryň gatnaşmagynda diwaryň ýada
agajyň ýüzüne tegelek çyzylyp, dikligine iki sany göni çyzyk geçirilýär. Şondan soň oýunçylar bije atyşyp, sanawaç sanaşyp, deň iki
topara bölünip, haýsy toparyň döwçüdigini we haýsy toparyň çülçüdigini kesgitleýärler. Döwçi toparyň oýunçylary gizlenýärler, çülçüler
bolsa olary gözleýärler.
Oýnuň oýnalyşy. Çülçi toparyň oýunçylary pellehanada gizlenilýän meýdança tarap arkan durup, gözlerini ýumýarlar. Döwçüler bolsa meýdançada gizlenýärler. Olar taýýardyklaryny “Guk” diýip habar
berýärler. Bu oýnuň beýleki oýunlardan tapawutlylygy döwçi toparyň oýunçylary çülçülere görünmän, pellehana gelmäge synanyşýarlar. Çülçüler bolsa olary pellehana ýetmänkä, tutmaga synanyşýarlar.
Eger döwçüleriň biri pellehana çülçülere tutdurman gelip bilse, onda
olar ýenede gizlenmäge hukuk gazanýarlar. Eger de döwçüleriň biri
70
çülçülere tutduraýsa, onda çülçüler döwçüleriň arkasyna hopba bolup
münüp, pellehana çenli gaýdýarlar we çülçülikden çykýarlar. Şondan
soň oýunçylar ýerlerini çalşyp, oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Çülçi toparyň oýunçylary döwçi toparyň oýunçylaryny gözläp
tutjak bolýarlar we olardan pellehanany goraýarlar.
2. Gaçyp barýan döwçä çülçiniň eli degse, onda onuň tutuldygy
hasap edilýär.`,
      `Oýnuň oýnaljak ýeri. Bu oýun obalaryň, şäherleriň bukular ýaly
amatly ýerlerinde oýnalýar.
Oýna taýýarlyk. Oýunçylar öz aralarynda bije atyşyp, sanawaç
sanaşyp, çülçi belleýärler. Çülçi üçin ýörite pellehana bellenilýär. Ol
meýdançanyň islendik ýerinde gözüni ýumup, çommalyp oturýar.
Beýleki oýunçylar bolsa ondan gizlenýärler. Gizlenýän oýunçylara
döwçüler diýilýär.
Oýnuň oýnalyşy. Döwçi toparyň oýunçylary gizlenenlerinden
soň, çülçä “Guk” diýip habar berýärler. Şondan soň çülçi gözüni açyp,
ýerinden turýar we döwçüleriň gözlegine çykýar. Çülçi gizlenen
oýunçynyň üstünden baryp, gören ýerini mälim edip, “Haýatyň aňyrsynda garaňy gördüm, paňk” diýip gygyrýar. Tapylan oýunçy ýerinden turup, oýundan çykýar. Soňra çülçi beýleki oýunçylary tapmaga
gidýär. Eger çülçi döwçüleriň hemmesini tapyp bilse, onda ilkinji
tapylan oýunçy çülçi bolýar. Şu oýny wagt belläbem oýnap bolýar.
Bellenen wagtyň dowamynda çülçi hemme döwçüleri tapyp bilmese,
onda ýenede çülçüligine galýar.
Oýnuň düzgünleri:
1. Gizlenen döwçüler “Guk” berlenden soň, oýnuň ahyryna çenli
ýerinden üýtgemeli däldir.
2. Garasy görnen döwçüleriň adyny tutmak hökman däl.`,
      `Oýnuň oýnaljak ýeri. Oýun beýikli-pesli, sazakly-selinli, diwarly-haýatly, bukular ýaly amatly ýerlerde oýnalýar. Ýerli ýagdaý
ýokarda görkezilişi ýaly bolmasa, onda agşamlaryna aýaýdyňda oýnalýar.
Oýna taýýarlyk. Oýunçylar öz aralarynda iki sany öňbaşçyny
saýlaýarlar. Öňbaşçylar oýunçylary ikibirikibir azaşdyryp, deň iki
topara bölýärler. Şondan soň olar bije atyşyp, haýsy toparyň döwçüdigini haýsy toparyň çülçüdigini kesgitleýärler we amatly ýerde pellehana belleýärler.
Oýnuň oýnalyşy. Çülçi toparyň oýunçylary pellehanada gözüni ýumup oturýarlar. Döwçi toparyň oýunçylary bolsa çar tarapa bukulmaga
gidýärler. Döwçi toparyň oýunçylary bukulmaga barýarkalar çülçülere
tutdurman, pellehana barmagyň emellerini we usullaryny belleşýärler.
Olar pellehana nireden barmalydygyny, hemmesiniň bile ýada özara
toparlara bölünip barmalydygyny öňünden anyklaýarlar. Ediljek hereket doly kesgitlenip, mazaly bukulanlaryndan soň, döwçüler çülçülere
“Guk” berýärler. Döwçüler “Guk” berlenden soň, derrew ýerlerini üýtgedýärler we özleriniň belleýşi ýaly hereket edip başlaýarlar. Çülçi toparyň oýunçylary hem öz aralarynda kimleriň pellehanada galmalydygyny, kimleriň gözlege gitmelidigini gepleşýärler, “Guk” sesini eşiden
çülçüler hem öz belleýişleri boýunça hereket edýärler.
Döwçüleriň maksady her hili emelleri, usullary ulanyp, çülçülere
tutdurman, bolmanda bar oýunçynyň pellehana barmagyny gazanjak
bolýarlar. Çülçüler bolsa döwçüleriň hemmesini pellehana ýetmänkä, tutjak bolýarlar. Netijede, çülçüler döwçüleriň hemmesini tutup
bilseler, onda çülçüler döwçi, döwçüler hem çülçi bolýarlar we oýun
täzeden başlanýar. Egerde döwçülerden biri ýada birnäçesi pellehana baryp bilse, onda olar ýenede döwçüligine galýarlar we oýun
dowam etdirilýär.
Oýnuň düzgünleri:
1. Döwçüleriň bukulmaly ýerleri, çülçüleriň kowalap tutmaly ýerleri çäklendirilmelidir.
72
2. Döwçüleriň nirä gidip bukulýandygyny biljek bolup, çülçüler
olaryň yzyndan seretmeli däldirler.`,
      `Oýnuň oýnaljak ýeri. Oýny sport meýdançalarda, sport öýünde,
şäheriň ýaşaýyş toplumlarynyň dynç alyş meýdançalarynda, obanyň,
şäheriň çetindäki düzlüklerde, ýaşyl otluk meýdançalarda, çägesöw
ýerlerde we başga kowalaşmaga amatly ýerlerde oýnamak bolýar.
Oýny oýnamak üçin islendik reňkdäki ýaglyk gerek.
Oýna taýýarlyk. Oýna 15–20 we ondanda köpräk oýunçy gatnaşyp biler.
Meýdança oýunçylaryň sanyna görä çäklendirilmelidir. Oýunçylar öz aralarynda bije atyşyp, sanawaç sanaşyp, bir oýunçyny “çülçi”
saýlaýarlar. Galan oýunçylar bolsa “döwçi” bolýarlar. Döwçüler meýdançanyň içine dargaýarlar, çülçi bolsa meýdançanyň ortasynda eli
ýaglykly taýýar bolup durýar.
Oýnuň oýnalyşy. Ýolbaşçynyň rugsady bilen çülçi döwçüleri kowalap başlaýar. Döwçüler bolsa meýdançanyň çäginden çykman, çülçä
tutdurmajak bolup gaçýarlar. Eger çülçi döwçüleriň birini kowalap,
elini degräýse, onda çülçiniň eli degen oýunçysy tutuldy hasap edilip,
çülçi bilen ýerini çalyşýar. Täze çülçi eline ýaglygy alyp, “Men çülçi”
diýip, özüniň çülçüligini yglan edýär we oýny dowam etdirýär.
Oýnuň başga görnüşlerinde aşakdaky ýaly hem bolup biler:
Iki çülçi. Eger oýunçylaryň sany köp bolsa, onda meýdança deň
ikä bölünip, her bölegine bir çülçi bellenilýär. Her çülçi öz bellenilen
meýdançasynyň çäklerinden çykman, döwçüleri kowalap, tutup biler.
Döwçüler haýsy meýdançada tutdursalar, şol meýdançanyň çülçüsi
bilen ýerini çalyşýarlar.
Üç-dört çülçi. Egerde oýunçylaryň sany çenden aşa köp bolsa,
onda meýdançany 3e, 4e bölüp, her meýdança bir çülçi bellenilýär.
Oýun ýokarky tertipde oýnalýar.`,
      `Bu oýnuň öňki oýunlardan tapawudy öz ýoldaşlaryny çülçüden
goramak, tutmaga päsgel bermek, çykgynsyz ýagdaýdan baş alyp
çykmak bilen baglanyşyklydyr.
Çülçi meýdançanyň çäklerinden çykman, döwçülerden bir
oýunçynyň yzyndan kowalap, ýetip barýan pursatynda, beýleki bir
döwçi kowalanyp gelýän döwçiniň öňünden çykyp, elini öňe uzadyp, biribirlerine ellerini degrip, çülçüden halas edýär. Şondan soň
çülçi beýleki oýunçylary kowalap başlaýar. Eger çülçi kowalap barýan döwçüsiniň elleri biribirine degmänkä tutaýsa, onda tutulan
döwçi çülçi bolýar.`,
      `Öňki “Eliňi uzat” oýnunda döwçüler biribirlerine ellerini uzadyp, kömek edýän bolsalar, bu oýunda döwçi bilen çülçiniň arasyny
başga bir döwçi kesip geçmeli.`,
      `Bu oýun “El degirdi” oýny bilen meňzeşdir, ýöne çülçiniň kowalap tutan döwçüsi tutulan ýerinde gymyldaman, doňdurylan ýaly bolup durmalydyr. Şondan soň çülçi beýleki döwçüleri tutmagy dowam
etdirýär we doňdurylan döwçüleri goramaga synanyşýar. Döwçülerem
öz gezeginde çülçä tutdurmajak bolýarlar we doňdurylan döwçüleri
ellerini degirmek bilen olaryň doňuny çözmäge synanyşýarlar. Doňy
çözülen oýunçy döwçüler hataryna girip, oýny dowam etdirýär. Ýolbaşçynyň, tälimçiniň görkezmesi bilen sportuň saýlanan görnüşine
laýyklykda, çülçiniň el degrip, doňduran oýunçylary sportuň emelleriniň esasy durgularynda durup doňýarlar.
Mysal üçin, agyr atletikanyň, samboçynyň, basketbolçynyň, woleýbolçynyň we başgalaryň esasy durgularynda.`,
      `“El degirdi” oýnunyň şu görnüşinde çülçiniň kowalap barýan
döwçüsi çülçä ýetdirmän, aýagyny ýerden üzüp, ýagny, agaçdan aslyşyp dursa, töňňäniň üstüne münse, merdiwana dyrmaşyp dursa, haýata çyksa we ş.m. onda çülçi ol döwçüden sowlup, beýleki döwçüleri
kowalap başlaýar. Eger döwçüleriň hemmesi aýaklaryny ýerden üzüp
dursalar, onda çülçi aýagyny ýerden üzüp duran döwçüleriň 23 metr
daşlykda durup, 3e çenli sanap, döwçä gaçmaga maý berýär. Şondan
soň ol döwçini kowalap, tutmaga synanyşýar. Şu oýnuň başga görnüşinde çülçüden gaçyp barýan döwçi birden ýerde oturyp, ellerini
arkasynda ýere diräp, aýaklaryny göni ýokary galdyrsa, onda çülçi
ondan sowlup, beýleki döwçüleri kowalap tutmaga synanyşýar. Eger
çülçi aýagyny ýerden üzüp ýetişmedik döwçini tutsa, onda olar ýerini
çalyşýarlar.`,
      `Şu oýnuň ýönekeý “El degirdi” oýnundan tapawutlylygy çülçiniň kowalap tutmagynyň, döwçüleriň gaçmagynyň ýeke aýakda bökjekläp, ýerine ýetirilmegindedir. Olar bir aýagyny dyzyndan epip,
beýleki aýagynda bökjekläp oýnaýarlar. Ýadan aýaklaryny çalşyp
bilerler. Ýöne iki aýagynyň üstünde duran oýunçy tutuldygy hasap
edilýar.`,
      `Hemme oýunçylar aýaklarynyň dyzlaryny epip, ellerini gapdaldan öňe, ýere diräp, gurbaga oturyşyny edip oturýarlar. Çülçi oturan
ýerinden elindäki ýaglygyny ýokaryk galdyryp, “Men çülçi” diýeninden soň, oýun başlanýar. Döwçüler gurbaga böküşini edip, çülçüden
gaçýarlar, çülçi hem şol hereketde döwçüleri kowalap, tutmaga synanyşýar`,
    ],
  },
  chapter2: {
    id: "II. Taýak bilen oýnalýan Türkmen oýunlary",
    items: [
      "Taýak atdy",
      "Gyzyl taýak",
      "On iki taýajyk",
      "Taýak zyňdy",
      "Çilik",
      "Hekgal",
      "Leňke",
    ],
    texts: [
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Oýun salkyn günler,
arassa howada giň tekiz meýdançada oýnalýar. Meýdançada arasy,
takmynan, 10–15 ädim bolan iki sany göni çyzyk çyzylýar. Olaryň
arasyndan ýenede bir göni çyzyk çyzylýar. Şol çyzykdan 10–15 sm
uzaklykda giňligi 50–60 sm, çuňlugy 15–20 sm çukur gazylýar. Oýny
oýnamak üçin 6 sany taýajyklar taýýarlanýar. Taýajyklaryň uzynlygy bir garyş, ýogynlygy 5–10 santimetr, ýagny olar ýere dikileninde
oňat durar ýaly bolmaly. Ondan başgada bellenen pellehanada dikilen taýaklary zyňyp, urmak üçin uzynlygy 1 metre golaý ýörite taýak
hem gerek. Oýna gatnaşýan oýunçylar bije atyşyp, sanawaç sanaşyp,
iki topara bölünýärler. Olaryň biri döwçi, beýlekisi bolsa taýakçy bolýarlar. Şondan soň taýakçylar 6 sany taýajyklary alyp, ortaky göni
çyzygyň üstünde dikýärler, döwçüler bolsa pellehana baryp, öz aralarynda nobatma-nobat durup, elindäki taýagy bilen dikilgi taýajyklary
urmaga taýyar bolup durýarlar.
Oýnuň oýnalyşy. Döwçi toparyň oýunçylarynyň biri pellehanadan çyzygy basman, taýagy bilen ortada düzülen taýajyklary urup,
çukura düşürmäge synanyşýar. Eger atylan taýak dürtülen taýajyklara
degip, ony çukura düşürse, onda ol ýenede taýak atmaga hukuk gazanýar. Eger atylan taýak dikilen taýajyklara degmese ýa-da degip,
çukura düşmese, onda taýak atmak gezegi nobatdaky oýunça geçýär.
Taýakçylar bolsa çukura düşmedik taýajyklary ortada dikip,
atylan taýagy pellehana getirip, döwçülere berýärler. Döwçi toparyň
oýunçylarynyň her biriniň 6 gezek taýak atmaga hukugy bardyr. Eger
döwçi toparyň oýunçylarynyň öz taýak atma gezeklerinde dikilen
taýajyklary urup, çukura düşürip bilmeseler, onda olar ýerlerini çalyşýarlar. Eger hemme taýajyklary çukura düşürip bilseler, onda oýun
öňküsi ýaly dowam edýär.
76
Oýnuň düzgünleri:
1. Ortada düzülen taýajyklaryň hemmesini çukura düşüren topar bir
utuk san gazanýar.
2. Taýakçylar her gezekde oklanan taýaklary alyp, döwçülere getirip
bermelidirler.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýny düz meýdançada taýak diker ýaly ýerde oýnamak bolar. Oýunçylaryň sanyna
görä, uzynlygy 1 metrden gysga bolmadyk göni, sagdyn taýak gerek.
Oýna taýýarlyk. Oýna 10–12 sany oýunçy gatnaşyp biler. Olar öz
aralarynda bije atyşyp, sanawaç sanaşyp, kimiň taýak dikmelidigini,
ýagny taýakçyny belli edýärler. Meýdançanyň bir çetinde oýunçylaryň sanyna görä, göni çyzyk çyzylýar. Şol çyzygyň daşynda oýunçylar eli taýakly durýarlar. Taýakçy beýleki oýunçylaryň duran ýerinde
20–30 metr aralykda meýdançada taýagyny ýere dikýär.
77
Oýnuň oýnalyşy. Taýakçy taýagy ýere dikeninden soň, çyzygyň
daşynda duran oýunçylar çyzygy basman, dikilgi taýagy urjak bolup,
taýaklaryny gezekligezegine zyňýarlar. Kim dikilgi taýagy urup bilse, ol esasy çyzykdan taýagynyň uzynlygyna öňe süýşýär we ýenede
dikilgi taýagy urmaga synanyşýar. Ol ýenede dikilgi taýagy ursa, ýenede taýagyň uzynlygyna öňe süýşýär. Şeýdip, dikilgi taýaga taýak
ýetim golaýlaşýança, oýun ýokarky tertipde dowam etdirilýär. Eger ol
taýagy urup bilmese, taýak zyňma gezegi nobatdaky oýunça geçýär.
Her gezekde urlup, ýykylan taýagy taýakçy haýal etmän, öňki ýerinde
dikip, gapdala çekilýär.
Oýnuň düzgünleri:
1. “Gyzyl taýak” oýny oýnalanda seresap bolmaly. Taýak zyňma
nobatyna garaşýanlar bilen taýak zyňýan oýunçylaryň aralygy
3–4 mertden az bolmaly däldir.
2. Hemme oýunçylar urma nobatyny geçireninden soň, taýakçy
zyňlan taýaklary ýygnap, oýunçylaryň ellerine gowşurýar. Şoňa
çenli taýaklar düşen ýerlerinde ýatýar.
3. Soňky tapgyrlarda oýunçylaryň taýak zyňma nobaty olaryň taýaklarynyň düşen ýeri bilen dikilgi taýagyň aralygyna bagly bolýar.
Kimiň taýagy dikilgi taýagyň golaýyna düşen bolsa, urma gezegi
şoňa berilýär. Taýagy has uzaga düşen oýunçy taýakçy bolýar.
4. Öňki taýakça taýak zyňma gezegi hemme oýunçylaryň soňundan
berilýär.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun bukulmaga
amatly bolar ýaly ýerlerde oýnalýar. Oýny oýnamak üçin başam barmakdan ýogynrak, uzynlygy bir garyş, uçlary kütek bolan on iki sany
taýajyk gerek. Ondan başgada ýasylygy bir garyş, uzynlygy 2 metrlik tagta, uzynlygy 50 santimetrlik, ýogynlygy 15–20 santimetrlik togalak agaç ýada turba gerek.
78
Oýna taýýarlyk. Oýunçylar öz aralarynda bije atyşyp, sanawaç sanaşyp, öňbaşçyny we çülçini saýlaýarlar. Galanlary bolsa
döwçi bolýarlar. Öňbaşçy iki metrlik tagtany togalak agajyň ýa
da turbanyň üstünde bir çetini ýokaryk, bir çetinem ýere degrip
goýýar. Tagtanyň ýere degip duran ýeriniň üstüne 12 taýajygy
üýşürip goýýar.
Oýnuň oýnalyşy. Öňbaşçy tagtanyň ýokaryk galyp duran ýerine
batly basyp, taýajyklary pytradýar. Şol wagt döwçüler çar tarapa dargap
bukulýarlar. Çülçi bolsa dargan taýajyklary ýygnap, ýenede tagtanyň
üstüne üýşürýär. Taýajyklary üýşürip bolanyndan soň, döwçüleri gözlemäge başlaýar. Döwçüler çülçä görünmän, tagtanyň üstüne üýşürilen
taýajyklary tagtanyň gyrasyndan basyp pytratmaga synanyşýarlar.
Çülçi bolsa döwçüleri gözläp tapyp, tutmaga hem tagtany goramaga
çalyşýar. Eger döwçüleriň biri özüni çülçä tutdurman, tagtanyň gyrasyndan basyp, taýajyklary pytradyp bilse, onda çülçi pytran taýajyklary
ýygnap, tagtanyň üstüne üýşürýär. Şol wagt döwçüler ýenede bukulmaga gidýärler. Egerde çülçi döwçüleriň bir oýunçysyny tutaýsa, onda
tutulan döwçi çülçi bolýar we oýun täzeden başlanýar.
Oýnuň düzgünleri:
1. Çülçi pytran taýajyklary ýygnap, tagtanyň üstüne üýşürýänçä,
döwçüler bukulyp ýetişmelidirler.
2. Öňbaşçy oýnuň gidişine we üýşürilen taýajyklaryň sanyna
gözegçilik etmelidir.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýun gündizine
bukular ýaly amatly ýerde ýada agşamlaryna aý aýdyňda oýnalýar.
Oýun üçin uzynlygy 40–50 sm bolan taýak gerek.
Oýna taýýarlyk. Meýdançanyň amatly ýerinde giňligi 1 metr bolan tegelek çyzyk çyzylýar. Taýak tegelegiň içinde goýulýar. Oýunçylar bije atyşyp, sanawaç sanaşyp, çülçi belleýärler. Galanlary bolsa
döwçi bolýarlar.
79
Oýnuň oýnalyşy. Döwçülerden biri tegelek çyzygyň içindäki
taýagy alyp, islendik tarapa zyňýar. Çülçi zyňlan taýagy tapýar we tegelek çyzygyň içine getirip goýýar. Şol wagt döwçüler çar tarapa pytrap bukulýarlar. Çülçi taýagy ýerine getirip goýanyndan soň, bukulan
oýunçylary gözläp başlaýar. Ol haýsam bolsa bir oýunçyny görüp,
adyny tutup gygyrýar we tegelek çyzyga tarap ylgaýar. Ady tutulan
we beýleki oýunçylar hem tegelege tarap ylgaýarlar.
Çülçüden soň iň soňky bolup tegelege gelen oýunçy indiki tapgyrda çülçi bolýar. Öňki çülçi taýagy alyp, islendik tarapa zyňýar we
beýlekiler bilen bilelikde bukulmaga gidýär. Oýun şeýle tertipde dowam etdirilýär.
Oýnuň düzgünleri. Çülçi taýagy getirip, tegelekde goýansoň,
eglenmän bukudakylary gözlemeli.`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Oýny oýnamak
üçin düz meýdan saýlanyp alynýar. Meýdançanyň giňligi, takmynan,
100–120 metr bolsa ýeterlik bolar. Meýdançanyň daşyna hiç hili bellik edilmeýär. Ýöne 7 ýaşdan 12 ýaşa çenli we 12 ýaşdan ýokardaky oýunçylara aýryaýry toparlar bolup oýnamaklyk maslahat berilýär. Oýunçylaryň her biriniň 1–1,5 metr uzynlykda ýylgyndan ýada
söwütden ýasalan egremçe taýaklary bolmaly. Çilik ýerine bolsa,
kiçeňräk mal süňki ýada tokgaja ýylgyn töňňesi, ýogynrak ujy çiş
taýajyk, rezin tennis topy ulanmak bolýar. Meýdançanyň ortasynda
80
giňligi 50 santimetre golaý çukur – “guduk” gazylýar. Oýunçylaryň
sany 8den 12ä çenli bolup biler.
Oýna taýýarlyk. Çilik oýnunyň toparlara bölünmeýän we iki topara bölünip oýnalýan görnüşleri bardyr.
Oýnuň toparlara bölünmän oýnalýan görnüşi. Oýny oýnamak isleýänler jemlenenlerinden soň, gudukdan 15–20 ädim
daşlykda kese çyzyk çyzylýar. Oýna çülçi bellemek üçin oýunçylar çyzygyň daşyndan elindäki taýaklaryny gezekmegezegine guduga zyňýarlar. Kimiň taýagy guduga zyňlan taýaklardan iň uzaga
düşse, şol oýunçy çülçi bolýar. Galanlary bolsa döwçi bolýarlar.
Eger oýunçylaryň hemmesiniň taýaklary deň düşse, onda taýaklary täzeden zyňmaly bolýar. Bu usul tä çülçi belli bolýança dowam
etdirilýär. Eger zyňlan taýagyň egremçesi gudugyň içine doly girip, düýbüne ýetse, oňa “hokga” diýilýär. Eger egremçäniň burny
guduga sallanyp dursa, oňa “üçek”, eger gudugyň üstünde kese
germelip ýatsa, oňa “gapak”, gudugyň çetinde ýatsa, oňa “ýarty
gapak” diýilýär.
Oýnuň oýnalyşy. Çülçi bolan oýunçy çiligi eline alyp, gudugyň
üstünden aşak oklap, guduga düşürjek bolýar. Şol wagt döwçüler
gudugyň töwereginde öz taýaklary bilen çiligi guduga gaçyrmajak
bolup, ony gudukdan daşyna urmaga çalyşýarlar. Eger döwçüleriň
biri taýagy bilen çiligi gudukdan uzaga uraýsa, onda döwçüleriň
hemmesi we çülçi çilige tarap ylgaýarlar. Çülçi döwçülerden öňe
düşüp, çiligi taýagy bilen urup, guduga tarap alyp gaýdyp, ony guduga düşürmäge synanyşýar. Döwçüler bolsa çiligi taýak bilen biri
birlerine berip, gudukdan has daşlaşdyrmakçy bolýarlar. Eger çülçi
çiligi taýagy bilen urup, guduga düşüräýse, onda ol gapdalynda
duran döwçüleriň birini taýagy bilen dürtýär. Taýak bilen dürtülen
döwçi çülçi bolýar,öňki çülçi bolsa döwçüleriň hataryna geçýär.
Eger oýnuň başynda çülçiniň gudugyň üstünden oklan çiligini
döwçüleriň hiç biri taýagy bilen urup bilmän, ony guduga duşürse,
onda hem çülçi töwereginde duran döwçüleriň birini taýagy bilen
dürtmeli. Taýak bilen dürtülen döwçi çülçi bilen ýerini çalyşýar we
oýun täzeden dowam etdirilýär. Eger gudugyň üstünden oklanan çilige döwçüleriň taýaklary degmän, ol gudugyň gyrasynda ýatsa,
onda döwçüleriň hiç biriniň çilige çülçüden öň degmäge haklary
ýokdur. Şol wagt çülçi çaltlyk bilen her hili emelleri ulanyp, çiligi guduga düşürjek bolup synanyşýar. Döwçüler bolsa oňa päsgel
bermäge we çiligi gudukdan has uzaga zyňmaga çalyşýarlar. Eger
gudugyň gyrasynda ýatan çiligi guduga salmak çülçä başardaýsa,
onda ol döwçüleriň birini taýagy bilen dürtýär we çülçülikden çykýar. Eger çülçi çiligi guduga atyp, döwçüleriň birini taýak bilen
dürtüp ýetişmese, onda öňki çülçüligine galýar. Çülçi döwçüleriň
çiligi oýnap ýören wagtynda hem taýagy bilen dürtüp ýetişse, onda
ol çülçülikden çykýar. Oýnuň dowamynda döwçüler çülçüden gaça
durup, taýak bilen dürtdürmejek bolýarlar.
Oýnuň iki topara bölünip oýnalýan görnüşi. Oýunçylar öz aralarynda iki sany öňbaşçy saýlaýarlar. Galanlary ikibirikibir bolup,
gezekligezegine azaşmak bilen güýji deň iki topara bölünýärler. Toparyň öňbaşçylary bije atyşyp, haýsy toparyň döwçüdigini, haýsynyň
bolsa çülçüdigini kesgitleýärler.
Oýnuň oýnalyşy. Oýnuň oýnalyşy edil topara bölünmän oýnalýan görnüşi ýaly, ýöne indi döwçi toparyň oýunçylarynyň oýnaýan
çiligini çülçi toparyň hemme oýunçylary almak üçin hüjüm edýärler.
Çülçi toparyň bir oýunçysy bolsa gudugyň ýanynda, çiligi guduga
saldyrmajak bolup, sakçylyk edýär. Döwçüler çiligi guduga düşürjek
bolup synanyşýarlar, çülçüler bolsa gudugy gorap, çiligi gudukdan
daşlaşdyrmakçy bolýarlar. Eger döwçüler çiligi guduga düşüräýseler,
onda olara bir utuk san berilýär. Çülçüler döwçüler bilen ýerini çalşyp,
oýun täzeden çülçüleriň çiligi guduga oklamaklary bilen başlanýar.
Oýnuň düzgünleri:
1. Oýun wagtynda oýunçylaryň ellerine, aýaklaryna we başga ýerlerine taýak degip, zeper ýetmezlik üçin toparyň oýunçylarynyň
sany 4–5-den köp bolmaly däldir.
2. Çukuryň (gudugyň) ýerine giňligi 50 santimetr bolan tegelek çyzyk hem bolup biler.
3. Çilik oýna girizilenden soň, oňa el degirmek bolmaýar`,
      `Oýnuň oýnaljak ýeri we oňa gerek serişdeler. Hekgal oýnuny oýnamak üçin giň, tekiz meýdança gerek. Meýdançanyň giňligi
takmynan, 100–150 ädim bolmaly. Oýun diňe iki oýunçy bolup oýnalýar. Olaryň hersinde uzynlygy 1 metrden gysga bolmadyk taýagy bolmaly. Uzynlygy 1 sere, ýogynlygy başam barmak ýaly hekgal
taýajygy hem gerek.
Oýna taýýarlyk. Meýdançanyň ortasynda ýalpagrak guduk (çukur) gazylýar. Hekgal taýajygyny gudugyň üstünde germäp goýmaly.
Oýunçylar bije atyşyp, kimiň döwçüdigini we kimiň hekgalçydygyny
kesgitleýärler.
Oýnuň oýnalyşy. Döwçi gudugyň üstüne germelen hekgal
taýajygyny, elindäki taýagynyň ujy bilen aşagyndan ýokaryk galdyryp, şol wagtyň özünde ony meýdançanyň haýsam bolsa bir
tarapyna urýar. Eger taýagyň ujy bilen ýokaryk galdyrylan hekgaly urup bilmese, onda olar ýerlerini çalyşýarlar. Eger döwçi
ýokaryk galdyrylan hekgaly urup bilse, onda hekgalçy hekgal
taýajygynyň düşen ýerinden hekgaly alyp, guduga tarap oklaýar.
83
Hekgalçy hekgaly guduga oklamanka, döwçi öz taýagyny gudugyň üstüne germäp goýýar. Eger oklanan hekgal gudugyň içine
düşse ýada guduga germelen taýaga degse, onda hem oýunçylar
ýerlerini çalyşýarlar. Eger hekgal taýajygy guduga ýetmän, gapdala düşse, onda döwçi hekgal taýajygyny üç gezek urup, gudukdan daşlaşdyrmaga hukuk gazanýar. Ol hekgal taýajygynyň
bir çüňküne urup, ýokaryk bökdürip, ony taýagy bilen urup, gudukdan daşlaşdyrýar. Şeýdip, üçünji gezek hem urup, gudukdan
daşlaşdyranyndan soň, hekgalyň düşen ýeri bilen guduk aralygy
hasaplanýar. Aralyk hekgal boýy bilen ölçenýär. Mysal üçin, bir
oýunçy 100 hekgal boýy diýip çak etse, beýleki 90 hekgal boýy
diýip çaklaýar. Eger döwçiniň çak eden sany guduga ýetmese
ýada gudukdan geçse, onda olar ýerlerini çalyşýarlar. Eger şol
aralyk ölçelip gelinýarkä hekgalyň ujy guduga gaçsa ýada içine
girse, onda öňkiöňkülik bolýar. Eger hekgalçynyň çak eden sany
gabat gelse, onda ol hekgalçylykdan çykýar. Eger gabat gelmese, onda oýun öňküligine dowam etdirilýär. Her gezekde utan
oýunçy bir utuk san gazanýar. Umumy utuk san 100–150ä çenli
bellenilýär. Bellenilen sana ilkinji ýeten oýunçy utan hasap edilýär. Utan oýunça hekgaly gudukdan taýagynyň ujy bilen ýokaryk galdyryp, üç gezek urmaga hukuk berilýär.
Hekgalçy her gezek urlan hekgaly alyp, ýeke aýakda bökjekläp,
uwlap, hekgaly getirip, gudugyň üstünde germäp goýmaly. Şeýdip,
utulanyny boýnuna almaly.
Oýnuň düzgünleri. Hekgal taýajygynyň düşen ýeri bilen gudugyň aralygy ölçelende oýunçylar hekgal taýajygyny ýada elindäki
urýan taýagyny ulanyp bilerler.`,
      `Leňke oýny çagalaryň höwes bilen oýnaýan oýnudyr. Çagalar
bu oýny oýnamak üçin goýnuň ýada geçiniň derisinden 3–5 santimetr bölegi tegeläp, kesip alýarlar. Oňa agramlyk üçin ýörite gurşuny
deriniň ýeňsesinden berkidýärler. Aýagyny agyrtmazlyk üçin gurşun
84
ýasy edilip guýulýar. Gurşunyň iki ýeri sapak geçirmek üçin deşilýär.
Agyrlyk berlen ýüňli leňke aýagyň dabanynyň üsti, daşky we içki
gapdallary bilen urmaga amatly bolmalydyr. Esasanam onuň agramy
çagalaryň ýaş aýratynlyklary bilen bagly bolmalydyr.
Oýnuň oýnaljak ýeri we oňa taýýarlyk. Leňke oýnuny çagalar
howanyň salkyn wagtlary, ýagny güýz, ýaz pasyllary açyk howada
oýnaýarlar. Oýna 3–5 oýunça çenli gatnaşyp biler. Oýna gatnaşýanlaryň her biriniň öz leňkesi bolmalydyr. Oýunçylar bije atyşyp, haýsy
oýunçynyň oýny birinji başlamalydygyny kesgitleýärler. Şondan soň
olar öz aralarynda belli bir sany kesgitleýärler. (100, 150, 200).
Oýnuň oýnalyşy. Leňke oýnunyň birnäçe görnüşleri bardyr.
Oýnuň birinji görnüşi. Oýny birinji başlaýan oýunçy leňkäni
eline alyp, ony ýokary oklap, islendik aýagynyň, dabanynyň içki tarapy bilen leňkäni urup, san gazanyp başlaýar. Her urgudan soň aýagyny ýere degirmeli. Her urga bir san berilýär. Eger oýunçy bellenen
sana leňkäni bir aýagy bilen yzyny üzmän, urup ýetse, onda ol bir
utuk san gazanyp, oýnuň ikinji görnüşine başlaýar. Eger ol bellenilen
sana ýetmän, belli bir sanda leňkäni gaçyrsa, onda gezek nobatdaky oýunça berilýär. Öňki leňkäni gaçyran oýunçy bolsa öz gezeginde
oýny gazanan sanyndan başlaýar.
Oýnuň ikinji görnüşi. Nobatdaky oýunçy leňkäni eline alyp, ony
ýokary oklap, iki aýagynyň, dabanyň içki tarapy bilen leňkäni gezekli
gezegine urýar. Her aýagy bilen urlan leňkä bir san berilýär. Şu tertipde kim ilkinji bellenilen sana ýetse, onda oňa bir utuk san berilýär.
Oýnuň beýleki düzgünleri oýnuň birinji görnüşindäki ýaly.
Oýnuň üçünji görnüşi. Nobaty gelen oýunçy leňkäni eline alyp,
ony ýokary oklap, bir gezek bir aýagynyň dabanynyň içki tarapy
bilen, ikinji gezek beýleki aýagynyň dabanynyň daşky tarapy bilen
urýar. Her aýagy bilen urlan leňkä iki san berilýär. Oýunçylaryň özara
gürleşmekleri bilen leňkäni bir aýagynyň dabanynyň içki we daşky
tarapy bilen hem urup bilerler. Her urgudan soň, aýagyny ýere degirmelidirler. Şu tertipde kim bellenilen sana öň ýetse, onda oňa bir utuk
san berilýär.
Oýnuň dördünji görnüşi. Oýunçy leňkäni eline alyp, ony ýokaryk oklap, bir aýagynyň dabanynyň içki tarapy bilen aýagyny ýere
85
degirmän, hetjiklemek bilen leňkäni urup, san gazanýar. Her urga iki
san berilýär. Şu tertipde kim bellenilen sana ilki ýetse, onda oňa bir
utuk san berilýär.
Oýnuň bäşinji görnüşi. Oýunçy elindäki leňkäni ýokaryk oklap,
onuň yzyndan özi hem ýokarlygyna böküp, leňkäni urýan aýagyny
beýleki aýagynyň içinden geçirip, dabanyň içki tarapy bilen urup,
utuk san gazanýar. Şu tertipde leňkäni ýere gaçyrman, oýny dowam
etdirýär. Her urga on san berilýär. Kim bellenilen sana ilki ýetse, onda
oňa bir utuk san berilýär.
Oýnuň altynjy görnüşi. Oýunçy elindäki leňkäni ýokary oklap,
onuň yzyndan özi hem ýokarlygyna böküp, leňkäni urýan aýagyny
beýleki aýagynyň ýeňsesinden geçirip, dabanyň içki tarapy bilen
urup, san gazanýar. Her urga on bäş san berilýär.
Oýnuň ýedinji görnüşi. Oýunçy iki aýagyny ýerde jüp goýup,
elindäki leňkäni ýokary oklap, leňkäni ýere gaçyrman, böküp, jüp
aýagynyň daraklygynyň üsti bilen ony urup, san gazanýar. Her urga
25 san berilýär. Kim bellenilen sana ilki ýetse, onda bir utuk san berilýär.
Oýnuň düzgünleri:
1. Leňke oýnunyň hemme görnüşlerini goşup, bir oýun görnüşinde
ýada oýnuň görnüşlerini aýryaýrylykda hem oýnap bolýar.
2. Her urga berilýän sanlar oýunçylaryň ylalaşygyna baglydyr. Olaryň ýaş aýratynlyklary, oýnuň çylşyrymlylygy göz öňünde tutulyp kesgitlenimelidir.
3. Oýunçylar aýaklary bilen leňkäni uranlarynda olaryň aýaklary
agyrmaz ýaly, aýaklaryna gonçly, ökjesiz, rezin aýakgap geýmeklik maslahat berilýär.`,
    ],
  },
  chapter3: {
    id: "III. Suwda oýnalýan Türkmen milli oýunlary",
    items: ["Şallak", "Öwhä"],
    texts: [
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Şallak oýnuny oýnamak
üçin deňizderýalaryň, suw olumlaryň, howuzlaryň ýalpagrak ýerleri
saýlanyp alynýar. Oýna gatnaşýan oýunçylaryň sanyna görä, oynaljak ýer çäklendirilýär. Çäklendirilen ýeriň her çetinde bellik goýulýar.
Şondan soň oýunçylar öz aralarynda bije atyşyp, sanawaç sanaşyp,
bir oýunçyny çülçi saýlaýarlar. Beýleki oýunçylar döwçi bolýarlar.
Döwçüler suwuň gyrasynda ýüzlerini suwa tarap edip, hatara düzülip
durýarlar. Çülçi bolsa olardan on metr yzagrakda durýar.
Oýnuň oýnalyşy. Çülçi belli bir sana (10–15) çenli sanaýar. Şol
wagt döwçüleriň hemmesi suwa urup, çäklendirilen meýdançadan
çykman dargaýarlar. Çülçi bellenilen sana çenli sanap, ol hem ylgap
özüni suwa urup, döwçüleri kowalap başlaýar. Çülçi suwda ýüzüp, çümüp, her dürli hereketleri edip, döwçüleriň yzyndan ýetip, onuň kellesine elini degirmäge synanyşýar. Döwçüler bolsa çäklendirilen ýerden
çykman, çülçüden gaçyp, oňa ýetdirmejek bolup synanyşýarlar. Eger
çülçi döwçüleriň biriniň yzyndan ýetip, onuň kellesine elini degirse,
87
onda döwçi çülçi bolýar, çülçi bolsa döwçi bolýar. Oýun şu tertipde
dowam etdirilýär.
Oýnuň düzgünleri:
1. Çülçi döwçüleriň yzyndan ýetip, elini diňe kellesine degrenden
soň, çülçülikden çykýar.
2. Täze çülçi özüniň çülçüdigini hemme oýunçylara elini galdyryp,
mälim etmelidir.
3. Oýnuň başga görnüşinde meýdançanyň çäginden çykman, çülçi
döwçüleriň biriniň yzyndan ýetip, onuň islendik ýerine elini degrip bilse,
onda olar ýerlerini çalyşýarlar we oýun täzeden dowam etdirilýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlvk. Bu oýun suwuň ýalpak
ýerinde oýnalýar, ýagny suw çagalaryň guşaklygyndan ýokary bolmaly däldir. Oýunçylar öz aralarynda iki topara bölünip, suwuň içinde
ýüzbeýüz, iki hatar bolup durýarlar. Iki hataryň arasy 1–1,5 metr bolmaly. Oýna gatnaşýanlardan birini emin edip goýýarlar.
Oýnuň oýnalyşy. Eminiň rugsady bilen iki toparyň oýunçylary biri
birlerine elleri bilen suw sepişýärler. Haýsy oýunçy suw sepişmekde ýadap dursa, sepilen suw batly ýüzüne degip, arkan öwrülse, aljyrap, suwa
çümse, onda ol oýundan çykarylýar. Şu tertipde haýsy topar suw sepişip,
garşydaşynyň hemme oýunçysyny oýundan çykarsa, onda şol topara bir
utuk san berilýar. Haýsy topar köp utuk san gazansa, şol hem utýar.
Oýnuň düzgünleri. Oýunçylar ýüzbeýüz iki hatar bolup, suw
sepişenlerinde, biribirlerine ellerini degirmeli däldirler.`,
    ],
  },
  chapter4: {
    id: "IV. Aşyk bilen oýnalýan oýunlar",
    items: [
      "Tändirme",
      "Jikge - jikge",
      "Üçem",
      "Çagşal",
      "Üç daban",
      "Ajydyp almak",
      "Gapakly",
      "Sürpek",
      "Eliň arkasy bilen gapmak",
    ],
    texts: [
      `Bu oýun aşyk oýunlarynyň içinde iň gyzyklysy, çylşyrymlysydyr.
“Tändirme” oýnuny tejribeli oýunçylar ussatlyk bilen oýnaýarlar.
Oýun açyk howada, tekiz meýdançada oýnalýar. Oýna 4–6 oýunçy
gatnaşyp biler.
Oýna taýýarlyk. Oýna gatnaşýan oýunçylaryň her biri orta bir
aşygy oklamaly. Her oýunçynyň aşygy tanalar ýaly, dürli reňkde
bolmalydyr. Oýunçylaryň razyçylygy bilen bir oýunça ýere oklanan
aşyklary sülmäge ygtyýar berilýär. Bu oýunda aşyklar ýokary oklanyp sülnende, olaryň alçy ýada towha gopuşyna, tükge ýada jikge
ýatyşyna baglydyr. Haýsysynyň artyk hukuga, ygtyýara eýediklerine
görä, şeýle orun berilýär:
Birinji orun “alça” berilýär.
Ikinji orun “towha” berilýär.
Üçünji orun “tükgä” berilýär.
Dördünji orun “jikgä” berilýär.
Tändirme diýmek – bir ýatan aşygy ikinji bir aşyk bilen urup,
beýlesine öwürmekdir, ýagny jikge ýatan aşygy tükgä, tükge ýatan
aşygy jikgä öwürmekdir.
90
Oýnuň oýnalyşy. Sülmäge ygtyýar berlen oýunçy ýere oklanan
dürli reňkdäki aşyklary eliniň aýasyna alyp, ýokary oklap sülýär. Sülnende aşyklaryň ikisi alçy, ikisi hem towha gopsa, onda aşyklar täzeden sülünýär. Eger aşyklar sülnende olaryň biri alçy gopsa, beýleki
aşyklar tükge ýatsa, onda alçy gopan aşygyň eýesi hemme tükge ýatan aşyklary alýar we oýun täzeden başlanýar. Eger aşyklar sülnende
onuň biri towha gopsa, beýlekileri jikge ýatsa, onda towha gopanyň
eýesi hemme jikge ýatan aşyklary alýar we oýun täzeden başlanýar.
Eger aşyklar sülnende onuň biri alçy gopsa, biri tükge ýatsa, onda
alçy gopanyň eýesi tükge ýatan aşygy alyp, jikge ýatan aşyklary ýeke
ýekeden tändirýär, eger iki tükge, bir jikge ýatsa, onda tükge ýatanlary alýar we jikge ýatany tändirýär. Eger aşyklar sülnende biri towha
ýatsa, biri jikge ýatsa, onda towha gopanyň eýesi jikge ýatan aşygy
alyp, tükge ýatanlary tändirýär. Eger iki jikge, biri tükge ýatsa, onda
jikge ýatanlary alýar we tükge ýatany tändirýär.
Alçy gopan aşygyň eýesi jikge ýatan aşyklary ýekeýekeden öz
aşygy bilen urup, tükge görnüşinde tändirmäge başlaýar. Eger urlan
aşyk tänip, tükge ýatsa, öz aşygam jikge ýatsa, onda ol hemme ýerde
ýatan aşyklary utdurýar. Muňa “iýdi” diýilýär. Eger towha gopan
aşygyň eýesem tändireneninde şular ýaly ýagdaý bolsa, onda ol hem
aşyklaryny “iýdirýär”. Şu tertipde oýun dowam etdirilýär.
Oýnuň düzgünleri:
1. Aşyk utduran oýunçylar reňkli aşyklaryň ýerine başga aşyk berip
bilerler.
2. Eger tändirýän we tändirilýän aşyklaryň biri alçy, birem towha
gopsa ýada ikisem alçy ýada towha gopsa, onda her kim öz aşygyny alyp, oýun täzeden dowam etdirilýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Oýun tekiz meýdançada
oýnalýar. Oýna 5–6 oýunçy gatnaşyp biler. Oýna gatnaşýanlar meýdançada göni çyzyk çyzyp, şerte görä, olaryň hersi 2–3 aşygy çyzykda
91
hatara düzüp goýýarlar. Soňra olar bije atyşyp, nobat belleşýärler we
pellehananyň çyzygynam çyzýarlar.
Oýnuň oýnalyşy. Oýunçylar nobatmanobat pellehanadan kenekleri bilen aşyklary atyp, urmaga başlaýarlar. Eger kimiň kenegi
aşyga degip, ol aşyk kenek bilen bir görnüşde jikge ýada tükge ýatsa,
onda ol aşygy özüne alýar we ol ýene kenegiň ýatan ýerinden aşyklary atmaga hukuk gazanýar. Eger urlan aşyk kenek bilen bir görnüşde
ýatmasa, onda nobat beýleki oýunça geçýär. Beýleki oýunçylar hem
şu tertipde oýny dowam etdirýärler. Haýsy oýunçy köp aşyk alsa, şol
hem utýar.
Oýnuň düzgünleri. Oýunda kenek aşyklar bilen birmeňzeş alçy
ýada towha gopsa, onda ol hasap edilmeýär we aşyklar täzeden çyzykda dikilýär. Nobat beýleki oýunça geçýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Bu oýun oglan-gyzlaryň arasynda iň bir giňden ýaýran oýunlaryň biridir. Oýun gündizine
daşarda, gijelerine bolsa bir öýe ýygnanyşyp oýnalýar. Oýunçylaryň
sany 2den 5–6a çenli bolup biler. Oýny oýnamak üçin oýunçylar üç
sany sagdyn aşygy saýlap, utuk san toplamak üçin 20, 30, 50 ýaly belli bir sany belleýärler. Şondan soň olar bije atyşyp, kimiň oýny ilkinji
başlamalydygyny kesgitleýärler.
Oýnuň oýnalyşy. Bijesi çykan oýunçy aşyklary alyp, ýokary
oklap sülýär. Utuk san gazanmak sülnen aşyklaryň ýerde ýatyşyna
baglydyr. Eger aşyklar üç alty ýada üç towhy gopsa, üç tükge ýada
üç jikge ýatsa, onda aşyk sülen oýunçy üç utuk san gazanýar we oýny
dowam etdirýär. Eger sülnen aşyklar ýere “ala” düşse, ýagny dürli
görnüşde biri alçy, biri jikge, biri towha we ş.m. onda sülme nobaty
beýleki oýunça geçýär. Oýun şu tertipde dowam edýär. Kim bellenilen sana ilki ýetse, şol hem utýar.
Oýnunyň başga görnüşleri. Oýnuň bu görnüşinde hemme sülnen aşyklar bir görnüşde ýatsalar, onda sülen oýunçy utuk san alýar.
92
Soňra ol ýenede sülýär. Eger bu gezek aşyklaryň ikisi tükge, üçünjisi hem jikge ýatsa, onda aşyk sülen oýunçy jikge ýatan aşygy pitikläp, tükge ýatan aşygyň birine degirse, onda ol bir utuk san gazanýar we oýny dowam etdirýär. Eger ol bir aşygy pitikläp, beýlekä
degrip bilmese, onda nobat indiki oýunça geçýär. Eger sülnen aşyklar “ala” ýatsa, biri tükge, biri jikge, biri alçy bolsa ondada sülme
nobaty beýleki oýunçylara geçýär. Oýun şu tertipde dowam edýär.
Kim bellenilen sana ilki ýetse, şol hem utýar.
Aşyklar sülnende iki aşyk alçy, biri towha gopsa, onda towha
gopan aşygy alçy gopdurmak üçin ony üç gezek sülmäge rugsat
berilýär. Eger ol üç gezegiň içinde alçy gopsa, onda sülen oýunça bir
utuk san berilýär. Eger aşyklar sülneninde iki aşyk towha, biri alçy
gopsa, onda alçy gopan aşygy hem üç gezek sülmeli. Sülýän oýunçy
alçy gopan aşygyny towha gopduryp biläýse, onda ol bir utuk san
gazanýar. Eger sülnen aşyklar “ala” ýatsa, onda sülme gezegi nobatdaky oýunça berilýär. Şu tertipde kim bellenilen sana öň ýetse, şol
hem utýar.
Bijesi çykan oýunçynyň, sülen aşyklarynyň üçüsem alçy gopsa,
onda oňa üç utuk san berilýär. Eger üç towha gopsa, iki utuk, üç
tükge ýada üç jikge ýatsa, bir utuk san berilýär. Utuk san gazanan
oýunçylaryň ikinji sapar sülen aşyklarynyň üçüsi alçy gopsa, onda
oňa dokuz utuk san berilýär. Eger üçüsi towha gopsa, alty utuk, üç
tükge ýada üç jikge ýatsaüç utuk san berilýär. Sülnen aşyklar „ala”
ýatsa, onda sülme gezegi nobatdaky oýunça berilýär. Oýun şu tertipde oýnalyp, kim bellenilen sana ilki ýetse, şol hem utýar. Bellenilen
sana ilki ýeten (utan) oýunçy beýleki oýunçylar hem şol sana ýetýänçä, garaşmaly bolýar. Netijede kim yza galyp bellenen sana ýetse,
onda oňa degişme äheňinde (oturupturmak, togalamak, aşyr atmak,
aýdym aýtmak, goşgy okamak, tans etmek) ýaly ýumuşlar berilýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Bu oýun salkyn günler
açyk howada oýnalýar. Oýny oýnamak üçin tekiz meýdança saýlanyp
alynýar. Oýunçylaryň ýaş aýratynlyklaryna görä, meýdançada tegelek
93
çyzylýar. Tegeliň ortasynda aşyk diker ýaly göni çyzyk geçirilýär. Oýna
5–6 oýunçy gatnaşyp biler. Olaryň her biri iki aşykdan ortaky çyzygyň
üstünde dikýärler. Oýna gatnaşmaýan oglanlardan birini emin belleýärler.
Şondan soň oýunçylaryň ylalaşygy bilen tegelek çyzygyň iki tarapyndan
belli bir uzaklykda çyzyk çyzylyp, pellehana bellenilýär. Oýnuň emini
oýunçylara keneklerini ýokary oklap, süldürip, nobatlaryny belli edýär.
Oýnuň oýnalyşy. Nobaty birinji çykan oýunçy pellehananyň çyzygyny basman, öz kenegi bilen tegelegiň ortasynda dikilen aşyklary
urup, tegelek çyzykdan çykarmaga synanyşýar. Eger atylan kenek aşygy urup, tegelek çyzykdan çykarsa, onda çyzykdan çykan aşygy alyp,
ol tegelek çyzygyň daşyndan ýenede kenegi bilen aşyklary urmaga hukuk gazanýar. Eger ol ýenede aşygy urup, tegelek çyzykdan çykarsa,
onda ol ýenede şol tertipde oýny dowam etdirýär. Eger aşygy urup,
tegelek çyzykdan çykaryp bilmese, onda kenek atmak nobaty beýleki
oýunça berilýär. Şeýlelikde, oýun şu tertipde tegelek çyzykdaky aşyklaryň hemmesi kenek bilen urlup, daşyna çykarylýança dowam edýär.
Oýnuň düzgünleri:
1. Oýunçylar pellehanada ýada tegelek çyzygyň daşyndan kenegini aşyklardan atanynda çyzyklary basmaly däldir.
2. Tegelekdäki aşyk bilen tegelek çyzygyň arasy bir garyşdan az
bolsa, onda ony kenek bilen çiltip, urmak bolýar. Eger arasy bir
garyşdan kän bolsa onda oňa elini uzadyp, çiltip urmak bolmaýar.`,
      `Oýnuň oýnaljak ýeri. Oýun tekiz meýdançada oýnalýar. Oýna
ýany kenekli we aşykly iki we ondanam köp oýunçy gatnaşyp biler.
Oýna taýýarlyk. Bu oýny oýunçylar bir kenekli we iki kenekli
oýnap bilerler. Meýdançanyň ortasynda oýunçylar keneklerine görä,
aşyklary biribirine degmez ýaly aralykda dikip goýýarlar. Dikilgi duran aşyklardan on ädim çemesi daşlykda kese çyzyk çyzylýar.
Şondan soň oýunçylar gezek bellemek üçin keneklerini ýokary
oklap sülýärler. Kimiň kenegi alçy gopsa, şol birinji, kimiňki towha
gopsaikinji, galanlary ýenede şu tertipde sülşüp, gezek alýarlar.
94
Oýnuň oýnalyşy. Oýunçylar kenegi başam barmak bilen süýem barmagyň arasynda pyrlap, öz gezegi gelýänçä, bellenilen kese çyzykda garaşyp durýarlar. Gezegi birinji çykan oýunçy çyzygyň daşyndan hatara duran aşyklary nyşana alyp, kenegi batly atýar. Eger atylan kenek aşygy urup,
daşa göçürse, onda aşygyň düzülen ýerinden düşen ýerine çenli daban bilen ölçenilýär. Aralyk üç dabana ýetse, onda ol uran aşygyny alyp, kenegiň
ýatan ýerinden düzülen aşyklara tarap kenegini atmaga hukuk gazanýar.
Oýun şu tertipde tä hemme aşyk alynýança, dowam edýär. Eger gezegi
birinji alan oýunçynyň kenegi aşyklara degmese ýada degip, aşygyň arasy
üç dabandan az bolsa, onda kenek atmak gezegi indiki oýunça geçýär.
Oýnuň düzgünleri:
1. Kenegi çyzygyň daşyndan çyzygy basman atmaly.
2. Iki kenek bilen oýnaýan oýunçy orta iki aşyk dikenligi üçin iki
adam oýnaýanlygy hökmünde bolmaly.
3. Urlup göçürilen aşygyň arasy üç dabandan az bolsa, onda aşygy
öňki ýerinde düzüp, kenek atmak gezegi indiki oýunça geçýär.`,
      `Bu oýnuň hem oýnaljak ýeri we oýna taýýarlygy edil “Üç daban”
oýnunyňky ýaly.
Oýnuň oýnalyşy. Gezegi birinji çykan oýunçy bellenilen çyzykdan ortada düzülen aşyklara kenegi çenäp atýar. Eger atylan kenek
aşyga degip, ýerinden göçürse, kenegem togalanyp, alçy gopsa, onda
ol aşygy alyp, kenegiň düşen ýerinden kenegi bilen düzülen aşyklary
atmaga hukuk gazanýar we oýny dowam etdirýär. Eger atylan kenek
aşyklara degmese, degsede alçy gopmasa, onda gezek indiki oýunça
berilýär. Oýun tä düzülen aşyklar urlup gutarýança, dowam edýär.
Netijede, köp aşyk alan ýeňiji bolýar.
Oýnuň düzgünleri:
1. Oýny bir ýa-da iki kenekli oýnamak bolýar.
2. Urlup göçen aşyklaryň arasy daban bilen ölçenilmeýär.
3. Atylan kenek aşyga degip, alçy gopmasa, onda ol aşygy ýerinde
goýup, gezegi beýleki oýunçylara berýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Bu oýun güýz, gyş aýlary
gara öýüň içinde, eýwanda, öýde gazanyň gapagynyň ýada islendik
tagta gapagyň üstünde oýnalýar. Oýny 3–4 oýunçy bolup oýnaýarlar. Oýnamak nobaty sanawaç üsti bilen ýada aşyklary sülmek arkaly
belli edilýär. Oýny oýnamak üçin her oýunçy bir aşykdan orta goýýar.
Oýnuň oýnalyşy. Nobaty birinji çykan oýunçy aşyklary alyp, gapagyň üstüne ýokary oklap sülýär. Sülnen aşyklaryň içinde birmeňzeş
ýatany bar bolsa, onda sülen oýunçy olaryň birini beýlekisi bilen pitikläp, urup, gapakdan gaçyrmaly. Gapakdan gaçyran aşygyny özüne alyp, beýleki birmeňzeş ýatan aşyklary pitikläp, urup, gapakdan
düşürmäge hukuk gazanýar. Eger ol aşygy pitikläp, urup bilmese
ýada urup gapakdan gaçyrmasa, onda oýnamak nobatyny beýleki
oýunçy alýar. Oýun şu tertipde gapakdaky aşyklaryň hemmesi urlup,
ýere gaçyrylýança, dowam edýär. Kim köp aşyk alsa, şol hem utýar.
Şu oýnuň başga görnüşinde:
1. Nobaty gelen oýunçynyň gapagynyň üstüne sülen aşyklary alçy
ýada towha gopsa, onda alçy gopan aşygyň eýesi tükge ýatan
aşygy alýar. Towha gopan aşygyň eýesi bolsa jikge ýatan aşygy
alýar. Eger aşyklar sülnende alçy ýada towha gopmasa, onda sülen
oýunçy aşyklary biribiri bilen pitikläp, urup, gapakdan gaçyrmaly.
2. Nobaty gelen oýunçynyň gapagyň üstüne sülen aşyklary alçy ýada
towha gopsa, onda onuň eýeleri özüniň tükge ýada jikge ýatan aşyklaryny pitikläp, tändirip ýada pitikläp urup, gapakdan gaçyryp almaly.
Oýnuň düzgünleri:
1. Eger oýunçynyň pitikleýän aşygy beýleki aşyga degip ýada degmän, gapakdan gaçsa, onda beýleki urlan aşygyň eýesi gapakdan
gaçan aşygy almaly ýada onuň eýesi oňa derek başga aşyk bermeli.
2. Eger oýunçynyň pitikleýän aşygy tändiriljek aşyga degip, onuň
bilen togalanyp, gapakdan bile gaçsa, ondaol şol gezekki oýunda
utan aşyklaryny orta goýmaly.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Oýny oýnamak üçin
tekiz meýdançada giňligi 2–3 metr bolan tegelek çyzyk çyzylýar.
Tegelegiň ortasynda aşyk diker ýaly göni çyzyk geçirilýär. Oýna
gatnaşýan oýunçylar özara gürleşip, ortada dikmeli aşyklaryň sanyny kesgitleýärler. Aşyklaryň arasy sürpek giňişliginde dikilýär. Dikilen aşyklardan 10–15 ädim daşlykda pellehana kese çyzyk bilen
bellenilýär. Oýny bir sürpek bilen ýada her oýunçy öz sürpegi bilen
oýnap biler. Oýunçylar öz aralarynda bije atyşyp, nobat belleýärler.
Sürpekuly malyň pilçe süňkünden ýörite ýasalan “leperem” bolup
biler, düýäniň ýada sygryň ýylmanak “topazyny”, gurşundan guýlan topazy, ýylmanak sürpek daşy, ýasy ýylmanak gaty demri, atyň
aýagyndan sürtülip, ýukalyp gaçan naly, kesilip alnan gataňsy rezin
çekini hem ulanyp bilerler.
Oýnuň oýnalyşy. Nobaty birinji çykan oýunçy pellehanadan
çyzygy basman, tegelegiň içinde dikilgi aşyklardan çenäp, sürpegini ýerden sürpäp atýar. Atylan sürpek aşyklara degip, olary tegelek
çyzykdan daşyna çykarsa, onda sürpegini oklan oýunçy daşyna çykan aşyklary alyp, sürpegiň ýatan ýerinden galan aşyklary sürpek
bilen urup, tegelekden çykarmaga hukuk gazanýar. Eger oýun şu
tertipde dowam edip, şol bir oýunçy hemme aşyklary sürpek bilen
urup, tegelekden çykarsa, onda ol şol tapgyry utýar we oýun täzeden
başlanýar. Eger nobatdaky oýunçynyň atan sürpegi aşyklara degmese, degsede tegelek çyzykdan çykmasa, onda sürpek atmak nobaty
beýleki oýunça berilýär. Oýun şu tertipde oýnalyp, tä iň soňky aşyk
tegelekden çykýança, dowam edýär. Kim köp aşyk alsa, şol hem
utýar.
Oýnuň düzgünleri. Sürpek bilen urlan aşyk tegelek çyzygyň
üstünde ýatsa, onda ol aşygy orta oklamaly.
Oýnuň başga görnüşleri. Eger atylan sürpek aşygy tegelekden
çykaryp, özi tegelegiň içinde galsa, onda beýleki oýunçylaryň biri
sürpegi alyp, aýagynyň daraklygynyň üstünde goýup, bat bilen tegelegiň daşyna zyňýar. Sürpegiň eýesi, sürpegiň düşen ýerinden sürpegini aşyklara atyp, oýny dowam etdirýär.`,
      `Oýnuň oýnaljak ýeri we oňa taýýarlyk. Bu oýun daşarda
açyk howada ýada öýde oturyp oýnalýar. Oýny gyzlar öz aralarynda ýada oglanlar bilen gatyşyp, oýnap bilerler. Oýny oýnamak üçin 3 sany kiçiräk (guzynyň ýada keýigiň) aşygyny saýlap
almaly. Oýun iki oýunçynyň arasynda oýnalýar. Şonuň üçin olar
bije atyşyp, kimiň oýny birinji başlamalydygyny kesgitleýärler.
Oýnuň oýnalyşy. Bijesi çykan oýunçy üç aşygy bir eliniň
aýasyna alyp, ýokary oklap, şol eliniň arkasy bilen gapmaly.
Eger ol aşyklaryň üçüsinem gapsa, onda galan aşyklaryny eliniň arkasy bilen ýokary oklap, şol eliniň aýasy bilen gapmaly.
Oýunçy aşyklary şu tertipde oklapgapyp bilse, onda ol bir utuk
san gazanýar. Eger ol oklan aşyklaryny eliniň arkasy bilen gapyp
bilmese ýada birini gaçyrsa, onda aşyk oklama gezegi beýleki
oýunça geçýär. Oýun şu tertipde oýnalyp, kim köp utuk san gazansa, şol hem utýar.
Oýnuň düzgünleri. Aşyklary eliniň arkasy bilen gapan
oýunçy aşyklary ýokary oklan eliniň aýasy bilen gapyp bilmese,
onda ol indiki nobaty aşyklary eliniň arkasy bilen oklamakdan
başlamaly`,
    ],
  },
  chapter5: {
    id: "V. Bije atmagyň usullary we sanawaçlar",
    items: [
      "Haýsy elimde? Bil!",
      "Çöp sogurmak",
      "Dähedem - dessem",
      "Oýunçylary iki topara bölmegiň usullary",
      "Taýak tutamlaşmak",
      "Jüpbäp böküşmek",
      "Barmagyň ujunda taýagy kim köp saklaşmaşak",
      "Sanawaçlar",
    ],
    texts: [
      `Oýny haýsy toparyň ilki başlamalydygyny kesgitlemek üçin
ýolbaşçy iki toparyň öňbaşçysyny ýanyna çagyrýar. Ýolbaşçy iki öňbaşçynyň öňünde durup, eliniň aýasyny açyp öňe uzadýar. Soň ol bir
eliniň aýasynda kiçiräjik bellik (şaý, monjuk, ilik, daş, kesek, çöp we
ş.m.) goýup, eliniň aýasyny ýumýar we elini arkasyna geçirip, görkezmän, belligi eldenele geçirip, ýumrugyny düwüp, öňe uzadýar
we: “Haýsy elimde? Bil!” — diýip ýüzlenýär. Öz islegi boýunça haýsy ilki elini uzadyp görkezse, bije atyldygy hasaplanýar. Bije atylanda ilki elini uzadyp görkezen öňbaşçy bilse, onda onuň topary oýny
birinji başlaýar. Egerde ol bijäniň ýolbaşçynyň haýsy elindedigini
dogry bilmese, onda beýleki öňbaşçynyň topary oýny birinji başlaýar`,
      `Ýolbaşçy eline 5 santimetrden uly bolmadyk iki sany çöp alyp, iki
toparyň öňbaşçysyny ýanyna çagyrýar we olara çöpleri görkezip, biriniň ujuny döwüp, ony gysgaldýar. Soň ýolbaşçy elini arkasyna tutup,
görkezmän, çöpleriň ýerini çalyşýar. Ol bir eliniň başam barmagy bilen süýem barmagynyň arasyndan çöpleriň deň ujuny çykaryp, uzadyp:
“Çöpi sogurýar” diýýär. Haýsy öňbaşçy birinji çöpi sogursa, bije atyldygy
hasaplanýar. Uzyn çöpi çykaran öňbaşçynyň topary oýny birinji başlaýar.`,
      `Iki toparyň öňbaşçysy islendik aralykda ýüzbeýüz durup, ýolbaşçynyň rugsady bilen biribirine tarap dähedemdessem edip
baglaýarlar. Dähedemdessemde aýagynyň ökjesini beýleki aýagynyň
başam barmagyna degrip, hereket edýär. Haýsy öňbaşçynyň aýagy
beýleki öňbaşçynyň aýagynyň burnuny bassa, şol öňbaşçynyň bijesiniň utdugy hasaplanýar we oýny birinji başlaýar.`,
      `Oýunçylaryň razyçylygy esasynda ýolbaşçynyň görkezmesi bilen iki sany öňbaşçy bellenilýär. Galan oýunçylar meýdança pytrap,
her oýunçy özüne deň oýunçyny tapyp, elinden tutuşyp, meýdançanyň
çetine çykyp, azaşmaga gidýärler. Şol ýerde oýunçylar öz ýaranlary
bilen özlerine at dakýarlar (mysal üçin, biri Aý, biri Gün, derýadeňiz,
gyzylkümüş, ýergök, atit we ş.m.). Her ýaran öňbaşçylaryň ýanyna
baryp: “Han aga, Aý gerekmi Gün?!” diýýärler. Öňbaşçylar gezekli
gezegine azaşyp gelen ýaranlaryň adyny tutup, birisi Aý gerek, beýlekisi Gün gerek diýýär. Ady tutulan Aý adyny tutan öňbaşçynyň tarapyna geçýär. Şeýdip, oýunçylaryň hemmesi iki topara bölünýärler.`,
      `Oýna haýsy toparyň ilki başlamalydygyny kesgitlemek üçin
“taýak tutamlaşmak” usuly ulanylyp bilner. Ýolbaşçy toparlaryň öňbaşçylaryny ýanyna çagyryp, “Ýeditop”, “Topargaçdy” oýunlarynda oýnalýan taýagy alyp, öňbaşçylaryň birine tarap taýagy dikligine
oklaýar. Taýak oklanan öňbaşçy taýagy dikligine ýeke eli bilen gapyp,
tutamlaşýar we elini öňe uzadýar. Beýleki öňbaşçy uzadylan taýagyň
tutamlan eliniň üstünden taýagy tutamlaýar. Ýenede öz gezeginde
beýleki öňbaşçy onuň eliniň üstünden tutamlaýar. Şeýdip, olar taýagyň ýokarky ujuna çenli tutamlaşýarlar. Iň soňky gezek taýagy doly
tutamlan öňbaşçynyň topary oýna ilki başlaýar.`,
      `Oýunçylar iki topara bölünip, özlerine öňbaşçy saýlaýarlar. Islendik ýerden çyzyk çyzylyp, pellehana belleýärler. Bije atyşyp,
haýsy toparyň öň başlamalydygy kesgitlenýär. Şondan soň birinji
başlaýan topar pellehananyň çyzygynyň daşynda yzlyyzyna hatara
100
durýar. Ýolbaşçynyň rugsady bilen toparyň bir oýunçysy çyzygy basman, aýagyny jüp goýup, duran ýerinden öňe bökýär. Böken aralygyna aýagynyň ökjesinden bellik edilýär. Şol toparyň ikinji oýunçysy
bellenen bellikden öňe bökýär. Şeýdip hemme oýunçylar gezekme
gezek bökýärler. Beýleki toparyň oýunçylary iň soňky bellikden yzyna – pellehana tarap gezekmegezek bökýärler. Eger iň soňky oýunçy
pellehananyň çyzygyndan geçse, onda şol toparyň bijede utdugy, pellehananyň çyzygyna ýetmese, onda bijede utuldygy hasap edilýär.`,
      `Ýolbaşçy iki toparyň öňbaşçylaryny ýanyna çagyryp, bijäni kimiň öň başlamalydygyny kesgitleýär. Şondan soň ilki başlaýan öňbaşçy taýagy başam barmagynyň ujunda dik saklamaga synanyşýar.
Taýak barmagyň ujunda saklanyp başlanyndyn wagt bellenilýär.
Haýsy öňbaşçy taýagy barmagyň ujunda köp saklasa, şol topar bijede
utdugy hasap edilýär.`,
      `Toparlara bölünmeýän oýunlary bir oýunçyny goraýjy, awçy, balykçy, möjek, gurt, it, tilki, şagal we başgalary saýlamak üçin sanawaja ökde oýunçyny öňe çykarýarlar. Oýunçylar her hili ýagdaýda
düzülip, durup bilerler. Mysal üçin, bir setre, ýarym tegelege, tegelek
düzülip, durup bilerler. Sanawajy sanaýan oýunçy haýsyda bolsa bir
çetde duran oýunçydan başlap, sanawajyň her sözünde bir oýunça
barmagyny uzadyp, çepden saga sanap başlaýar. Sanawajyň iň soňky
sözüne gabat gelen oýunçy olaryň arasyndan ýekeýekeden çykyp,
döwçi bolýarlar. Iň soňunda iki sany oýunçynyň arasynda sanawaç
sanalýar, olaryň haýsysynda sanawaç gutarsa, ol hem döwçi bolýar.
Soňuna galan oýunçy bolsa, oýnuň goraýjysy bolýar. Sanawaç sanaýan oýunçy sanawaçdan boşadylýar.`,
    ],
  },
};

function generateChapter() {
  for (const key in chapters) {
    let chapter = document.createElement("div");
    chapter.setAttribute("class", `chapter ${key}`);
    let p = document.createElement("p");
    p.innerHTML = `${chapters[key].id}`;
    chapter.appendChild(p);
    for (let i = 0; i < chapters[key].items.length; i++) {
      let item = document.createElement("button");
      let br = document.createElement("br");
      item.setAttribute(
        "onclick",
        `openGame(chapters.${key}.id, chapters.${key}.items[${i}], chapters.${key}.texts[${i}])`
      );
      item.innerHTML = `<h1>${i + 1}. ${chapters[key].items[i]}</h1>`;
      chapter.appendChild(item);
      chapter.appendChild(br);
    }
    if (key === "chapter1") firstRow.appendChild(chapter);
    else secondRow.appendChild(chapter);
  }
}
generateChapter();