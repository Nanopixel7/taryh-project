//* Begin | Putting coordinated div's to HTML
const coordinatedDivs = {
  alph16: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "j",
    "h",
    "i",
    "g",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
  ],
  playGround: document.getElementById("playground"),
  words: {
    a1: "B",
    a2: "A",
    a3: "T",
    a4: "H",
    a5: "E",
    a6: "B",
    a7: "E",
    a8: "S",
    a9: "T",
    a10: "Ö",
    a11: "B",
    a12: "U",
    a13: "T",
    a14: "N",
    a15: "O",
    a16: "T",
    b1: "D",
    b2: "G",
    b3: "A",
    b4: "R",
    b5: "A",
    b6: "Ş",
    b7: "S",
    b8: "Y",
    b9: "Z",
    b10: "L",
    b11: "Y",
    b12: "K",
    b13: "Ä",
    b14: "D",
    b15: "Ň",
    b16: "J",
    c1: "N",
    c2: "U",
    c3: "R",
    c4: "Ö",
    c5: "P",
    c6: "M",
    c7: "A",
    c8: "Ş",
    c9: "Y",
    c10: "N",
    c11: "Ž",
    c12: "Ö",
    c13: "Z",
    c14: "Ö",
    c15: "G",
    c16: "T",
    d1: "E",
    d2: "M",
    d3: "I",
    d4: "L",
    d5: "L",
    d6: "I",
    d7: "O",
    d8: "N",
    d9: "Ž",
    d10: "A",
    d11: "A",
    d12: "R",
    d13: "E",
    d14: "W",
    d15: "O",
    d16: "Ü",
    e1: "T",
    e2: "D",
    e3: "L",
    e4: "O",
    e5: "G",
    e6: "U",
    e7: "Z",
    e8: "K",
    e9: "E",
    e10: "N",
    e11: "T",
    e12: "P",
    e13: "G",
    e14: "L",
    e15: "Ň",
    e16: "S",
    f1: "A",
    f2: "A",
    f3: "L",
    f4: "R",
    f5: "A",
    f6: "A",
    f7: "K",
    f8: "Ä",
    f9: "N",
    f10: "N",
    f11: "L",
    f12: "Ö",
    f13: "Ü",
    f14: "E",
    f15: "U",
    f16: "S",
    j1: "M",
    j2: "G",
    j3: "I",
    j4: "A",
    j5: "R",
    j6: "B",
    j7: "Ö",
    j8: "I",
    j9: "U",
    j10: "A",
    j11: "A",
    j12: "P",
    j13: "L",
    j14: "T",
    j15: "R",
    j16: "E",
    h1: "E",
    h2: "P",
    h3: "J",
    h4: "Z",
    h5: "A",
    h6: "Ş",
    h7: "L",
    h8: "A",
    h9: "M",
    h10: "G",
    h11: "N",
    h12: "P",
    h13: "T",
    h14: "S",
    h15: "D",
    h16: "S",
    i1: "R",
    i2: "B",
    i3: "M",
    i4: "A",
    i5: "G",
    i6: "T",
    i7: "Y",
    i8: "M",
    i9: "G",
    i10: "U",
    i11: "L",
    i12: "Y",
    i13: "A",
    i14: "I",
    i15: "E",
    i16: "E",
    g1: "I",
    g2: "A",
    g3: "O",
    g4: "A",
    g5: "U",
    g6: "L",
    g7: "A",
    g8: "U",
    g9: "U",
    g10: "L",
    g11: "A",
    g12: "Ş",
    g13: "R",
    g14: "R",
    g15: "P",
    g16: "R",
    k1: "K",
    k2: "Ý",
    k3: "L",
    k4: "A",
    k5: "M",
    k6: "A",
    k7: "A",
    k8: "L",
    k9: "L",
    k10: "Y",
    k11: "Ş",
    k12: "A",
    k13: "A",
    k14: "K",
    k15: "E",
    k16: "E",
    l1: "O",
    l2: "N",
    l3: "D",
    l4: "Ö",
    l5: "R",
    l6: "T",
    l7: "M",
    l8: "E",
    l9: "K",
    l10: "D",
    l11: "G",
    l12: "E",
    l13: "P",
    l14: "I",
    l15: "J",
    l16: "T",
    m1: "A",
    m2: "R",
    m3: "K",
    m4: "A",
    m5: "D",
    m6: "A",
    m7: "G",
    m8: "Z",
    m9: "A",
    m10: "M",
    m11: "A",
    m12: "N",
    m13: "A",
    m14: "S",
    m15: "Y",
    m16: "L",
    n1: "R",
    n2: "B",
    n3: "O",
    n4: "L",
    n5: "D",
    n6: "Y",
    n7: "Z",
    n8: "E",
    n9: "E",
    n10: "M",
    n11: "B",
    n12: "M",
    n13: "U",
    n14: "Ň",
    n15: "A",
    n16: "O",
    o1: "P",
    o2: "A",
    o3: "L",
    o4: "A",
    o5: "B",
    o6: "A",
    o7: "Ý",
    o8: "L",
    o9: "L",
    o10: "I",
    o11: "A",
    o12: "K",
    o13: "J",
    o14: "Z",
    o15: "Ü",
    o16: "O",
    p1: "A",
    p2: "Ş",
    p3: "E",
    p4: "M",
    p5: "P",
    p6: "I",
    p7: "R",
    p8: "A",
    p9: "B",
    p10: "D",
    p11: "T",
    p12: "Y",
    p13: "L",
    p14: "L",
    p15: "A",
    p16: "K",
  },
  letterWithNumbers: [],
  readyForPlayground: [],
  coordinateMaker() {
    for (key of this.alph16)
      for (let i = 1; i < 17; i++) this.letterWithNumbers.push(`${key}${i}`);
    this.readyForPlayground.push(
      this.letterWithNumbers.map(
        (n) =>
          `<div class="${n} col" onclick='crosswordSystem.clickedCol("${n}")' id="${n}">${this.words[n]}</div>`
      )
    );
  },
  putHTML() {
    this.playGround.innerHTML = this.readyForPlayground[0].join("");
  },
  run() {
    this.coordinateMaker();
    this.putHTML();
  },
};
coordinatedDivs.run();
//* End | Putting coordinated div's to HTML

