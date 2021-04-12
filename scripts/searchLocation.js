(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }

    var locations = [
    	{
    		uuid: 2,
    		name: "Engel-Apotheke",
    		tel: "06835-2435",
    		street: "Talstr.",
    		number: "128",
    		postal: "66701"
    	},
    	{
    		uuid: 3,
    		name: "Tal-Apotheke",
    		tel: "06835-93351",
    		street: "Honzrather Str.",
    		number: "69",
    		postal: "66701"
    	},
    	{
    		uuid: 4,
    		name: "Andreas-Apotheke",
    		tel: "06832-91181",
    		street: "Reimsbacher Str. 40-",
    		number: "42",
    		postal: "66701"
    	},
    	{
    		uuid: 5,
    		name: "Dr. Isabell Kühnle-Adler",
    		tel: "06832-92060",
    		street: "06832-",
    		number: "92060",
    		postal: "66701"
    	},
    	{
    		uuid: 6,
    		name: "Frank Donate",
    		tel: "06835-92030",
    		street: "06835-",
    		number: "92030",
    		postal: "66701"
    	},
    	{
    		uuid: 7,
    		name: "Josef Schmitt",
    		tel: "06835-4063",
    		street: "06835-",
    		number: "4063",
    		postal: "66701"
    	},
    	{
    		uuid: 8,
    		name: "Nathalie Flammang",
    		tel: "06832-800280",
    		street: "06832-",
    		number: "800280",
    		postal: "66701"
    	},
    	{
    		uuid: 9,
    		name: "Ring-Apotheke",
    		tel: "8189731",
    		street: "Bahnhofstr.",
    		number: "11",
    		postal: "66450"
    	},
    	{
    		uuid: 10,
    		name: "Dr. Wolfram Benoist",
    		tel: "06826-6589",
    		street: "Markwaldstraße",
    		number: "10",
    		postal: "66450"
    	},
    	{
    		uuid: 11,
    		name: "Gemeinschaftspraxis Dres. Sebastian/Dorst-Sebastian",
    		tel: "06826-6470",
    		postal: "66450"
    	},
    	{
    		uuid: 12,
    		name: "Sabine Braun",
    		tel: "06826-2525",
    		street: "Aloys-Nesseler-Platz",
    		number: "2",
    		postal: "66450"
    	},
    	{
    		uuid: 13,
    		name: "Barbara-Apotheke",
    		tel: "06842-930808",
    		street: "Von der Leyenstr.",
    		number: "19",
    		postal: "66440"
    	},
    	{
    		uuid: 14,
    		name: "Rats-Apotheke",
    		tel: "06842-4422",
    		street: "Zweibrücker Str.",
    		number: "10",
    		postal: "66440"
    	},
    	{
    		uuid: 15,
    		name: "Schlossberg-Apotheke",
    		tel: "06842-9610008",
    		street: "Kardinal-Wendel-Straße",
    		number: "2",
    		postal: "66440"
    	},
    	{
    		uuid: 16,
    		name: "Christina Baumann",
    		tel: "06844-555",
    		street: "Serrstraße",
    		number: "5",
    		postal: "66440"
    	},
    	{
    		uuid: 17,
    		name: "Dr. Raban Baumann",
    		tel: "06844-555",
    		street: "Serrstraße",
    		number: "5",
    		postal: "66440"
    	},
    	{
    		uuid: 18,
    		name: "Dr. Tom Ring",
    		tel: "06842-7500",
    		street: "Kirkeler Straße",
    		number: "26 A",
    		postal: "66440"
    	},
    	{
    		uuid: 19,
    		name: "Dr. Martin Thielen",
    		tel: "06834-1084",
    		street: "Kirchstraße",
    		number: "9",
    		postal: "66359"
    	},
    	{
    		uuid: 20,
    		name: "Berg- und Hütten-Apotheke",
    		tel: "06831-707004",
    		street: "Stummstr.",
    		number: "57",
    		postal: "66763"
    	},
    	{
    		uuid: 21,
    		name: "Odilien-Apotheke",
    		tel: "06831-77000",
    		street: "Odilienplatz",
    		number: "2",
    		postal: "66763"
    	},
    	{
    		uuid: 22,
    		name: "Pachtener-Apotheke",
    		street: "06831/",
    		number: "73309",
    		postal: "66763"
    	},
    	{
    		uuid: 23,
    		name: "Dr. Guido Ospelt",
    		tel: "06831-71138",
    		street: "Friedrich-Ebert-Straße",
    		number: "40",
    		postal: "66763"
    	},
    	{
    		uuid: 24,
    		name: "Dr. Marcus Maier",
    		tel: "06831-489520",
    		street: "Odilienplatz",
    		number: "12",
    		postal: "66763"
    	},
    	{
    		uuid: 25,
    		name: "Dr. Matthias Heinze",
    		tel: "06831-78992",
    		street: "Stummstraße",
    		number: "33",
    		postal: "66763"
    	},
    	{
    		uuid: 26,
    		name: "Dr. Moritz Schmitt",
    		tel: "06831-949292",
    		street: "Dillinger Straße",
    		number: "71",
    		postal: "66763"
    	},
    	{
    		uuid: 27,
    		name: "Gemeinschaftspraxis Frank/Frank",
    		tel: "06831-796937",
    		street: "Odilienplatz",
    		number: "3",
    		postal: "66763"
    	},
    	{
    		uuid: 28,
    		name: "Hans Jürgen Huber",
    		tel: "06831-71009",
    		street: "Odilienplatz",
    		number: "1",
    		postal: "66763"
    	},
    	{
    		uuid: 29,
    		name: "St.Barbara-Apotheke",
    		tel: "06806-988280",
    		street: "Brühlstr.",
    		number: "18",
    		postal: "66571"
    	},
    	{
    		uuid: 30,
    		name: "Marien-Apotheke",
    		tel: "06881-7128",
    		street: "Kirchplatz",
    		number: "2",
    		postal: "66571"
    	},
    	{
    		uuid: 31,
    		name: "Dr. Gabriele Andler",
    		tel: "06881-898258",
    		street: "Europaplatz",
    		number: "4",
    		postal: "66571"
    	},
    	{
    		uuid: 32,
    		name: "Dr. Hans Martin Schmidt",
    		tel: "06881-87700",
    		street: "Kirchplatz",
    		number: "2",
    		postal: "66571"
    	},
    	{
    		uuid: 33,
    		name: "Katrin Bungert-Feldmann",
    		tel: "06827-90160",
    		street: "Zur alten Mühle",
    		number: "1",
    		postal: "66571"
    	},
    	{
    		uuid: 34,
    		name: "Zahnarztpraxis Weimer",
    		tel: "06806-81642",
    		street: "Kirchenstraße",
    		number: "15",
    		postal: "66571"
    	},
    	{
    		uuid: 35,
    		name: "ZA. P. Weimer",
    		tel: "06806-81642",
    		street: "Kirchenstraße",
    		number: "15",
    		postal: "66571"
    	},
    	{
    		uuid: 36,
    		name: "Ostertal-Apotheke",
    		tel: "06855-237",
    		street: "Talbrückstr.",
    		number: "1",
    		postal: "66629"
    	},
    	{
    		uuid: 37,
    		name: "Olivier Hagenbourger",
    		tel: "06855-7007",
    		street: "Hermann-Hörmann-Platz",
    		number: "1",
    		postal: "66629"
    	},
    	{
    		uuid: 38,
    		name: "Festhalle"
    	},
    	{
    		uuid: 39,
    		name: "Gemeinschaftspraxis Dres. Fischer/ Fischer",
    		tel: "06897-89133",
    		street: "Bismarckstraße",
    		number: "7",
    		postal: "66299"
    	},
    	{
    		uuid: 40,
    		name: "Gemeinschaftspraxis Dres. Mai/Mai",
    		tel: "06897-8016",
    		street: "Im Grühlingswald",
    		number: "59",
    		postal: "66299"
    	},
    	{
    		uuid: 41,
    		name: "Gemeinschaftspraxis Dres. Müller-Kähmann/Otto/Becker",
    		tel: "06897-8091",
    		postal: "66299"
    	},
    	{
    		uuid: 42,
    		name: "Gemeinschaftspraxis Wahl-Dietz/ Klasen",
    		tel: "06897-9999010",
    		postal: "66299"
    	},
    	{
    		uuid: 43,
    		name: "Dr. M. Schneider",
    		tel: "06897-840569",
    		street: "Schillerstraße",
    		number: "6a",
    		postal: "66299"
    	},
    	{
    		uuid: 44,
    		name: "Löwen-Apotheke",
    		street: "An der Mühle",
    		number: "1",
    		postal: "66453"
    	},
    	{
    		uuid: 45,
    		name: "Gemeinschaftspraxis Ziegler/Becker/Schwendich",
    		tel: "06843-301",
    		street: "An der Mühle",
    		number: "1",
    		postal: "66453"
    	},
    	{
    		uuid: 46,
    		name: "Rossel-Apotheke",
    		tel: "06898-41338",
    		street: "Ludweilerstr.",
    		number: "3",
    		postal: "66352"
    	},
    	{
    		uuid: 47,
    		name: "Dr. Magdolna Nemcsik",
    		tel: "06898-41053",
    		street: "Ludweilerstraße 3-",
    		number: "5",
    		postal: "66352"
    	},
    	{
    		uuid: 48,
    		name: "Lidia Barth",
    		tel: "06898-94180",
    		street: "Im Sommerflur",
    		number: "6",
    		postal: "66352"
    	},
    	{
    		uuid: 49,
    		name: "Post-Apotheke",
    		tel: "06806-5929",
    		street: "Trierer Str.",
    		number: "17",
    		postal: "66265"
    	},
    	{
    		uuid: 50,
    		name: "Dominik Folz",
    		tel: "06806-79091",
    		street: "Auf Jungs Wies",
    		number: "1",
    		postal: "66265"
    	},
    	{
    		uuid: 51,
    		name: "Dr. Lodz Maciej Kowalski",
    		tel: "06806-6720",
    		street: "Am Hirtenbrunnen",
    		number: "2 b",
    		postal: "66265"
    	},
    	{
    		uuid: 52,
    		name: "Dr. Manuela Jung",
    		tel: "06806-91720",
    		street: "Friedrichstraße",
    		number: "38",
    		postal: "66265"
    	},
    	{
    		uuid: 53,
    		name: "Gemeinschaftspraxis Dres. Bauer/Wagner",
    		tel: "06806-987700",
    		street: "Trierer Straße",
    		number: "17",
    		postal: "66265"
    	},
    	{
    		uuid: 54,
    		name: "Gemeinschaftspraxis Dres. Fuchs/Michalski/Adapoe-Doamekpor",
    		tel: "06806-98610",
    		postal: "66265"
    	},
    	{
    		uuid: 55,
    		name: "Gemeinschaftspraxis Dres. Fuchs/Michalski/Adapoe-Doamekpor",
    		tel: "06806-98610",
    		postal: "66265"
    	},
    	{
    		uuid: 56,
    		name: "Huu Dinh",
    		postal: "66265"
    	},
    	{
    		uuid: 57,
    		name: "Christof Kurz",
    		tel: "06806-7001",
    		street: "06806-",
    		number: "7001",
    		postal: "66265"
    	},
    	{
    		uuid: 58,
    		name: "ZA. T. Schlicker",
    		tel: "06806-80880",
    		street: "Holzer Platz",
    		number: "3",
    		postal: "66265"
    	},
    	{
    		uuid: 59,
    		name: "Apotheke am Enklerplatz",
    		tel: "06841-9825089",
    		street: "Talstr.",
    		number: "9",
    		postal: "66424"
    	},
    	{
    		uuid: 60,
    		name: "Bahnhof-Apotheke",
    		tel: "06841-4081",
    		street: "Eisenbahnstr.",
    		number: "52",
    		postal: "66424"
    	},
    	{
    		uuid: 61,
    		name: "Schloss-Apotheke",
    		tel: "06841-72058",
    		street: "Saar-Pfalz-Str.",
    		number: "84",
    		postal: "66424"
    	},
    	{
    		uuid: 62,
    		name: "Apotheke am Erbach",
    		tel: "06841-755018",
    		street: "Berliner Str. 104-",
    		number: "106",
    		postal: "66424"
    	},
    	{
    		uuid: 63,
    		name: "Anette Hilpert",
    		tel: "06841-73877",
    		street: "Saar-Pfalz-Straße",
    		number: "84",
    		postal: "66424"
    	},
    	{
    		uuid: 64,
    		name: "Arno Winter",
    		tel: "06841-1480",
    		street: "Ortsstraße",
    		number: "2",
    		postal: "66424"
    	},
    	{
    		uuid: 65,
    		name: "Dr. Antje Hammers-Reinhard",
    		tel: "06841-72222",
    		street: "Saarbrücker Straße",
    		number: "30",
    		postal: "66424"
    	},
    	{
    		uuid: 66,
    		name: "Dr. Hans Jakob Schöndorf",
    		tel: "06841-5061",
    		street: "Talstraße",
    		number: "55",
    		postal: "66424"
    	},
    	{
    		uuid: 67,
    		name: "Farzaneh Ardestani",
    		tel: "06841-1721271",
    		street: "Dürerstraße",
    		number: "91",
    		postal: "66424"
    	},
    	{
    		uuid: 68,
    		name: "Gemeinschaftspraxis Dres. Reichert/Wahlen/Stierkorb/Holtsmark",
    		tel: "06841-932321",
    		postal: "66424"
    	},
    	{
    		uuid: 69,
    		name: "Gemeinschaftspraxis Schmidt/Schuld",
    		tel: "06841-15588",
    		street: "Untergasse",
    		number: "10",
    		postal: "66424"
    	},
    	{
    		uuid: 70,
    		name: "Gemeinschaftspraxis Schmidt/Schuld",
    		tel: "06841-15588",
    		street: "Untergasse",
    		number: "10",
    		postal: "66424"
    	},
    	{
    		uuid: 71,
    		name: "Hasan Ramadan",
    		tel: "06841-2250",
    		street: "Zweibrücker Straße",
    		number: "76",
    		postal: "66424"
    	},
    	{
    		uuid: 72,
    		name: "Bären-Apotheke",
    		tel: "06825-941244",
    		street: "Ottweilerstr.",
    		number: "2b",
    		postal: "66557"
    	},
    	{
    		uuid: 73,
    		name: "St. Stephanus-Apotheke",
    		tel: "06825-48151",
    		street: "Hauptstr.",
    		number: "54",
    		postal: "66557"
    	},
    	{
    		uuid: 74,
    		name: "Barbara-Apotheke",
    		tel: "06825-2011",
    		street: "Neunkircher Str.",
    		number: "3",
    		postal: "66557"
    	},
    	{
    		uuid: 75,
    		name: "Husaren-Apotheke",
    		tel: "06825-404790",
    		street: "Zeppelinstr.",
    		number: "27",
    		postal: "66557"
    	},
    	{
    		uuid: 76,
    		name: "Gemeinschaftspraxis Hoppstädter/ André",
    		tel: "06825-952950",
    		street: "Hauptstraße",
    		number: "8",
    		postal: "66557"
    	},
    	{
    		uuid: 77,
    		name: "Alexander Indermark",
    		tel: "06825-1611",
    		street: "Hauptstraße",
    		number: "15",
    		postal: "66557"
    	},
    	{
    		uuid: 78,
    		name: "Dr. Anke Kissinger-Fischer",
    		tel: "06825-46901",
    		street: "Ottweilerstraße",
    		number: "2b",
    		postal: "66557"
    	},
    	{
    		uuid: 79,
    		name: "Zahnarztpraxis am Dreiherreneck",
    		tel: "06825-9589672",
    		street: "06825-",
    		number: "9589672",
    		postal: "66557"
    	},
    	{
    		uuid: 80,
    		name: "Dr. Gudula Zimper",
    		tel: "06841-8274",
    		street: "Lappentascher Straße",
    		number: "3",
    		postal: "66459"
    	},
    	{
    		uuid: 81,
    		name: "Dr. Martina Teja",
    		tel: "06841-81575",
    		street: "Ludwigsthaler Straße",
    		number: "5",
    		postal: "66459"
    	},
    	{
    		uuid: 82,
    		name: "Gemeinschaftspraxis Dr. Nicklaus/Kirch",
    		tel: "06849-484",
    		street: "Wielandstraße",
    		number: "27",
    		postal: "66459"
    	},
    	{
    		uuid: 83,
    		name: "Hermann Forster",
    		tel: "06849-515",
    		street: "Goethestraße",
    		number: "4 a",
    		postal: "66459"
    	},
    	{
    		uuid: 84,
    		name: "Dr. Gudrun Fürst",
    		tel: "06805-2468",
    		street: "Elsässer Straße",
    		number: "20",
    		postal: "66271"
    	},
    	{
    		uuid: 85,
    		name: "Gemeinschaftspraxis Dr. Heid/ Schneider",
    		tel: "06805-3033",
    		street: "Elsässer Straße",
    		number: "1",
    		postal: "66271"
    	},
    	{
    		uuid: 86,
    		name: "John Warmann",
    		tel: "06805-8318",
    		street: "Brückenstraße",
    		number: "12",
    		postal: "66271"
    	},
    	{
    		uuid: 87,
    		name: "Dr. H. Hönel",
    		tel: "06805-22016",
    		street: "Fechinger Straße",
    		number: "19",
    		postal: "66271"
    	},
    	{
    		uuid: 88,
    		name: "DocMorris-Apotheke",
    		tel: "06881-9362090",
    		street: "Poststr.",
    		number: "3",
    		postal: "66822"
    	},
    	{
    		uuid: 89,
    		name: "Schützen-Apotheke",
    		street: "Saarbrücker Str.",
    		number: "15",
    		postal: "66822"
    	},
    	{
    		uuid: 90,
    		name: "Bernhard Altmeyer",
    		tel: "06881-936623",
    		street: "Poststraße",
    		number: "3",
    		postal: "66822"
    	},
    	{
    		uuid: 91,
    		name: "Bernhard Schumacher",
    		tel: "06881-8808522",
    		street: "Poststraße",
    		number: "7",
    		postal: "66822"
    	},
    	{
    		uuid: 92,
    		name: "Gemeinschaftspraxis Dr. Hertrich/Konietzke",
    		tel: "06881-52020",
    		street: "Am Bahnhof",
    		number: "6",
    		postal: "66822"
    	},
    	{
    		uuid: 93,
    		name: "Gemeinschaftspraxis Dres. Fuchs/Michalski/Adapoe-Doamekpor",
    		tel: "06806-98610",
    		postal: "66822"
    	},
    	{
    		uuid: 94,
    		name: "Gemeinschaftspraxis Eisenbrand/Eisenbrand",
    		tel: "06888-1737",
    		street: "Lehmkaul",
    		number: "35",
    		postal: "66822"
    	},
    	{
    		uuid: 95,
    		name: "Waldemar Stern",
    		tel: "06881-2444",
    		street: "Am Bahnhof",
    		number: "8",
    		postal: "66822"
    	},
    	{
    		uuid: 96,
    		name: "Mauritius-Apotheke",
    		tel: "06893-1730",
    		street: "Adenauerstr.",
    		number: "53",
    		postal: "66399"
    	},
    	{
    		uuid: 97,
    		name: "Mandelbach-Apotheke",
    		tel: "06803-99450",
    		street: "Saarbrücker Str.",
    		number: "27",
    		postal: "66399"
    	},
    	{
    		uuid: 98,
    		name: "Dr. Sibylle Zänger",
    		tel: "06803-1623",
    		street: "Saarbrücker Straße",
    		number: "25 b",
    		postal: "66399"
    	},
    	{
    		uuid: 99,
    		name: "Schnellteststation im Saal Niederländer",
    		street: "Allmendstraße",
    		number: "1",
    		postal: "66399"
    	},
    	{
    		uuid: 100,
    		name: "Schnellteststation im Rathaus",
    		postal: "66399"
    	},
    	{
    		uuid: 101,
    		name: "Schnellteststation im Foyer der Bliestalhalle",
    		street: "Ritterstraße",
    		number: "18",
    		postal: "66399"
    	},
    	{
    		uuid: 102,
    		name: "Schnellteststation im Dorfgemeinschaftshaus Bebelsheim",
    		street: "Margarethenstraße",
    		number: "19",
    		postal: "66399"
    	},
    	{
    		uuid: 103,
    		name: "Dr. Michael Mörsdorf",
    		tel: "06853-2078",
    		street: "Tholeyer Straße",
    		number: "66 a",
    		postal: "66646"
    	},
    	{
    		uuid: 104,
    		name: "Dr. Stephan Degro",
    		tel: "06853-922113",
    		street: "Urexweilerstraße",
    		number: "1",
    		postal: "66646"
    	},
    	{
    		uuid: 105,
    		name: "Gemeinschaftspraxis Ammann/Bungert",
    		tel: "06827-90230",
    		street: "Im Brühl",
    		number: "1 a",
    		postal: "66646"
    	},
    	{
    		uuid: 106,
    		name: "Turnhalle Grundschule"
    	},
    	{
    		uuid: 107,
    		name: "Löwen-Apotheke",
    		tel: "06825-6666",
    		street: "Hauptstr.",
    		number: "155a",
    		postal: "66589"
    	},
    	{
    		uuid: 108,
    		name: "ZA. T. Decker",
    		tel: "06825-8007979",
    		street: "Blumenstraße",
    		number: "14",
    		postal: "66589"
    	},
    	{
    		uuid: 109,
    		name: "Apotheke im Gesundheitscampus",
    		tel: "06861-9391890",
    		street: "Trierer Str. 215-",
    		number: "217",
    		postal: "66663"
    	},
    	{
    		uuid: 110,
    		name: "Fellenberg-Apotheke",
    		tel: "06861-793232",
    		street: "Torstr.",
    		number: "28",
    		postal: "66663"
    	},
    	{
    		uuid: 111,
    		name: "Dr. Georg Radosa",
    		tel: "06861-2159",
    		street: "Brauerstraße",
    		number: "8",
    		postal: "66663"
    	},
    	{
    		uuid: 112,
    		name: "Gemeinschaftspraxis Dres. Rettig-Ewen/Küppers/Leinen",
    		tel: "06861-992902",
    		postal: "66663"
    	},
    	{
    		uuid: 113,
    		name: "Gemeinschaftspraxis Giersberg/Loris",
    		tel: "06861-2345",
    		street: "Hausbacher Straße",
    		number: "20",
    		postal: "66663"
    	},
    	{
    		uuid: 114,
    		name: "Jörg Rübsteck",
    		tel: "06861-5777",
    		street: "Poststraße",
    		number: "33",
    		postal: "66663"
    	},
    	{
    		uuid: 115,
    		name: "MVZ Merzig",
    		tel: "06861-2614",
    		street: "Bahnhofstraße",
    		number: "48 a",
    		postal: "66663"
    	},
    	{
    		uuid: 116,
    		name: "Silvia Heinrich-Seger",
    		tel: "06861-3936",
    		street: "Poststraße",
    		number: "31",
    		postal: "66663"
    	},
    	{
    		uuid: 117,
    		name: "Thomas Dehnen",
    		tel: "06865-426",
    		street: "Am Gerstengarten",
    		number: "3",
    		postal: "66693"
    	},
    	{
    		uuid: 118,
    		name: "Doc's-Apotheke Neunkirchen",
    		tel: "06821-9127339",
    		street: "Bahnhofstr.",
    		number: "41",
    		postal: "66538"
    	},
    	{
    		uuid: 119,
    		name: "Kepler-Apotheke",
    		postal: "66540"
    	},
    	{
    		uuid: 120,
    		name: "Ali Dastbaz",
    		tel: "06821-12727",
    		street: "Bliespromenade",
    		number: "7",
    		postal: "66538"
    	},
    	{
    		uuid: 121,
    		name: "Christine Fabian",
    		tel: "06821-22321",
    		street: "Wilhelmstraße",
    		number: "4",
    		postal: "66538"
    	},
    	{
    		uuid: 122,
    		name: "Dr. Harald Seidler",
    		tel: "06821-22020",
    		street: "Stummstraße",
    		number: "1",
    		postal: "66538"
    	},
    	{
    		uuid: 123,
    		name: "Dr. Jörg Angresius",
    		tel: "06821-9145680",
    		street: "Boxbergweg",
    		number: "3 b",
    		postal: "66538"
    	},
    	{
    		uuid: 124,
    		name: "Igor Fleer",
    		tel: "06821-88282",
    		street: "Brunnenstr.",
    		number: "21",
    		postal: "66538"
    	},
    	{
    		uuid: 125,
    		name: "Gemeinschaftspraxis Dres. Klass/Mippi",
    		tel: "06821-22030",
    		street: "Bliespromenade",
    		number: "1 A",
    		postal: "66538"
    	},
    	{
    		uuid: 126,
    		name: "Petra Ost-Becker",
    		tel: "06821-13001",
    		street: "Bliespromenade",
    		number: "7",
    		postal: "66538"
    	},
    	{
    		uuid: 127,
    		name: "Gemeinschaftspraxis Johannes/Schmieden",
    		tel: "06821-3629944",
    		street: "Wilhelmstraße",
    		number: "6",
    		postal: "66538"
    	},
    	{
    		uuid: 128,
    		name: "Der Neunkircher Testbus",
    		tel: "06821-20"
    	},
    	{
    		uuid: 129,
    		name: "Hubertus Apotheke",
    		tel: "06852-6365",
    		street: "Saarbrücker Str.",
    		number: "47",
    		postal: "66625"
    	},
    	{
    		uuid: 130,
    		name: "Dr. Marcus Schlich",
    		tel: "06852-259",
    		street: "Buchwaldstraße",
    		number: "49",
    		postal: "66625"
    	},
    	{
    		uuid: 131,
    		name: "Gemeinschaftspraxis Dres. Bencsik/Bencsik",
    		tel: "06852-92042",
    		street: "Am Burghof",
    		number: "3",
    		postal: "66625"
    	},
    	{
    		uuid: 132,
    		name: "Gemeinschaftspraxis Frey/Frey",
    		tel: "06825-360",
    		street: "Hauptstraße",
    		number: "86a",
    		postal: "66625"
    	},
    	{
    		uuid: 133,
    		name: "Dr. Bernhard Steines",
    		tel: "06852-92121",
    		street: "Saarbrücker Straße",
    		number: "47",
    		postal: "66625"
    	},
    	{
    		uuid: 134,
    		name: "Köhlerhalle Walhausen"
    	},
    	{
    		uuid: 135,
    		name: "Hochwald-Apotheke, 06873-240",
    		postal: "66620"
    	},
    	{
    		uuid: 136,
    		name: "Primstal-Apotheke",
    		tel: "06875-688",
    		street: "Hauptstr.",
    		number: "45",
    		postal: "66620"
    	},
    	{
    		uuid: 137,
    		name: "Gemeinschaftspraxis Dres. Offermann/Schneider",
    		tel: "06873-7727",
    		street: "Am Hammerberg",
    		number: "3",
    		postal: "66620"
    	},
    	{
    		uuid: 138,
    		name: "ZA. M. Rupp",
    		tel: "06875-7911",
    		street: "Hauptstraße",
    		number: "26",
    		postal: "66620"
    	},
    	{
    		uuid: 139,
    		name: "Bürgerhaus"
    	},
    	{
    		uuid: 140,
    		name: "Bostalsee",
    		postal: "66625"
    	},
    	{
    		uuid: 141,
    		name: "Gemeinschaftspraxis Dres. Rauber/Kandels",
    		tel: "06854-248",
    		street: "Zur Imweiler Wies",
    		number: "2",
    		postal: "66649"
    	},
    	{
    		uuid: 142,
    		name: "Dorfgemeinschaftshaus"
    	},
    	{
    		uuid: 143,
    		name: "Schloss-Apotheke",
    		postal: "66564"
    	},
    	{
    		uuid: 144,
    		name: "Dr. Judith Simonett",
    		tel: "06824-93020",
    		street: "Im Herrengarten",
    		number: "19",
    		postal: "66564"
    	},
    	{
    		uuid: 145,
    		name: "Martina Hoffmann-Kümmel",
    		tel: "06824-2330",
    		street: "Anton-Hansen-Straße",
    		number: "7",
    		postal: "66564"
    	},
    	{
    		uuid: 146,
    		name: "Roswitha Weber",
    		tel: "06824-302783",
    		street: "Wilhelm-Heinrich-Straße",
    		number: "2",
    		postal: "66564"
    	},
    	{
    		uuid: 147,
    		name: "Grenzland-Apotheke",
    		tel: "06867-91060",
    		street: "Trierer Str.",
    		number: "24",
    		postal: "66706"
    	},
    	{
    		uuid: 148,
    		name: "Römer-Apotheke",
    		tel: "06866-262",
    		street: "Martinusstr.",
    		number: "24",
    		postal: "66706"
    	},
    	{
    		uuid: 149,
    		name: "Dr. Thomas Röder",
    		tel: "06867-254",
    		street: "Kirschenstraße",
    		number: "28",
    		postal: "66706"
    	},
    	{
    		uuid: 150,
    		name: "Roland Woll",
    		tel: "06867-302",
    		street: "Trierer Straße",
    		number: "16",
    		postal: "66706"
    	},
    	{
    		uuid: 151,
    		name: "Apotheke am Markt",
    		tel: "06898-694910",
    		street: "Am Marktplatz 26-",
    		number: "28",
    		postal: "66346"
    	},
    	{
    		uuid: 152,
    		name: "Dr. Peter Treitz",
    		tel: "06898-66233",
    		street: "Am Marktplatz 26-",
    		number: "28",
    		postal: "66346"
    	},
    	{
    		uuid: 153,
    		name: "Andreas Dutka",
    		tel: "06898-689444",
    		street: "Pickardstraße",
    		number: "36",
    		postal: "66346"
    	},
    	{
    		uuid: 154,
    		name: "Dr. Andreas Pletat",
    		tel: "06898-63063",
    		street: "Marktstraße",
    		number: "59",
    		postal: "66346"
    	},
    	{
    		uuid: 155,
    		name: "Dr. Nicole Weiten",
    		tel: "06806-48393",
    		street: "Hauptstraße",
    		number: "3",
    		postal: "66346"
    	},
    	{
    		uuid: 156,
    		name: "Dr. Oliver Löb",
    		tel: "06898-6043",
    		street: "Marktstraße",
    		number: "43",
    		postal: "66346"
    	},
    	{
    		uuid: 157,
    		name: "Gerhard Becker",
    		tel: "06898-66226",
    		street: "Rathausplatz",
    		number: "2",
    		postal: "66346"
    	},
    	{
    		uuid: 158,
    		name: "San.-Rat Dr. Eckart Rolshoven",
    		tel: "06898-96140",
    		street: "Ludwigstraße",
    		number: "1",
    		postal: "66346"
    	},
    	{
    		uuid: 159,
    		name: "Dr. Werner Reichert",
    		tel: "06897-99660",
    		street: "Schumannstraße",
    		number: "1a",
    		postal: "66287"
    	},
    	{
    		uuid: 160,
    		name: "Gemeinschaftspraxis Dr. Günder/Schneider",
    		tel: "06897-966235",
    		street: "Schulstraße",
    		number: "43",
    		postal: "66287"
    	},
    	{
    		uuid: 161,
    		name: "Saartal-Apotheke",
    		tel: "06835-3642",
    		street: "Poststr.",
    		number: "64",
    		postal: "66780"
    	},
    	{
    		uuid: 162,
    		name: "St. Martin-Apotheke",
    		tel: "06835-93633",
    		street: "Zur Niedtalhalle",
    		number: "1",
    		postal: "66780"
    	},
    	{
    		uuid: 163,
    		name: "Gemeinschaftspraxis Dres. Wenzl-Bauer/Wenzl",
    		tel: "06835-60730",
    		street: "Bahnhofstraße",
    		number: "1 a",
    		postal: "66780"
    	},
    	{
    		uuid: 164,
    		name: "Albrecht Kröber",
    		tel: "06806-13610",
    		street: "Herchenbacher Straße",
    		number: "22",
    		postal: "66292"
    	},
    	{
    		uuid: 165,
    		name: "Gemeinschaftspraxis Dr. Bellmann/Godel",
    		tel: "06806-920288",
    		postal: "66292"
    	},
    	{
    		uuid: 166,
    		name: "Gemeinschaftspraxis Messerle/ Dr. Schweizer",
    		tel: "06806-994880",
    		street: "Marienstraße",
    		number: "6",
    		postal: "66292"
    	},
    	{
    		uuid: 167,
    		name: "Gemeinschaftspraxis Dr. Messerle/ Kreckmann",
    		tel: "06806-9948820",
    		street: "Marienstraße",
    		number: "6",
    		postal: "66292"
    	},
    	{
    		uuid: 168,
    		name: "Viktoria-Apotheke",
    		street: "Bahnofstr. 95+",
    		number: "97",
    		postal: "66111"
    	},
    	{
    		uuid: 169,
    		name: "Apotheke im Medizeum",
    		tel: "0681-883985-0",
    		street: "Europaallee",
    		number: "15",
    		postal: "66113"
    	},
    	{
    		uuid: 170,
    		name: "Stengel-Apotheke",
    		tel: "0681-52363",
    		street: "Eisenbahnstr.",
    		number: "25",
    		postal: "66117"
    	},
    	{
    		uuid: 171,
    		name: "Kramer'sche Apotheke",
    		tel: "0681-851159",
    		street: "Saargemünder Str.",
    		number: "125",
    		postal: "66119"
    	},
    	{
    		uuid: 172,
    		name: "Apotheke am Geisberg",
    		tel: "0681-894476",
    		street: "Kaiserstr.",
    		number: "49",
    		postal: "66121"
    	},
    	{
    		uuid: 173,
    		name: "Apotheke am Zoo",
    		tel: "0681-818961",
    		street: "Brandenburger Platz",
    		number: "12",
    		postal: "66121"
    	},
    	{
    		uuid: 174,
    		name: "Römer-Apotheke",
    		tel: "0681-62417",
    		street: "Am Kieselhumes",
    		number: "42c",
    		postal: "66123"
    	},
    	{
    		uuid: 175,
    		name: "Rotenbühl-Apotheke",
    		tel: "0681-34090",
    		street: "Kaiserslauterer Str.",
    		number: "1",
    		postal: "66123"
    	},
    	{
    		uuid: 176,
    		name: "Barbara-Apotheke",
    		tel: "06898-80055",
    		street: "Alleestr.",
    		number: "32",
    		postal: "66126"
    	},
    	{
    		uuid: 177,
    		name: "Apotheke im Globus",
    		tel: "0681-874191",
    		street: "Wolfsau",
    		number: "4",
    		postal: "66130"
    	},
    	{
    		uuid: 178,
    		name: "Einhorn-Apotheke",
    		tel: "0681-872157",
    		street: "Saargemünder Str.",
    		number: "165",
    		postal: "66130"
    	},
    	{
    		uuid: 179,
    		name: "Linden-Apotheke",
    		tel: "0681-872587",
    		street: "Saarbrücker Str.",
    		number: "122",
    		postal: "66130"
    	},
    	{
    		uuid: 180,
    		name: "Markus-Apotheke",
    		tel: "0681-980340",
    		street: "Kaiserstr.",
    		number: "77",
    		postal: "66133"
    	},
    	{
    		uuid: 181,
    		name: "Claudia Scharl",
    		tel: "0681-34155",
    		street: "Ursulinenstraße",
    		number: "65",
    		postal: "66111"
    	},
    	{
    		uuid: 182,
    		name: "Dr. Anne Benn Lembert",
    		tel: "0681-84493000",
    		street: "Bahnhofstraße 76 -",
    		number: "78",
    		postal: "66111"
    	},
    	{
    		uuid: 183,
    		name: "Dr. Agathe Krahl",
    		tel: "0681-9101148",
    		street: "Trierer Straße",
    		number: "8",
    		postal: "66111"
    	},
    	{
    		uuid: 184,
    		name: "Dr. Diana Csikai",
    		tel: "0681-9101788",
    		street: "Bahnhofstraße",
    		number: "101",
    		postal: "66111"
    	},
    	{
    		uuid: 185,
    		name: "Dr. Gökmen Gül",
    		tel: "0681-91008550",
    		street: "Reichsstraße",
    		number: "16",
    		postal: "66111"
    	},
    	{
    		uuid: 186,
    		name: "Dr. Jo Brauer",
    		tel: "0681-397989",
    		street: "Dudweilerstraße",
    		number: "2 a",
    		postal: "66111"
    	},
    	{
    		uuid: 187,
    		name: "Dr. Katrin Bachelier",
    		tel: "0681-33667",
    		street: "Kaiserstraße",
    		number: "1 a",
    		postal: "66111"
    	},
    	{
    		uuid: 188,
    		name: "Dr. Najib Müller-Bütow",
    		tel: "0681-34618",
    		street: "Berliner Promenade",
    		number: "16",
    		postal: "66111"
    	},
    	{
    		uuid: 189,
    		name: "Dr. Petra Karst",
    		tel: "0681-38004",
    		street: "Viktoriastraße",
    		number: "6",
    		postal: "66111"
    	},
    	{
    		uuid: 190,
    		name: "Dr. Thomas Dapper",
    		tel: "0681-371373",
    		street: "Bahnhofstraße",
    		number: "101",
    		postal: "66111"
    	},
    	{
    		uuid: 191,
    		name: "Dr. Vera Endres",
    		tel: "0681-740099",
    		street: "Bahnhofstraße",
    		number: "32",
    		postal: "66111"
    	},
    	{
    		uuid: 192,
    		name: "Gemeinschaftspraxis Dr. Dietrich/Dietrich",
    		tel: "0681-34033",
    		street: "Bahnhofstraße",
    		number: "56",
    		postal: "66111"
    	},
    	{
    		uuid: 193,
    		name: "Gemeinschaftspraxis Dres. Kuppig/Duchow/Drescher/Steimer",
    		tel: "0681-52166",
    		postal: "66111"
    	},
    	{
    		uuid: 194,
    		name: "Gemeinschaftspraxis Gospodinov/Projsner",
    		tel: "0681-967570",
    		street: "Mainzer Straße",
    		number: "38",
    		postal: "66111"
    	},
    	{
    		uuid: 195,
    		name: "Horst Philippi",
    		tel: "0681-32472",
    		street: "Bahnhofstraße",
    		number: "34",
    		postal: "66111"
    	},
    	{
    		uuid: 196,
    		name: "Karoline Jager",
    		tel: "0681-9473333",
    		street: "Trierer Straße",
    		number: "40",
    		postal: "66111"
    	},
    	{
    		uuid: 197,
    		name: "Rainer Hoffmann",
    		tel: "0681-936220",
    		street: "Dudweilerstraße",
    		number: "2 a",
    		postal: "66111"
    	},
    	{
    		uuid: 198,
    		name: "Wolfgang Wahlster",
    		tel: "0681-31088",
    		street: "Blumenstraße",
    		number: "11",
    		postal: "66111"
    	},
    	{
    		uuid: 199,
    		name: "Dr. Papageorgiou Agisilaos",
    		tel: "0173-3290904",
    		street: "0173-",
    		number: "3290904",
    		postal: "66111"
    	},
    	{
    		uuid: 200,
    		name: "Dr. M. Di Lorenzo",
    		tel: "0681-9387553",
    		street: "Bleichstraße",
    		number: "27",
    		postal: "66111"
    	},
    	{
    		uuid: 201,
    		name: "Dr. T. Geßner",
    		tel: "0681-398383",
    		street: "Dudweilerstraße",
    		number: "5",
    		postal: "66111"
    	},
    	{
    		uuid: 202,
    		name: "Dres. Hahn/Weber/Hahn Ferreira",
    		tel: "0681-62100",
    		street: "Neugäßchen",
    		number: "20",
    		postal: "66111"
    	},
    	{
    		uuid: 203,
    		name: "Dr. P. Klein",
    		tel: "0681-83908989",
    		street: "Bahnhofstraße",
    		number: "34",
    		postal: "66111"
    	},
    	{
    		uuid: 204,
    		name: "BAG Anna-Böttcher/Böttcher",
    		tel: "0681-31323",
    		street: "Viktoriastraße",
    		number: "4",
    		postal: "66111"
    	},
    	{
    		uuid: 205,
    		name: "Dr. Annette Geiger-Klein",
    		tel: "0681-73832",
    		street: "Rastpfuhl",
    		number: "3",
    		postal: "66113"
    	},
    	{
    		uuid: 206,
    		name: "Dr. Dirk Pilger",
    		tel: "0681-72424",
    		street: "Riegelsberger Straße",
    		number: "74",
    		postal: "66113"
    	},
    	{
    		uuid: 207,
    		name: "Dr. Thomas Kirch",
    		tel: "0681-71208",
    		street: "Rheinstraße",
    		number: "23",
    		postal: "66113"
    	},
    	{
    		uuid: 208,
    		name: "Gemeinschaftspraxis Dr. Zimmer/Schimke",
    		tel: "0681-74809",
    		street: "Rheinstraße",
    		number: "37",
    		postal: "66113"
    	},
    	{
    		uuid: 209,
    		name: "Wannenmacher/Fuchs",
    		tel: "0681-971350",
    		street: "Rheinstraße",
    		number: "35",
    		postal: "66113"
    	},
    	{
    		uuid: 210,
    		name: "Gemeinschaftspraxis Dres. Korpys/Plitt-Wehnert/Loytved",
    		tel: "0681-791550",
    		postal: "66115"
    	},
    	{
    		uuid: 211,
    		name: "Olga Piatezki",
    		tel: "0681-790809",
    		street: "Bergstraße",
    		number: "54",
    		postal: "66115"
    	},
    	{
    		uuid: 212,
    		name: "Saeb Awad",
    		tel: "0681-76391",
    		street: "Hochstraße",
    		number: "149",
    		postal: "66115"
    	},
    	{
    		uuid: 213,
    		name: "Frank Born",
    		tel: "0681-583236",
    		street: "Metzer Straße",
    		number: "102",
    		postal: "66117"
    	},
    	{
    		uuid: 214,
    		name: "German Dreßen",
    		tel: "0681-34544",
    		street: "Eisenbahnstraße",
    		number: "27",
    		postal: "66117"
    	},
    	{
    		uuid: 215,
    		name: "Dr. Said Seidahmadi",
    		tel: "0681-852221",
    		street: "Saargemünder Straße",
    		number: "125",
    		postal: "66119"
    	},
    	{
    		uuid: 216,
    		name: "Gemeinschaftspraxis Dr. Jacobi/Jacobi",
    		tel: "0681-852466",
    		street: "Saargemünder Straße",
    		number: "158",
    		postal: "66119"
    	},
    	{
    		uuid: 217,
    		name: "Dr. F. Petry/C.Petry",
    		tel: "0681-56126",
    		street: "Eisenbahnstraße",
    		number: "25",
    		postal: "66117"
    	},
    	{
    		uuid: 218,
    		name: "Christian Lahr",
    		tel: "0681-65008",
    		street: "Mainzer Straße",
    		number: "94",
    		postal: "66121"
    	},
    	{
    		uuid: 219,
    		name: "Dr. Julia Lohmann",
    		tel: "0681-648884",
    		street: "Mainzer Straße",
    		number: "135",
    		postal: "66121"
    	},
    	{
    		uuid: 220,
    		name: "Dr. Liane Berndt",
    		tel: "0681-98833744",
    		street: "Eschberger Weg",
    		number: "1",
    		postal: "66121"
    	},
    	{
    		uuid: 221,
    		name: "Dr. Martin Neu",
    		tel: "0681-61800",
    		street: "Mainzer Straße",
    		number: "161",
    		postal: "66121"
    	},
    	{
    		uuid: 222,
    		name: "Karl-Josef Pirrung",
    		tel: "0681-897337",
    		street: "Kaiserstraße",
    		number: "49",
    		postal: "66121"
    	},
    	{
    		uuid: 223,
    		name: "Markus Breitenbach",
    		tel: "0681-831440",
    		street: "Arndtstraße",
    		number: "21",
    		postal: "66121"
    	},
    	{
    		uuid: 224,
    		name: "Peter Sulger",
    		tel: "0681-648884",
    		street: "Mainzer Straße",
    		number: "135",
    		postal: "66121"
    	},
    	{
    		uuid: 225,
    		name: "Thomas Johannes",
    		tel: "0681-9850260",
    		street: "Eschberger Hofplatz",
    		number: "1",
    		postal: "66121"
    	},
    	{
    		uuid: 226,
    		name: "Gemeinschaftspraxis Dres. Klein/Reinert",
    		tel: "0681-34944",
    		street: "Scheidter Straße",
    		number: "1",
    		postal: "66123"
    	},
    	{
    		uuid: 227,
    		name: "Tatjana Kotro",
    		tel: "0681-31638",
    		street: "Im Sauerbrod",
    		number: "16",
    		postal: "66123"
    	},
    	{
    		uuid: 228,
    		name: "Ursula Danner-Baltes",
    		tel: "0681-6850800",
    		street: "Heidenkopferdell",
    		number: "6",
    		postal: "66123"
    	},
    	{
    		uuid: 229,
    		name: "Anne Meier-Heinrich",
    		tel: "06897-7780373",
    		street: "Saarbrücker Straße",
    		number: "251",
    		postal: "66125"
    	},
    	{
    		uuid: 230,
    		name: "Bernd Allmannsberger",
    		tel: "06897-75071",
    		street: "Liesbet-Dill-Straße",
    		number: "7",
    		postal: "66125"
    	},
    	{
    		uuid: 231,
    		name: "Dr. Manuela Petak",
    		tel: "06897-71038",
    		street: "Saarbrücker Straße",
    		number: "219",
    		postal: "66125"
    	},
    	{
    		uuid: 232,
    		name: "Dr. Martin Jockers",
    		tel: "06897-77500",
    		street: "Saarbrücker Straße",
    		number: "242",
    		postal: "66125"
    	},
    	{
    		uuid: 233,
    		name: "Gemeinschaftspraxis Dres. Koc/Marz/Stenger",
    		tel: "06897-9242025",
    		street: "In den Rodhecken",
    		number: "5",
    		postal: "66125"
    	},
    	{
    		uuid: 234,
    		name: "Ralph Theres",
    		tel: "06897-8405460",
    		street: "Beethovenstraße",
    		number: "17",
    		postal: "66125"
    	},
    	{
    		uuid: 235,
    		name: "Werner Meier",
    		tel: "06897-761063",
    		street: "Saarbrücker Straße",
    		number: "251",
    		postal: "66125"
    	},
    	{
    		uuid: 236,
    		name: "Dr. Markus Niedereichholz",
    		tel: "06897-75031",
    		street: "Saarbrücker Str.",
    		number: "26",
    		postal: "66125"
    	},
    	{
    		uuid: 237,
    		name: "Dr. Dorothee Gaul",
    		tel: "06898-82088",
    		street: "Alleestraße",
    		number: "38",
    		postal: "66126"
    	},
    	{
    		uuid: 238,
    		name: "Dr. Kerstin Mayer",
    		tel: "06898-31008",
    		street: "Hauptstraße",
    		number: "40",
    		postal: "66127"
    	},
    	{
    		uuid: 239,
    		name: "Gemeinschaftspraxis Klein/Winkelspecht",
    		tel: "06898-93160",
    		street: "Kreisstraße",
    		number: "30",
    		postal: "66127"
    	},
    	{
    		uuid: 240,
    		name: "Ute Ulrich",
    		tel: "06898-93160",
    		street: "Kreisstraße",
    		number: "30",
    		postal: "66127"
    	},
    	{
    		uuid: 241,
    		name: "Dr. Christof Weber",
    		tel: "0681-703483",
    		street: "Kirchenstraße",
    		number: "35",
    		postal: "66128"
    	},
    	{
    		uuid: 242,
    		name: "Dr. Barbara Busse",
    		tel: "0681-9883640",
    		street: "Saarbrücker Straße",
    		number: "144",
    		postal: "66130"
    	},
    	{
    		uuid: 243,
    		name: "Gemeinschaftspraxis Dres. Schmidt/Tosounidis",
    		tel: "06805-21488",
    		street: "Saarbrücker Straße",
    		number: "144",
    		postal: "66130"
    	},
    	{
    		uuid: 244,
    		name: "Stephan Getzlaff",
    		tel: "0681-87156",
    		street: "Spitalstraße",
    		number: "2",
    		postal: "66130"
    	},
    	{
    		uuid: 245,
    		name: "Dr. Klaus Bauer",
    		tel: "0681-897414",
    		street: "Kreuzstraße",
    		number: "15",
    		postal: "66132"
    	},
    	{
    		uuid: 246,
    		name: "Gemeinschaftspraxis Veauthier/Veauthier",
    		tel: "0681-811919",
    		street: "Kaiserstraße",
    		number: "77",
    		postal: "66133"
    	},
    	{
    		uuid: 247,
    		name: "Corona Testzentrum Güdingen",
    		street: "Saargemünderstr.",
    		number: "161",
    		postal: "66130"
    	},
    	{
    		uuid: 248,
    		name: "Corona Testzentrum Brebach,  -",
    		street: "Saarbrückerstr.",
    		number: "146",
    		postal: "66130"
    	},
    	{
    		uuid: 249,
    		name: "Apotheke im Globus",
    		tel: "06831-4881580",
    		street: "Dieselstr.",
    		number: "3",
    		postal: "66740"
    	},
    	{
    		uuid: 250,
    		name: "Römer-Apotheke",
    		tel: "06831-88880",
    		street: "Schulstr.",
    		number: "7",
    		postal: "66740"
    	},
    	{
    		uuid: 251,
    		name: "Apollonia Apotheke",
    		street: "06831/",
    		number: "82828",
    		postal: "66740"
    	},
    	{
    		uuid: 252,
    		name: "Glückauf-Apotheke",
    		street: "06831/",
    		number: "80560",
    		postal: "66740"
    	},
    	{
    		uuid: 253,
    		name: "Dr. Holger Groß",
    		tel: "06831-5031788",
    		street: "Pavillonstraße",
    		number: "20",
    		postal: "66740"
    	},
    	{
    		uuid: 254,
    		name: "Dr. Jan Berner",
    		tel: "06831-80051",
    		street: "Lebacher Straße",
    		number: "25",
    		postal: "66740"
    	},
    	{
    		uuid: 255,
    		name: "Dr. med. Maria Liszka",
    		tel: "06831-83717",
    		street: "Bahnhofstrasse",
    		number: "14",
    		postal: "66740"
    	},
    	{
    		uuid: 256,
    		name: "Dr. Peter Szymanski",
    		tel: "06831-1331",
    		street: "Lothringer Straße 3-",
    		number: "5",
    		postal: "66740"
    	},
    	{
    		uuid: 257,
    		name: "Dr. Thomas Nauhauser",
    		tel: "06831-41305",
    		street: "Großer Markt",
    		number: "28",
    		postal: "66740"
    	},
    	{
    		uuid: 258,
    		name: "Dres. Link/Steffen/Philipps/Bitsch",
    		tel: "06831-120490",
    		street: "Lisdorfer Straße",
    		number: "19",
    		postal: "66740"
    	},
    	{
    		uuid: 259,
    		name: "Gemeinschaftspraxis Dr. Djoudi/Salm",
    		tel: "06831-1270006",
    		street: "Lothringer Straße 3-",
    		number: "5\n                        66740"
    	},
    	{
    		uuid: 260,
    		name: "Gemeinschaftspraxis Dres. Breyer/Molter-Carbini",
    		tel: "06831-42054",
    		street: "Großer Markt",
    		number: "8",
    		postal: "66740"
    	},
    	{
    		uuid: 261,
    		name: "Herbert Hanisch",
    		tel: "06831-2468",
    		street: "Kaiser-Friedrich-Ring",
    		number: "30",
    		postal: "66740"
    	},
    	{
    		uuid: 262,
    		name: "MVZ-Saar Dr. Ihmann",
    		tel: "06831-41001",
    		street: "Lisdorfer Straße",
    		number: "19",
    		postal: "66740"
    	},
    	{
    		uuid: 263,
    		name: "Dr. Benedict Schmitt",
    		tel: "06831-81477",
    		street: "06831-",
    		number: "81477",
    		postal: "66740"
    	},
    	{
    		uuid: 264,
    		name: "Dr. A. Blaes-Salz",
    		tel: "06831-128060",
    		street: "Großer Markt",
    		number: "21",
    		postal: "66740"
    	},
    	{
    		uuid: 265,
    		name: "Husaren-Apotheke",
    		tel: "06836-86140",
    		street: "Kirchenstr.",
    		number: "49a",
    		postal: "66793"
    	},
    	{
    		uuid: 266,
    		name: "Dres. Ney/Porzsolt",
    		tel: "06838-81036",
    		street: "Dorfstraße",
    		number: "23",
    		postal: "66793"
    	},
    	{
    		uuid: 267,
    		name: "Gemeinschaftspraxis Adolph/Mißler",
    		tel: "06838-2348",
    		street: "Wilhelmstraße 14-",
    		number: "16",
    		postal: "66793"
    	},
    	{
    		uuid: 268,
    		name: "Gemeinschaftspraxis Dr. Borkowski/Borkowski",
    		tel: "06838-2419",
    		street: "Vorstadtstraße",
    		number: "1",
    		postal: "66793"
    	},
    	{
    		uuid: 269,
    		name: "Thomas Mann-Apotheke",
    		tel: "06821-692122",
    		street: "Hüngersberstr.",
    		number: "1",
    		postal: "66578"
    	},
    	{
    		uuid: 270,
    		name: "Ali Tadjrischi",
    		tel: "06821-64004",
    		street: "Kreisstraße",
    		number: "20",
    		postal: "66578"
    	},
    	{
    		uuid: 271,
    		name: "Gemeinschaftspraxis Ammann/Bungert (Hr. Troitzsch)",
    		tel: "06821-6258",
    		street: "Auf der Brück",
    		number: "8",
    		postal: "66578"
    	},
    	{
    		uuid: 272,
    		name: "Gemeinschaftspraxis Dres. Omlor/Omlor",
    		tel: "06821-68356",
    		street: "Redener Straße",
    		number: "33",
    		postal: "66578"
    	},
    	{
    		uuid: 273,
    		name: "Limbacher-Apotheke",
    		street: "Dorfstr.",
    		number: "138",
    		postal: "66839"
    	},
    	{
    		uuid: 274,
    		name: "Dr. Stefan Groß",
    		tel: "06887-2172",
    		street: "Rathausplatz",
    		number: "2",
    		postal: "66839"
    	},
    	{
    		uuid: 275,
    		name: "Dr. Klaus Umlauf",
    		tel: "06834-51240",
    		street: "Bachtalstraße",
    		number: "204",
    		postal: "66773"
    	},
    	{
    		uuid: 276,
    		name: "Dr. Silke Hauck",
    		tel: "06821-974444",
    		street: "St. Ingberter Straße",
    		number: "1",
    		postal: "66583"
    	},
    	{
    		uuid: 277,
    		name: "Ibrahim Othman",
    		tel: "06821-71111",
    		street: "Hauptstraße",
    		number: "100",
    		postal: "66583"
    	},
    	{
    		uuid: 278,
    		name: "Gambrinus-Apotheke",
    		tel: "06894-3386",
    		street: "Poststr.",
    		number: "1",
    		postal: "66386"
    	},
    	{
    		uuid: 279,
    		name: "Ingobertus-Apotheke",
    		tel: "06894-92680",
    		street: "Poststr.",
    		number: "26",
    		postal: "66386"
    	},
    	{
    		uuid: 280,
    		name: "Rohrbach-Apotheke",
    		tel: "06894-52345",
    		street: "Obere Kaiserstr.",
    		number: "128",
    		postal: "66386"
    	},
    	{
    		uuid: 281,
    		name: "Johannis-Apotheke",
    		street: "06894/",
    		number: "53500",
    		postal: "66386"
    	},
    	{
    		uuid: 282,
    		name: "Dr. Dirk Bauer",
    		tel: "06894-310525",
    		street: "Rickertstraße",
    		number: "42",
    		postal: "66386"
    	},
    	{
    		uuid: 283,
    		name: "Frank Rausch",
    		tel: "06894-955713",
    		street: "Finkenstraße",
    		number: "3",
    		postal: "66386"
    	},
    	{
    		uuid: 284,
    		name: "Karsten Theiß",
    		tel: "06894-2092",
    		street: "Oststraße",
    		number: "68",
    		postal: "66386"
    	},
    	{
    		uuid: 285,
    		name: "MVZ St. Ingbert Dennis Borces",
    		tel: "06894-36000",
    		street: "Kaiserstraße",
    		number: "22",
    		postal: "66386"
    	},
    	{
    		uuid: 286,
    		name: "Bernhard Kohl",
    		tel: "06851-3011",
    		street: "Wendalinusstraße",
    		number: "20",
    		postal: "66606"
    	},
    	{
    		uuid: 287,
    		name: "Dr. Claudia Jobst",
    		tel: "06851-2583",
    		street: "Alter Woog",
    		number: "5",
    		postal: "66606"
    	},
    	{
    		uuid: 288,
    		name: "Dr. Eduard Schmid",
    		tel: "06851-4174",
    		street: "St. Annenstraße",
    		number: "10",
    		postal: "66606"
    	},
    	{
    		uuid: 289,
    		name: "Dr. Harald Thömmes",
    		tel: "06851-3053",
    		street: "Lebacher Straße",
    		number: "2",
    		postal: "66606"
    	},
    	{
    		uuid: 290,
    		name: "Dr. Saskia Ost-Zeyer",
    		tel: "06851-6665",
    		street: "Wendalinusstraße",
    		number: "8",
    		postal: "66606"
    	},
    	{
    		uuid: 291,
    		name: "Gemeinschaftspraxis Caspary/Burgheim",
    		tel: "06851-2815",
    		street: "Mommstraße",
    		number: "47",
    		postal: "66606"
    	},
    	{
    		uuid: 292,
    		name: "Gemeinschaftspraxis Dres. Rauber/Kandels",
    		tel: "06851-974900",
    		street: "St. Annenstraße",
    		number: "10 a",
    		postal: "66606"
    	},
    	{
    		uuid: 293,
    		name: "Dr. D. + S. Hör",
    		tel: "06851-85491",
    		street: "Oberlinxweilerstraße",
    		number: "59",
    		postal: "66606"
    	},
    	{
    		uuid: 294,
    		name: "Prof. Dr. Dr. P. Maurer",
    		tel: "06851-9398450",
    		street: "Wendalinusstraße 5-",
    		number: "7",
    		postal: "66606"
    	},
    	{
    		uuid: 295,
    		name: "Testzentrum Bosenbach"
    	},
    	{
    		uuid: 296,
    		name: "Schnelltestzentrum in der Parkstraße 9 in St. Wendel",
    		street: "mittwochs 15 bis",
    		number: "19 Uhr"
    	},
    	{
    		uuid: 297,
    		name: "Salzbrunnen-Apotheke",
    		tel: "06897-503456",
    		street: "Sulzbachtalstr.",
    		number: "60",
    		postal: "66280"
    	},
    	{
    		uuid: 298,
    		name: "Dr. Anja Fischer",
    		tel: "06897-52442",
    		street: "Grühlingstraße",
    		number: "66",
    		postal: "66280"
    	},
    	{
    		uuid: 299,
    		name: "Dr. Petra Birtel",
    		tel: "06897-87330",
    		street: "Eisenbahnschachtanlage",
    		number: "9",
    		postal: "66280"
    	},
    	{
    		uuid: 300,
    		name: "Dr. Sigrid Uhlig",
    		tel: "06897-2284",
    		street: "Am Markt",
    		number: "4",
    		postal: "66280"
    	},
    	{
    		uuid: 301,
    		name: "Dr. Lutz Kirbis",
    		tel: "06897-55363",
    		street: "06897-",
    		number: "55363",
    		postal: "66280"
    	},
    	{
    		uuid: 302,
    		name: "Gemeinschaftspraxis Dres. Klemm/Frank",
    		tel: "06897-2500",
    		street: "Sulzbachtalstraße",
    		number: "60",
    		postal: "66280"
    	},
    	{
    		uuid: 303,
    		name: "Orthozentrum Saar",
    		tel: "06897-2964",
    		street: "Sulzbachtalstraße",
    		number: "58",
    		postal: "66280"
    	},
    	{
    		uuid: 304,
    		name: "Werner Ganz",
    		tel: "06897-4036",
    		street: "Am Markt",
    		number: "6",
    		postal: "66280"
    	},
    	{
    		uuid: 305,
    		name: "Dr. Heinrich Habig",
    		tel: "06853-91170",
    		street: "Primstalstraße",
    		number: "30 a",
    		postal: "66636"
    	},
    	{
    		uuid: 306,
    		name: "Montag:",
    		street: "Zum Vogelsang",
    		number: "2"
    	},
    	{
    		uuid: 307,
    		name: "Dienstag:"
    	},
    	{
    		uuid: 308,
    		name: "Mittwoch:",
    		street: "Keltenweg",
    		number: "3"
    	},
    	{
    		uuid: 309,
    		name: "Donnerstag:",
    		street: "Theeltalstraße",
    		number: "6"
    	},
    	{
    		uuid: 310,
    		name: "Freitag:",
    		street: "Im Matzenecken",
    		number: "1"
    	},
    	{
    		uuid: 311,
    		name: "Dr. Joachim Schillen",
    		tel: "06836-2771",
    		street: "Saarlouiser Straße",
    		number: "63",
    		postal: "66802"
    	},
    	{
    		uuid: 312,
    		name: "Gemeinschaftspraxis Dres. Schmidt/Kosiol",
    		tel: "06836-2938",
    		street: "Gluckstraße",
    		number: "1 a",
    		postal: "66802"
    	},
    	{
    		uuid: 313,
    		name: "Landmann Apotheke",
    		tel: "06898-290111",
    		street: "Moltkestr.",
    		number: "5",
    		postal: "66333"
    	},
    	{
    		uuid: 314,
    		name: "Merkur-Apotheke",
    		tel: "06898-23010",
    		street: "Bismarckstr.",
    		number: "7",
    		postal: "66333"
    	},
    	{
    		uuid: 315,
    		name: "Dr. Andreas Niethammer",
    		tel: "06898-26450",
    		street: "Marktstraße",
    		number: "5",
    		postal: "66333"
    	},
    	{
    		uuid: 316,
    		name: "Dr. Bogdan Milek",
    		tel: "06898-299696",
    		street: "Rathausstraße",
    		number: "26",
    		postal: "66333"
    	},
    	{
    		uuid: 317,
    		name: "Dr. Christian Wehberg",
    		tel: "06898-23895",
    		street: "Rathausstraße",
    		number: "30",
    		postal: "66333"
    	},
    	{
    		uuid: 318,
    		name: "Dr. Stefanie Zahn-Dingfelder",
    		tel: "06898-76255",
    		street: "Ludweilerstraße",
    		number: "147",
    		postal: "66333"
    	},
    	{
    		uuid: 319,
    		name: "Ramin Moili",
    		tel: "06898-22369",
    		street: "Marktstraße",
    		number: "1",
    		postal: "66333"
    	},
    	{
    		uuid: 320,
    		name: "Dr. C. Andres",
    		tel: "06898-4728",
    		street: "Völklinger Straße",
    		number: "46",
    		postal: "66333"
    	},
    	{
    		uuid: 321,
    		name: "Dr. Christian Brunner",
    		tel: "06871-4311",
    		street: "Uhlandstraße",
    		number: "1",
    		postal: "66687"
    	},
    	{
    		uuid: 322,
    		name: "Dr. Cornelia Friedrich-Meyer",
    		tel: "06871-90950",
    		street: "Hasenberg",
    		number: "3",
    		postal: "66687"
    	},
    	{
    		uuid: 323,
    		name: "Dr. Wolfgang Hoffmann",
    		tel: "06874-302970",
    		street: "Im Selling",
    		number: "4",
    		postal: "66687"
    	},
    	{
    		uuid: 324,
    		name: "Gemeinschaftspraxis Dres. Bonakdar/Arlt",
    		tel: "06871-91093",
    		street: "Kräwigstraße 2-",
    		number: "6",
    		postal: "66687"
    	},
    	{
    		uuid: 325,
    		name: "Gemeinschaftspraxis Frank/Meyer/Raber",
    		tel: "06871-909880",
    		street: "Kräwigstraße 2-",
    		number: "6",
    		postal: "66687"
    	},
    	{
    		uuid: 326,
    		name: "Thomas Rehlinger",
    		tel: "06874-555",
    		street: "Im Selling",
    		number: "4",
    		postal: "66687"
    	},
    	{
    		uuid: 327,
    		name: "Schlossberghalle in Büschfeld",
    		street: "Eisenbahnstraße",
    		number: "99",
    		postal: "66687"
    	},
    	{
    		uuid: 328,
    		name: "Gangolf-Apotheke",
    		tel: "06834-60267",
    		street: "Hauptstr.",
    		number: "2",
    		postal: "66787"
    	},
    	{
    		uuid: 329,
    		name: "Abtei-Apotheke",
    		tel: "06834-94130",
    		street: "Lindenstr.",
    		number: "73",
    		postal: "66878"
    	},
    	{
    		uuid: 330,
    		name: "Dr. Franca Gatto-Collura, 06834-41478, Lindenstraße 75, 66787 Wadgassen"
    	},
    	{
    		uuid: 331,
    		name: "Dr. Hans Hermann Zipp",
    		tel: "06834-61770",
    		street: "Kirchendell",
    		number: "10",
    		postal: "66787"
    	},
    	{
    		uuid: 332,
    		name: "Dr. Sabine Schackmann",
    		tel: "06834-41112",
    		street: "Kaiserstraße",
    		number: "31",
    		postal: "66787"
    	},
    	{
    		uuid: 333,
    		name: "Till Woysch",
    		tel: "06834-43011",
    		street: "Lindenstraße",
    		number: "73",
    		postal: "66787"
    	},
    	{
    		uuid: 334,
    		name: "Dr. Franca Gatto-Collura",
    		tel: "06834-41478",
    		street: "Lindenstraße",
    		number: "75",
    		postal: "66787"
    	},
    	{
    		uuid: 335,
    		name: "Dr. E. Bahnemann",
    		tel: "06834-42688",
    		street: "Lindenstraße",
    		number: "53",
    		postal: "66787"
    	},
    	{
    		uuid: 342,
    		name: "Park-Apotheke Thiel-Trennheuser OHG",
    		tel: "06831-4870848",
    		street: "Hauptstr.",
    		number: "39",
    		postal: "66798"
    	},
    	{
    		uuid: 343,
    		name: "Dr. Michael Kulas",
    		tel: "06837-74144",
    		street: "Moselstraße",
    		number: "4",
    		postal: "66798"
    	},
    	{
    		uuid: 344,
    		name: "Dr. A. Buchmann",
    		tel: "06876-7151",
    		street: "Losheimer Straße",
    		number: "1",
    		postal: "66709"
    	}
    ];

    function form() {
        var o = {
            postal: new URL(window.location.href).searchParams.get('search') || '',
            onSearch: function (event) {
                var _this = this;
                if (event) {
                    event.preventDefault();
                }
                console.log('onSearch');
                if (!this.postal || this.postal === '') {
                    this.locations = __spreadArray([], locations);
                    if (window.history.pushState) {
                        var url = new URL(window.location.href);
                        // set search property to blank
                        url.search = '';
                        window.history.pushState({ path: url.toString() }, '', url.toString());
                    }
                }
                else {
                    this.locations = locations.filter(function (location) { return location.postal === _this.postal; });
                    if (window.history.pushState) {
                        var url = new URL(window.location.href);
                        url.searchParams.set('search', this.postal);
                        window.history.pushState({ path: url.toString() }, '', url.toString());
                    }
                }
                return this.locations;
            },
            locations: __spreadArray([], locations)
        };
        // @ts-ignore
        o.locations = o.onSearch(null);
        return o;
    }
    // @ts-ignore
    window.form = form;

}());
