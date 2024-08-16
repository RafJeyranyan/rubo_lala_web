'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "061972ce5eb56df69bc9eb637a655078",
".git/config": "535c470ec91c3da8526200fa8dfc61cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "752d18c2b8491b6814ea5a4415c9efa1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb0381b5b8c7d0440d8b6ff07f3b24d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dc5e3b4f4f537945eba68ffb83193d7",
".git/logs/refs/heads/main": "4e44dcf6c624846b7dee27caae61b53e",
".git/logs/refs/remotes/origin/dev": "5861c6d8ba63be5f9cff11ebf8013c4c",
".git/logs/refs/remotes/origin/main": "55839872b2aa020b3686bcf13e74c51a",
".git/objects/01/7b4d9c7eb0f5704ef6c8695817b39167c1d8da": "86264a7fe6c8ca0d5655643d13a8e455",
".git/objects/03/124557d2264e3e2f94703a578b1f7e6dda54ab": "f975c5b40076ae497805e48d74cbb5bd",
".git/objects/04/e0c145b0b5b5a670393e7f536e3e89c9ad8583": "6d545d2cf89984faf4e6f05545e1e9cc",
".git/objects/0e/07518d2c59a59887383d5b65817528bed2618b": "3e72548713897c6a4c2b6b46d07a4e1b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/de3df68e42aa26c6c6afb279048cf5ecef4322": "de47518ea28345fb21c8f5fec3d94d11",
".git/objects/13/c56987c017a859a1b6cfb634133b8da8df7fb4": "011021037a8d8aa4194aa756bc0db3d0",
".git/objects/18/6d952d498024a4dd677aa5b0aac4cb9189bb11": "e6a1e3a6cda5125c97a5d8299f7ecaf0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/2293adae43475e0a39838742b8f10091e990e5": "e5091290e8e80dd139e6a2e9da9861d7",
".git/objects/1d/0cdaa085962ccfdf262b066fdb77ab85b93742": "c0a228d844ed97ec2556672e86198d20",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9c79c5da0d69c19078aaf08614e30792984c46": "0935b063f00c052339534fc4e3f2dbb8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/57f962636a8cb7345b7e50ef1661d1e414c53a": "5f939cd1b51f4c9a45886a345f3eab1f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/e93b6e15ba38625b7a96c49765bf24c7891552": "e27f8ce7133ab594d449535acf56fa76",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/8fea13c91a68b4444f2cd12e0e3b1e7d8cef69": "acf3f5a9e90b218586b2b663894bda0d",
".git/objects/27/6496ba124922c55e64216152fbe2ad7c277f98": "3958c583e758d0b530e7e22e867b7c49",
".git/objects/29/008f00cf6f2f0a2bdc94da0ed695b5d64aeb67": "1baab29cc150c39193acaa030782a90a",
".git/objects/29/94438073970d687f49fe8fae175f73e57d81bd": "b90c19c6a1d65441e8f38ec47594de94",
".git/objects/2a/055ccaeb25d13154ba02fc6a55b81aa7391463": "8403ce2b88d0013b638c1611cba204f8",
".git/objects/2a/2a9e171e0f24a87e9730dc162d8436fb01e36f": "a992d558099e02c8f7a0159c8f8f9a3a",
".git/objects/2b/ded9739256a10c8308dd278bc3e31835977c5b": "688ae220fbb5a06d4ba063e11611418b",
".git/objects/2e/c35bd8ba67a8036f869c65509881ee575d9328": "d180cb37c1c7c1d153695a2da5f5e69c",
".git/objects/30/8a7388c8bdebeb2a2acd7fb9dec42a65a40ad1": "854fc8bb7be4a60dbb6210d5f705f81b",
".git/objects/38/066bba8b104f85239d60d8d627955aecbfa35c": "fbf0b48448aa6907f103fe7e0b3a56dd",
".git/objects/3b/91c5cd2b724cb8c7f507fc2a6f86288bff81b5": "64f9bec06aa2d2d6d5ced29f479d4a76",
".git/objects/3c/47a6bc38378951533558409cf1153a89742c59": "92d529f293367c75dca0c6033bf3b5f8",
".git/objects/3c/8638a527180f18a2dffabd1e0f5518ec3ad64a": "3a191d9dae94117e8f261e68ec68817f",
".git/objects/3c/8cb1bc064d5987d02729aae60a453a21b12f25": "5cbbd58988de250b1d3f85dcceee7946",
".git/objects/3d/3aaf46071783af4e90cde4734f9199186a5ce0": "b425b23f4c9c1e0a623969e1455e9d58",
".git/objects/40/72e7a2d85604ca2bdc62af8d7623c3cdab7ef2": "c44ddfca5d6cdff9108285ace528997e",
".git/objects/41/192dfffb87bfddbc50e181b34e8d13beb58e35": "8d84a4af825cf2c07f6a94872208f24b",
".git/objects/43/506bfce678e46b0a580d060ed6b22d46cb4a5d": "f34104918e7f605254c442d8e71508c5",
".git/objects/47/486a7dc0bd86ac27be00664beb35f2b74bb25b": "3ba7723512f3a549135cc67ba9ea6c45",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/542c38e95b77a8a822324cf081192e021ecff3": "d9da5e97aada51efdf6b30773595eaec",
".git/objects/4d/dd075a73ca0cd4b8b1a7fe42934bc16acdd411": "bf2a50fe216f8009313721f95f73e039",
".git/objects/50/6c88f4d81dc81eb57c58394d330b45dc72002c": "47781a66c807ed7b6445da0081a2100a",
".git/objects/51/a21058b47fe910c70d338ebf210543ce161eb7": "5ddc4fa89edf35d1e16c253611a70bae",
".git/objects/53/7252ff0b6a1a022dec9bdc78bef69f8e80c3c6": "fd33670decd6980eb8e2586df09d561b",
".git/objects/53/963edecee3cdcdb3e3a55a15b4cc1c055e8ed0": "aa324d7e18dfa73586a90aa6926b7877",
".git/objects/55/8610acbcab30f2422ed83364dfc526e47166d7": "ce32a16fd1bb10337980d46b6384bb6d",
".git/objects/58/1d064cc08ac34f90783be4f385b3d30f49a846": "75ee1d96ad857eb75cbd126fb889c537",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/61871b865d9ee9a8d8db0504567588f74098cc": "912c3e46cc6b903a52f94b82d4cbab0b",
".git/objects/5a/0cd85f219d9c0f3700623cd448e8098846336a": "e2b41370e0ef472ebe6cc4f672f7304b",
".git/objects/5d/125af52937a66b14ab9801226c8b1b4dbd53e4": "142ccab14f26a5360895c67bcddf526b",
".git/objects/5d/3a1fa4bf052ad33f6c3993d2ea7d7073c4b48e": "b74d722066d1caea847868af4a65765f",
".git/objects/61/b6507790fed21733df99bc8ba1d5fdf02e8256": "d2cd6308291b925f6eb37f6aa69c4e41",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/fe7ae471cd2f834630fd4d672500592db5a961": "3900f7dbb9f9c90c302736039d54ebaa",
".git/objects/67/a3f6e5c56c9215d3c5aa965a4113eb5fecdc67": "a3c008eec27a56606999dfd19faa0083",
".git/objects/69/1393c273417076c64bef7f637ff718dfd55962": "4681c1903cee09410b6503830dd683ce",
".git/objects/6c/c728349cc667bb059c1fb07b14acca49155f36": "ba310b496bf87552cec8509391c5ecf9",
".git/objects/6c/f22acf3c270f7ea7b9e0619b3df582037fe978": "28448a5ac68c23eba5842f857b353c03",
".git/objects/6e/518b53a2f05af2e5224b756a7d353a7996edd1": "fa99823fa22b5e97eef2114949a0bf45",
".git/objects/70/ba2775c196e760b2444e6d713e52485bec2d45": "7ee3b78038cc3700928b6cfa3719dc76",
".git/objects/70/d53a52d52d55d877b67e7efa00c95e38842efc": "195c2f1159ec1d74952552ea165e0918",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/0f247b265f9782207b96cb494c4a0c79744fc6": "17224b59a303c4b83d8b16261cc8fde4",
".git/objects/78/6e9150b30e50bf2eb1795d7268d51d26e4c832": "ff0abdbc19876c038d7899c6d7f5a8e8",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/8e7868f9effab2bb730fa33c149264c348307c": "a0d7b532564cbec42fc91eb503d518fd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/11a29b7e63db979bc19bb4cc76075e2b402c4d": "4e766700f544c89daf98a9e46d21b337",
".git/objects/87/5ea4fbb8d99c84561e4f8097a5b535351f1ebb": "96d11a4a8e97743f4ea5a241363048ef",
".git/objects/88/012284e26c1f8779065c5467efbcaccbfbebc2": "c9d63622de7299dc6f99dcc949500465",
".git/objects/88/662344b04ac7fcaf6954352a71e9f59cb45a2b": "ff1f3c7a589086c2192afb3cb054a5f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/61e492fc237c1881efa5d97e71610198211b83": "b5412aedb6cb229d8e3895746fa7b332",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/534265bc3ba63125d72789759e69ee7db2a336": "03c4dd3b2526feab1d40377ac8254ad3",
".git/objects/95/cb4f6d2068ea72438f26f32e0225f5fb36d91f": "a3143d21737799914991e8f13a87444e",
".git/objects/97/7b19d2bcf32c78031050148e0d72b6ebe9f58d": "de698fc52628b1fb74e93d906c3b0240",
".git/objects/9f/f73ccfa62daeacb4bf81f4bf9d8eb84c40caf8": "e302f5526c782fef006db4bfe355970b",
".git/objects/a2/7b3a9aecc53e9bcd8033f05fdb1c85b536da50": "815fabad486ef8d16679a958c0485e2b",
".git/objects/a9/99fe4838f577e4603ab8f05d416b0a45b1087d": "578d5e2d66855e97a9a3eed00bf4b293",
".git/objects/ac/c2cfe19f121d9ffb888b3f61678e8c43a6634b": "83f11c6d49df60e7b963cad11ed70628",
".git/objects/b3/665b48a1503780620674d98c58306020220c50": "83326c89dafcbd14468b220b5f11e512",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/d8751c68dd4e51ff0e40012779e0e87c4fdb24": "4f548a30844bbacbe4750633c8548353",
".git/objects/b7/19d0b3b93cdb1dbb96283e885462008b803c20": "dbb9821e87841ae9bcf233c2bc1d11fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6353eb80118961137cea76ae88a90b4c901c77": "771b4e0508b6ad36f9e634a9bebcbfca",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/cf4d50f3b5cb9c983b7caf9866ddf18394fbd7": "c05ea32d7ccd480e47e85cf1943a2c4f",
".git/objects/bc/16d8bc198ef85b953c1ea20ecf1a4fd8c7aa98": "3d7a640736b315a0c544508c6bc30e9f",
".git/objects/c0/a58c629e387389a7a5a46127c91c3bb7afa857": "825ac2775451876cd5f6919840439945",
".git/objects/c0/b7011cda1f04668107c0095fb87afa74d0a313": "b28ba84cbb77adf53958debe0b8c784c",
".git/objects/c1/fea7003aea532c0aa74f26bde1adffd708ce03": "019c1298879a1fc4bc640e3c63bfcb8a",
".git/objects/c2/2162fcd042d9fcd524109577ef663732d8a3ce": "6cdea88cb44bd8ef599d7deff58ed0ed",
".git/objects/c5/5ae2b87b9b9dfd299042ca661546b364c8ef66": "4e9c875bde06dc103016381a0a2c10bd",
".git/objects/c7/82502f3eb35accff02755ba051ebcec07b322d": "a53af51d6dc98908e004afecd1db140e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/2ea135d311352fe144c896ed196d7731ba764e": "ba91c4883459026511925b10530bd366",
".git/objects/cd/5f8c3a1319725af7e369b9aedd552a27720be5": "07940e8cdd45afa355e6cde579ef7dc6",
".git/objects/ce/8ec238590932d8da23a2dcfc7909f0699d90b7": "7ec6316c7af0152baae0e50e03800911",
".git/objects/d0/1ad69a3031830680248b680f14cd461337bb05": "97cc3abc8107aaf322a31d05fd0b86a1",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/a1358659e2e9d93a6a40dec204339c915e9f9d": "c3b7452ae2e7ef7722abf91857d0191d",
".git/objects/d2/d5d2f532ff58e0279547706994934fb5cdc46c": "3d1cac5d29266ef082ace370d3ccd965",
".git/objects/d3/fb8ee28a140b79375d636d62bef56e910e2a51": "07200d2778b05c60890f0592bf5bf5fe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/45741c79a5deb9f5f1087b1d1ac73bde1a4953": "93e6ed5309d248ca8583096624ddd9f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/caddb55c45ab39742fa18a4f52115e8fb5a266": "ef253538dd8c6364bf92430ae6113568",
".git/objects/d8/91238c2643bfd7eb4f608cfd6a3759050ee5e6": "4d4be17ddcc27cefab87e32500a667de",
".git/objects/d9/bf63adc8bafbd5016e02777e84c4c2da8a9916": "c883eaaed89f5aef5cd5c498645f48ed",
".git/objects/da/021e54208e4fb8f3b0d8f574d6ebf94340e3a6": "e884bee50afcf5381206fa9597bf0923",
".git/objects/da/796f3e1a60abe063fd790be44e1df95427cb6c": "ff253dda1d4df0ab0a28213e316eb5d4",
".git/objects/da/972a746086e59ba790d1ae157c02096a251650": "a1aedfa2f33b9b1ff85157d5e8d81990",
".git/objects/dc/ce0db6e6b257622690bae6bd16643324c49aff": "88309cd0b8b42562ff6372027c34f5b2",
".git/objects/e0/756be64778b7993b46c895316d45db08903351": "b37ca6bdb97051a5d0b534e47ed41f7f",
".git/objects/e2/e5e128addf3447549b5cf94d70a5f62a21848f": "265f5c14b9292d6d0a102221c35110f8",
".git/objects/e9/d6b941387799cb1106a572030d00015c70c152": "385e5e9cd117090439373a45806fd3b5",
".git/objects/ea/67214426d62b018caf3822d6b8da3d0d568cb0": "1c6823e32d68a96faa1253b73af93c11",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3e10a924d70fac0e654705a89bddb6534a973f": "a59503b92f4561aabcd51827e314feea",
".git/objects/f1/0115ce14515abfbff6ef5e06bd09228f35b8a1": "b002f8a7959aeb98fed7010d73c51438",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8a4772a00645a4ea78130f4811474f824e3ca5": "ab3f819162641cacba4cefaf07604578",
".git/objects/f6/80ee4d4722870c5f8065d46d73a8f4bef4a790": "3be9d452796adf78be4bbe6b1e65a7fb",
".git/objects/f7/e1973d298307a8042948564c784b996ca57ba4": "b319fdbcfb41eddb76f7cc236abac440",
".git/objects/f9/59f7fff04549207b3edfa3000af01b71eea8cc": "258523722f281165d4a487b0ca8358ce",
".git/objects/fa/984f0bff8b1292f291c5c8087bd4a0564fa305": "15ff85163623effffa58a511c7b381e9",
".git/objects/fe/101c893e5d33775ade99ae2b95e25d52a12a92": "0c7ea2cf7eb96ba2da66cf68bc005333",
".git/ORIG_HEAD": "5af0648a56aa6c162508b0dcae5095d8",
".git/refs/heads/main": "ddbb748478f165b80913b3a346cfa66b",
".git/refs/remotes/origin/dev": "2a45d6a7b0a4d1594449edf11dead483",
".git/refs/remotes/origin/main": "ddbb748478f165b80913b3a346cfa66b",
"assets/AssetManifest.bin": "c9877252cdb8408000dbaaef74cfb82b",
"assets/AssetManifest.bin.json": "a33d6d5ac15a634451faa111f18ae4fa",
"assets/AssetManifest.json": "b6caa0f7fd33e6236a54444cf266315e",
"assets/assets/fonts/aida/SHKAida-DemiBold.otf": "797e2f881eee8d078dbc28d79fabc476",
"assets/assets/fonts/aida/SHKAida-DemiBoldItalic.otf": "53b1de26d6136d9e803fa913f62f40f4",
"assets/assets/fonts/aida/SHKAida-Light.otf": "0a99720feb52239351b71e005623116d",
"assets/assets/fonts/aida/SHKAida-LightItalic.otf": "4d0a557f4b72f5bd4cf0130770c8b4fc",
"assets/assets/fonts/aida/SHKAida-Medium.otf": "83c6b91dbb6ef1d5f6f30086c816f0d1",
"assets/assets/fonts/aida/SHKAida-MediumItalic.otf": "5ba142f47f4da43f00fc3383da8df432",
"assets/assets/fonts/aida/SHKAida-SemiBold.otf": "a04cc85f4a92805ab5b0d524df2e1254",
"assets/assets/fonts/aida/SHKAida-SemiBoldItalic.otf": "a49afcb6f4dfc590819ef07ab99b5e18",
"assets/assets/fonts/aida/SHKAidaBld.otf": "102f125229a4f9c6d653feca7195df79",
"assets/assets/fonts/aida/SHKAidaBld_It.otf": "b931c869677ebaf7117bcf078bf5f450",
"assets/assets/fonts/aida/SHK_Aida.otf": "4b90015f4cabb7e87b49f2a7195d49af",
"assets/assets/fonts/aida/SHK_AidaExtLht.otf": "fa3ea4e16a82c9ee33530b15db92b40f",
"assets/assets/fonts/aida/SHK_AidaExtLht_It.otf": "ade8387b3352beb9b650f3ec9ead009b",
"assets/assets/fonts/aida/SHK_Aida_It.otf": "b50aea3f9e9dd789c447bd1f6abd359f",
"assets/assets/fonts/arian/Arian_Grqi_U.ttf": "7f27fa1f8e1601a4049b8aa92fa73b0c",
"assets/assets/fonts/arti/Arti_Regular.otf": "c179a5214ada20e7520f88a4b432858d",
"assets/assets/fonts/cosi/CosiArm.ttf": "fc9b5a8e6d236c893d2747bb15b3e5fb",
"assets/assets/fonts/poqrik/poqrik.ttf": "58a0453b39d87cafec0b34b19b9f38c5",
"assets/assets/fonts/tangerine/Tangerine_Bold.ttf": "64631f6503c63e20bb50fadee9ae92de",
"assets/assets/fonts/tangerine/Tangerine_Regular.ttf": "d1b4668c3fb0f99386a8025299fc72b3",
"assets/assets/images/img.png": "337b91e40247c205edc4ecd18b399169",
"assets/assets/images/img_1.png": "859e66ce6d822d055f85d38551464637",
"assets/assets/images/img_2.png": "a32f9b434ea91c178a1f76b44618c7c2",
"assets/assets/logo/ring.png": "a1b5fb43766bfecc5973218920afc2ad",
"assets/FontManifest.json": "dfa2ae4384415de33f1050cf8b715a0e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "729b3c1f71caa4d8e929b7b7cf3e315e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "c484852db50223136b363f95839013f7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9253037c290b51ec773bd26575112f41",
"icons/Icon-192.png": "55b89f1e3342765732779483ce6727da",
"icons/Icon-512.png": "e119f396feae558f82d7768068ea6797",
"icons/Icon-maskable-192.png": "55b89f1e3342765732779483ce6727da",
"icons/Icon-maskable-512.png": "e119f396feae558f82d7768068ea6797",
"index.html": "54bffed34f2d5bf82aba08635d8b9a9c",
"/": "54bffed34f2d5bf82aba08635d8b9a9c",
"main.dart.js": "329dbc1e7d759a0abc416f47cd31763b",
"manifest.json": "da5f10481885d64dd730e8b26b41f014",
"version.json": "0c415bbafa36cec75cfb6ed3c5e03ad0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
