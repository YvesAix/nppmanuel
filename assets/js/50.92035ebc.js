(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{422:function(e,r,s){"use strict";s.r(r);var n=s(47),t=Object(n.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Comment arrondir des valeurs numériques dans un fichier au moyen d'un éditeur de texte comme "),s("router-link",{attrs:{to:"./notepad-plus-plus.html"}},[e._v("Notepad++")]),e._v(" ?")],1),e._v(" "),s("p",[e._v("Les "),s("router-link",{attrs:{to:"./recherches-et-remplacements.html"}},[e._v("recherches et remplacements")]),e._v(" ne permettent pas d'opérations proprement conditionnelles : un éditeur de texte n'est pas d'un interpréteur ou un compilateur et ne traite pas des opérations mathématiques. Il est donc, de manière générale, impossible d'arrondir automatiquement et facilement des valeurs dans un éditeur de texte.")],1),e._v(" "),s("p",[e._v("La méthode suivante permet d'arrondir toute valeur positive à l'unité la plus proche. Elle nécessite toutefois un grand nombre d'opérations, augmentant avec la taille des valeurs :")]),e._v(" "),s("ul",[s("li",[e._v("valeurs comprises entre 0 et 9.9999... : 11 remplacements")]),e._v(" "),s("li",[e._v("valeurs comprises entre 0 et 99.999... : 21 remplacements")]),e._v(" "),s("li",[e._v("valeurs comprises entre 0 et 999.99... : 31 remplacements")])]),e._v(" "),s("p",[e._v("Il est donc très vite plus intéressant de faire appel à un langage de programmation.")]),e._v(" "),s("h2",{attrs:{id:"avec-des-expressions-regulieres"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#avec-des-expressions-regulieres","aria-hidden":"true"}},[e._v("#")]),e._v(" Avec des "),s("router-link",{attrs:{to:"./expressions-regulieres.html"}},[e._v("expressions régulières")])],1),e._v(" "),s("p",[e._v("On prendra pour exemple la série suivante :")]),e._v(" "),s("pre",[s("code",[e._v("0.0  58.256  982.498\n4.5  98.663  506.942\n19.6  59.701  189.842\n")])]),e._v(" "),s("p",[e._v("D'abord, arrondir les valeurs dont la première décimale est inférieure à 5 correspond à en supprimer les décimales. On recherchera donc :")]),e._v(" "),s("div",{staticClass:"language-regex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("([0-9]+)[.,][0-4][0-9]*\n")])])]),s("p",[e._v("Pour n'en garder que la valeur entière :")]),e._v(" "),s("div",{staticClass:"language-regex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\\1\n")])])]),s("pre",[s("code",[e._v("0    58      982        (première décimale inférieure à 5)\n4.5  98.663  506.942\n19.6  59.701  189.842\n")])]),e._v(" "),s("p",[e._v("Ensuite, les valeurs dont la première décimale est comprise entre 5 et 9 doivent être augmentées de un : l'arrondi de 12.71 est 13.")]),e._v(" "),s("p",[e._v("Les valeurs dont le chiffre des unités est inférieur à 9 n'influeront pas le chiffre des dizaines. On peut donc déterminer neuf remplacements à effectuer afin de remplacer le chiffre des unités en conservant les chiffres précédents :")]),e._v(" "),s("div",{staticClass:"language-regex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("([0-9]*)0[.,][5-9][0-9]* remplacé par \\11\n([0-9]*)1[.,][5-9][0-9]* remplacé par \\12\n([0-9]*)2[.,][5-9][0-9]* remplacé par \\13\n([0-9]*)3[.,][5-9][0-9]* remplacé par \\14\n([0-9]*)4[.,][5-9][0-9]* remplacé par \\15\n([0-9]*)5[.,][5-9][0-9]* remplacé par \\16\n([0-9]*)6[.,][5-9][0-9]* remplacé par \\17\n([0-9]*)7[.,][5-9][0-9]* remplacé par \\18\n([0-9]*)8[.,][5-9][0-9]* remplacé par \\19\n")])])]),s("pre",[s("code",[e._v("0    58      982\n5    99      507         (chiffre des unités inférieur à 9)\n19.6  59.701  189.842\n")])]),e._v(" "),s("p",[e._v("Il ne reste à ce stade plus que les valeurs avec une unité de 9, dont le remplacement doit influer sur les chiffres des dizaines.")]),e._v(" "),s("p",[e._v("Les remplacer demande alors de reprendre le raisonnement précédent : neuf remplacements pour les dizaines comprises entre 0 et 8 en mettant le chiffre des unités à 0.")]),e._v(" "),s("div",{staticClass:"language-regex extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("([0-9]*)09[.,][5-9][0-9]* remplacé par \\110\n([0-9]*)19[.,][5-9][0-9]* remplacé par \\120\n...\n")])])]),s("pre",[s("code",[e._v("0    58      982\n5    99      507\n20    60      190        (chiffre des dizaines inférieur à 9)\n")])]),e._v(" "),s("p",[e._v("Et l'on recommence les neuf opérations pour les dizaines égales à 9, puis pour les centaines, etc, etc...")])])},[],!1,null,null,null);r.default=t.exports}}]);