//* Begin | Images for finding names logic
const iFFNL = {
  cItemsP1: [
    {
      n: 1,
      name: `"Garagum" oteli`,
      src: `./img/crosswordGameItems/garagum_oteli.jpg`,
      classs: `img itemOfCrossword garagumOteli`,
      id: `garagumOteli`,
      hiddenName: `"......." oteli`,
    },
    {
      n: 2,
      name: `"Oguzkent" oteli`,
      src: `./img/crosswordGameItems/oguzkent_oteli.jpg`,
      classs: `img itemOfCrossword OguzkentOteli`,
      id: `oguzkentOteli`,
      hiddenName: `"........" oteli`,
    },
    {
      n: 3,
      name: `Türkmen Döwlet Sirki`,
      src: `./img/crosswordGameItems/turkmenistanyn_dowlet_sirki.jpg`,
      classs: `img itemOfCrossword tkmDowletSirki`,
      id: `tkmDowletSirki`,
      hiddenName: `Türkmen ...... .....`,
    },
    {
      n: 4,
      name: `Halkyň Arkadagly zamanasy eşretli durmuşyň güwäsi`,
      src: `./img/crosswordGameItems/halkyn_arkadagly_zamanasy_esretli_durmusyn_guwasi.jpg`,
      classs: `img itemOfCrossword arkadagZamanasy`,
      id: `arkadagZamanasy`,
      hiddenName: `Halkyň ......... ....... eşretli`,
    },
    {
      n: 5,
      name: `"Magtymguly Pyragy" heýkeli`,
      src: `./img/crosswordGameItems/magtymguly_pyragy_heykeli.jpg`,
      classs: `img itemOfCrossword magtymgulyHeykeli`,
      id: `magtymgulyHeykeli`,
      hiddenName: `".......... Pyragy" heýkeli`,
    },
    {
      n: 6,
      name: `"Alabaý" aýlawy`,
      src: `./img/crosswordGameItems/alabay_krug.jpg`,
      classs: `img itemOfCrossword alabayAylawy`,
      id: `alabayAylawy`,
      hiddenName: `"......" aýlawy`,
    },
    {
      n: 7,
      name: `Garaşsyzlyk binasy`,
      src: `./img/crosswordGameItems/garashsyzlyk_binasy.jpg`,
      classs: `img itemOfCrossword garashsyzlykBinasy`,
      id: `garashsyzlykBinasy`,
      hiddenName: `"..........." binasy`,
    },
    {
      n: 8,
      name: `"Aşgabat" heýkeli`,
      src: `./img/crosswordGameItems/ashgabat_heykeli.jpg`,
      classs: `img itemOfCrossword ashgabatHeykeli`,
      id: `ashgabatHeykeli`,
      hiddenName: `"......." heýkeli`,
    },
  ],
  selectablePlace: document.getElementById("selectablePlace"),
  wFAllElem(item) {
    //* For div
    const div = document.createElement("div");
    div.setAttribute("id", item.id);
    div.setAttribute("class", item.classs);
    //* For img
    const img = document.createElement("img");
    img.setAttribute("src", item.src);
    img.setAttribute("alt", item.hiddenName);
    img.setAttribute("width", "100%");
    //* For p
    const p = document.createElement("p");
    p.innerHTML = item.hiddenName;
    //* Appending to main selectablePlace
    this.selectablePlace.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
  },
};
iFFNL.cItemsP1.forEach(iFFNL.wFAllElem);
//* End | Images for finding names logic

//* Begin | Working croosword system
const crosswordSystem = {
  fL: [],
  counterC: [],
  foundElements: [],
  foundContainer: document.getElementById("foundElements"),
  counter(add) {
    this.counterC.push(add);
    document.getElementById("counter").innerHTML = `${this.counterC.length}/8`;
    if (this.counterC.length === 8) {
      this.wonTheGame();
    }
  },
  clickedCol(coordinate) {
    if (!this.fL.includes(coordinate)) {
      this.fL.push(coordinate);
      document.getElementById(coordinate).style.backgroundColor = "burlywood";
    } else {
      document.getElementById(coordinate).style.backgroundColor =
        "var(--bg-color)";
      let iOC = this.fL.indexOf(coordinate);
      this.fL.splice(iOC, 1);
    }
    this.checker();
  },
  checker() {
    if (this.fL.length === 15) {
      if (
        this.fL.includes("m1") &&
        this.fL.includes("m2") &&
        this.fL.includes("m3") &&
        this.fL.includes("m4") &&
        this.fL.includes("m5") &&
        this.fL.includes("m6") &&
        this.fL.includes("m7") &&
        this.fL.includes("m8") &&
        this.fL.includes("m9") &&
        this.fL.includes("m10") &&
        this.fL.includes("m11") &&
        this.fL.includes("m12") &&
        this.fL.includes("m13") &&
        this.fL.includes("m14") &&
        this.fL.includes("m15")
      ) {
        this.removerAfterFound("arkadagZamanasy");
        this.counter("1");
        this.fL = [];
      }
    }
    if (this.fL.length === 11) {
      if (
        this.fL.includes("b2") &&
        this.fL.includes("b3") &&
        this.fL.includes("b4") &&
        this.fL.includes("b5") &&
        this.fL.includes("b6") &&
        this.fL.includes("b7") &&
        this.fL.includes("b8") &&
        this.fL.includes("b9") &&
        this.fL.includes("b10") &&
        this.fL.includes("b11") &&
        this.fL.includes("b12")
      ) {
        this.removerAfterFound("garashsyzlykBinasy");
        this.counter("2");
        this.fL = [];
      }
      if (
        this.fL.includes("b14") &&
        this.fL.includes("c14") &&
        this.fL.includes("d14") &&
        this.fL.includes("e14") &&
        this.fL.includes("f14") &&
        this.fL.includes("j14") &&
        this.fL.includes("h14") &&
        this.fL.includes("i14") &&
        this.fL.includes("g14") &&
        this.fL.includes("k14") &&
        this.fL.includes("l14")
      ) {
        this.removerAfterFound("tkmDowletSirki");
        this.counter("3");
        this.fL = [];
      }
    }
    if (this.fL.length === 10) {
      if (
        this.fL.includes("i3") &&
        this.fL.includes("i4") &&
        this.fL.includes("i5") &&
        this.fL.includes("i6") &&
        this.fL.includes("i7") &&
        this.fL.includes("i8") &&
        this.fL.includes("i9") &&
        this.fL.includes("i10") &&
        this.fL.includes("i11") &&
        this.fL.includes("i12")
      ) {
        this.removerAfterFound("magtymgulyHeykeli");
        this.counter("4");
        this.fL = [];
      }
    }
    if (this.fL.length === 8) {
      if (
        this.fL.includes("e4") &&
        this.fL.includes("e5") &&
        this.fL.includes("e6") &&
        this.fL.includes("e7") &&
        this.fL.includes("e8") &&
        this.fL.includes("e9") &&
        this.fL.includes("e10") &&
        this.fL.includes("e11")
      ) {
        this.removerAfterFound("oguzkentOteli");
        this.counter("5");
        this.fL = [];
      }
    }
    if (this.fL.length === 7) {
      if (
        this.fL.includes("e5") &&
        this.fL.includes("f5") &&
        this.fL.includes("j5") &&
        this.fL.includes("h5") &&
        this.fL.includes("i5") &&
        this.fL.includes("g5") &&
        this.fL.includes("k5")
      ) {
        this.removerAfterFound("garagumOteli");
        this.counter("6");
        this.fL = [];
      }
      if (
        this.fL.includes("g11") &&
        this.fL.includes("k11") &&
        this.fL.includes("l11") &&
        this.fL.includes("m11") &&
        this.fL.includes("n11") &&
        this.fL.includes("o11") &&
        this.fL.includes("p11")
      ) {
        this.removerAfterFound("ashgabatHeykeli");
        this.counter("7");
        this.fL = [];
      }
    }
    if (this.fL.length === 6) {
      if (
        this.fL.includes("o2") &&
        this.fL.includes("o3") &&
        this.fL.includes("o4") &&
        this.fL.includes("o5") &&
        this.fL.includes("o6") &&
        this.fL.includes("o7")
      ) {
        this.removerAfterFound("alabayAylawy");
        this.counter("8");
        this.fL = [];
      }
    }
  },
  removerAfterFound(id) {
    document.getElementById(id).style.display = "none";
    if (this.counterC.length === 8) {
      this.wonTheGame();
    }
    this.foundElements.push(id);
    this.addToFoundElements(this.foundElements);
  },
  addToFoundElements(id) {
    this.foundContainer.innerHTML = "";
    for (key of id) {
      //* For div
      const div = document.createElement("div");
      div.setAttribute("id", key);
      div.setAttribute("class", `${key} foundElement`);
      //* For img
      const img = document.createElement("img");
      img.setAttribute("src", this.findTheSource(key));
      img.setAttribute("alt", key);
      //* For h1
      const h1 = document.createElement("h1");
      h1.innerHTML = this.findTheName(key);
      //* Appending to main foundContainer
      this.foundContainer.appendChild(div);
      div.appendChild(img);
      div.appendChild(h1);
    }
  },
  findTheSource(id) {
    if (id === "arkadagZamanasy") {
      return `./img/crosswordGameItems/halkyn_arkadagly_zamanasy_esretli_durmusyn_guwasi.jpg`;
    }
    if (id === "garashsyzlykBinasy") {
      return `./img/crosswordGameItems/garashsyzlyk_binasy.jpg`;
    }
    if (id === "tkmDowletSirki") {
      return `./img/crosswordGameItems/turkmenistanyn_dowlet_sirki.jpg`;
    }
    if (id === "magtymgulyHeykeli") {
      return `./img/crosswordGameItems/magtymguly_pyragy_heykeli.jpg`;
    }
    if (id === "oguzkentOteli") {
      return `./img/crosswordGameItems/oguzkent_oteli.jpg`;
    }
    if (id === "garagumOteli") {
      return `./img/crosswordGameItems/garagum_oteli.jpg`;
    }
    if (id === "ashgabatHeykeli") {
      return `./img/crosswordGameItems/ashgabat_heykeli.jpg`;
    }
    if (id === "alabayAylawy") {
      return `./img/crosswordGameItems/alabay_krug.jpg`;
    }
  },
  findTheName(id) {
    if (id === "arkadagZamanasy") {
      return `"Halkyň Arkadagly zamanasy eşretli durmuşyň güwäsi" eseri`;
    }
    if (id === "garashsyzlykBinasy") {
      return `Garaşsyzlyk binasy`;
    }
    if (id === "tkmDowletSirki") {
      return `Türkmen Döwlet Sirki`;
    }
    if (id === "magtymgulyHeykeli") {
      return `"Magtymguly Pyragy" heýkeli`;
    }
    if (id === "oguzkentOteli") {
      return `"Oguzkent" oteli`;
    }
    if (id === "garagumOteli") {
      return `"Garagum" oteli`;
    }
    if (id === "ashgabatHeykeli") {
      return `"Aşgabat" heýkeli`;
    }
    if (id === "alabayAylawy") {
      return `"Alabaý" aýlawy`;
    }
  },
  wonTheGame() {
    document.getElementById("firstRow").style.display = "none";
    document.getElementById("counter").style.display = "none";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("secondRow").style.display = "flex";
  },
};
