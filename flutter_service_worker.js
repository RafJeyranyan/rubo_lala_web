'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/config": "535c470ec91c3da8526200fa8dfc61cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ac9ffaa9f6f039c12b63f725d709374d",
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
".git/index": "9d6ae9f11b7e0fc9b0b6c95fa241a171",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a751d3153af980c8f15eab05b4bb8b23",
".git/logs/refs/heads/main": "92acfde004705927bdd197776027a6c3",
".git/logs/refs/heads/master": "892e298a6b3f54382065c946fa087dcd",
".git/logs/refs/remotes/origin/main": "aeb6c2ce6237202e139c6d513e45902c",
".git/objects/04/8879eff3f5f03a76d5cefe30a793a544a31593": "64e8e8f01eab9cbd7563088fb14a3036",
".git/objects/04/e0c145b0b5b5a670393e7f536e3e89c9ad8583": "6d545d2cf89984faf4e6f05545e1e9cc",
".git/objects/04/e1cc81cedd4d725b810c8b93cfd76cd332bfee": "d6374c437f40236446c6b3ef2167966d",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/441d2df9008a72504c5598076fa5a5f4d51aad": "867ed847e1d8f4568fb280676afb60f8",
".git/objects/13/c56987c017a859a1b6cfb634133b8da8df7fb4": "011021037a8d8aa4194aa756bc0db3d0",
".git/objects/15/c92b4fa6e788f2a14107edb3d9173c1540b6c2": "8176a0e6c5738767e84f7f2d95ab677e",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/2293adae43475e0a39838742b8f10091e990e5": "e5091290e8e80dd139e6a2e9da9861d7",
".git/objects/1b/fd2dbfc2a4c91150c43dd3a3e4b402e5af2581": "fcb49fd1c61d43fc7c2898705dcaf566",
".git/objects/1d/0cdaa085962ccfdf262b066fdb77ab85b93742": "c0a228d844ed97ec2556672e86198d20",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/e93b6e15ba38625b7a96c49765bf24c7891552": "e27f8ce7133ab594d449535acf56fa76",
".git/objects/24/6e96105861b048387a7f459704c4085bc7e812": "898fbc71ed28fce0fa8cd2d5c3abf216",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/055ccaeb25d13154ba02fc6a55b81aa7391463": "8403ce2b88d0013b638c1611cba204f8",
".git/objects/2a/2a9e171e0f24a87e9730dc162d8436fb01e36f": "a992d558099e02c8f7a0159c8f8f9a3a",
".git/objects/2b/7bae7e865237d3ccc96a08e594356d4270f429": "902c26ae68269750a1dda085091fae19",
".git/objects/2b/ded9739256a10c8308dd278bc3e31835977c5b": "688ae220fbb5a06d4ba063e11611418b",
".git/objects/34/3e7d135a6c2f524196635dfc7ec6eebd086e5c": "7f52443a2eaec742708b6c09cb84bbdc",
".git/objects/38/066bba8b104f85239d60d8d627955aecbfa35c": "fbf0b48448aa6907f103fe7e0b3a56dd",
".git/objects/3a/4b8aad001808cd86655f069217d742bdd24c0d": "c91d170734b20529e670cf8abcd47083",
".git/objects/3b/91c5cd2b724cb8c7f507fc2a6f86288bff81b5": "64f9bec06aa2d2d6d5ced29f479d4a76",
".git/objects/3d/3aaf46071783af4e90cde4734f9199186a5ce0": "b425b23f4c9c1e0a623969e1455e9d58",
".git/objects/43/506bfce678e46b0a580d060ed6b22d46cb4a5d": "f34104918e7f605254c442d8e71508c5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/542c38e95b77a8a822324cf081192e021ecff3": "d9da5e97aada51efdf6b30773595eaec",
".git/objects/4f/a84c8643d80122bdae7130e2fc2883bfa01c8f": "b379159f734a36ee485d38c842f78358",
".git/objects/50/6c88f4d81dc81eb57c58394d330b45dc72002c": "47781a66c807ed7b6445da0081a2100a",
".git/objects/51/1a65f12274e897747f64dd0f978517653a2c55": "2c18d384d66db22e781ffc5cbda56024",
".git/objects/53/7252ff0b6a1a022dec9bdc78bef69f8e80c3c6": "fd33670decd6980eb8e2586df09d561b",
".git/objects/55/8610acbcab30f2422ed83364dfc526e47166d7": "ce32a16fd1bb10337980d46b6384bb6d",
".git/objects/55/f3678d3f92c6fb52952615d2747c7e0e58ecb7": "f11d75c6c1f3f88d2f2e6fe0834d8f4f",
".git/objects/58/1d064cc08ac34f90783be4f385b3d30f49a846": "75ee1d96ad857eb75cbd126fb889c537",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/4c33b49ca7922b401da002fbf39a5dfed9dab8": "1edcf8d38a1fd164c618b87b791825bf",
".git/objects/65/b4f8a6ee7bd2aec22361b1a88df8d5a7ec45f6": "578596ac64d55f7e5414267bc5280c7b",
".git/objects/69/dc7f2568aca476e3042e9f7a39ab6a4c44bcf2": "f50690427650eb460a1c75d754d11c59",
".git/objects/6e/518b53a2f05af2e5224b756a7d353a7996edd1": "fa99823fa22b5e97eef2114949a0bf45",
".git/objects/6e/e0d0b360d2f19b47d0bc9fbd91a64585f6b68c": "e6bc1c68befea6018c40080a17b83608",
".git/objects/6f/a989999e9fdf6dbe92238cdabfbc6041e7be8b": "3ebdbec1142a33f774f5b7aa08dd0f1b",
".git/objects/70/ba2775c196e760b2444e6d713e52485bec2d45": "7ee3b78038cc3700928b6cfa3719dc76",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/390e2505349e07e7d6b8b5c99a10c3bb727efc": "2e9d5423d2afa04d94bce7674b16bb17",
".git/objects/77/bb637e06825a1468d832204fb479599e871969": "30170003a5d3f960a68dc45505a976bf",
".git/objects/78/6e9150b30e50bf2eb1795d7268d51d26e4c832": "ff0abdbc19876c038d7899c6d7f5a8e8",
".git/objects/7b/c5d6b77a40bcddc3bf4055b90b69ee27efb011": "86720044844d6d9370a2d918e0cc6bc2",
".git/objects/7b/f6de366d3be35e0568881e533847d190261e18": "ffaab63bc6183952161516961e29d270",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/719a2aeb75315e34c79182ff0c78e6c1594f99": "4249d5529a2ca898cc475cb0133489d0",
".git/objects/86/11a29b7e63db979bc19bb4cc76075e2b402c4d": "4e766700f544c89daf98a9e46d21b337",
".git/objects/87/5ea4fbb8d99c84561e4f8097a5b535351f1ebb": "96d11a4a8e97743f4ea5a241363048ef",
".git/objects/87/76237157804706696e2917b51b61d4657f25ed": "738b72b9ff0c929eadd9de475fe6eef2",
".git/objects/88/012284e26c1f8779065c5467efbcaccbfbebc2": "c9d63622de7299dc6f99dcc949500465",
".git/objects/8a/61e492fc237c1881efa5d97e71610198211b83": "b5412aedb6cb229d8e3895746fa7b332",
".git/objects/8f/47fb61b079b9b781771b95273ed0d2c8c27d99": "0ce7450c52aacd2d63aaf92f63f681d0",
".git/objects/90/b57194cc9f4d85566333e7d7111ac8dcdfa9b5": "44f5bd45e10d4d96c2b2b49ab6086e5e",
".git/objects/90/cba3fbae5a206ffd31264b603ce5edc59271e1": "40c08132f1ecdd3b688dc3b58ae6fd5e",
".git/objects/93/ca70805a2df7351a5ca62451607c1846f98903": "f581a29db943904ed2963ada24f443c8",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/534265bc3ba63125d72789759e69ee7db2a336": "03c4dd3b2526feab1d40377ac8254ad3",
".git/objects/95/cb4f6d2068ea72438f26f32e0225f5fb36d91f": "a3143d21737799914991e8f13a87444e",
".git/objects/97/b517b1f0411a5ed6ffcffbc2f1f67b1bf6a03f": "3e15a5e1b528bfdc2f5c248152e242fc",
".git/objects/9d/0da355b89fdd8095f44fb22926d0bffb49b270": "fb54e16d74fe73a5b9a1d6222a5dcc63",
".git/objects/9f/f73ccfa62daeacb4bf81f4bf9d8eb84c40caf8": "e302f5526c782fef006db4bfe355970b",
".git/objects/a2/0220560a1c100e3192cbb3a8d37ec81aaff8ba": "7fcd717f6f75a71a38e730474d6b7cd3",
".git/objects/a3/73038a0755723f02d07b3a297f7f00e17b5ca1": "5ca258c17f2f5bf77035e908748791fb",
".git/objects/a6/09445e15d13dee64b3e11dd1410c5744b0f82d": "7d95e033a25cb35da3103045a7b38e28",
".git/objects/a7/ab762b9d20cf0729809996db76542cf28914bf": "6991e5e6180744f73046e04df10cc69b",
".git/objects/ac/57946aa649f27e862db71ffbe4a1dc218566ed": "22f7ce77051eea2df066313f9e3af4f7",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b8/9a7ac194e10b1adf86cd7adbbcc52f4ec219bf": "89966b123a9c5a47d1661ebbcf760ba2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/6ad081789f25e0316efb88afef4636964866a4": "e802e6fd6a94f659127871383dde1f5b",
".git/objects/c8/04beb238fd58a58257936332638401d85b3e25": "e9ed45372ebe13b778cb8296f2d19acf",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/ee81aab7c05c7cdc74add9439f593e56399201": "1d61c2c253e50c99ea59af02d818b625",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/0caf5be1b681457a7f5bbd8613d644b4e6b646": "8b96cecd6777ce9f92d933bcf205469c",
".git/objects/cd/2ea135d311352fe144c896ed196d7731ba764e": "ba91c4883459026511925b10530bd366",
".git/objects/ce/8ec238590932d8da23a2dcfc7909f0699d90b7": "7ec6316c7af0152baae0e50e03800911",
".git/objects/ce/c45be45084ce87d39bc3ff95b930437cd72bb5": "19a8bba1aeadf6325528843a5c6eabea",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/7c33c84a4e0c838398f85555a1fdeed5f6a0c0": "86b9854ffdfdfa6b6150ae5704b08b3d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/45741c79a5deb9f5f1087b1d1ac73bde1a4953": "93e6ed5309d248ca8583096624ddd9f6",
".git/objects/d8/91238c2643bfd7eb4f608cfd6a3759050ee5e6": "4d4be17ddcc27cefab87e32500a667de",
".git/objects/db/c799a07c50d4f509fb34036a56c0cf3884cbde": "be6d19a34c9b45ee45655678c4410d79",
".git/objects/e1/a7225384824ff26c23e6eec774f20867ed0002": "d0ffb31921f03cc4a0ff124dcee7bbbb",
".git/objects/e6/1cebc170b69a9ec84bab13de8e1c864c5fd4f8": "1869f25f468a9f27c5bc525d1a90228f",
".git/objects/e9/d6b941387799cb1106a572030d00015c70c152": "385e5e9cd117090439373a45806fd3b5",
".git/objects/ee/5a991540df080593e9fd17842f48754d023f5b": "33084cbeedfcee2cde6501ec399241fe",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/e1973d298307a8042948564c784b996ca57ba4": "b319fdbcfb41eddb76f7cc236abac440",
".git/objects/f8/9d2daf32ce26355bbfaddbe94b25281e76dbb6": "9e050f95b7fa5677473e3401a6f12e59",
".git/objects/f9/743feedd865f96b541163a790334700fad4915": "cf87902e77aa19f815020d4d63a8a028",
".git/objects/fd/80a88fbd16d7989aa8a04454ed4f38d0eef896": "a5f78b1643c204f7fd39c71605260c88",
".git/objects/ff/12e2fcdc214ddda94b52f21259a9cc77900f6b": "b68ebbd680204d750cf2a3387049303e",
".git/objects/pack/pack-49acafc03aba4d03d088f77c7b3ced2c266fd6ac.idx": "602d1b54e06eb04ba0fd82e5fcaba07f",
".git/objects/pack/pack-49acafc03aba4d03d088f77c7b3ced2c266fd6ac.pack": "2f1a90ac59519ab83e47f65919e5c819",
".git/objects/pack/pack-49acafc03aba4d03d088f77c7b3ced2c266fd6ac.rev": "bab67dd3a4564ea2ba13a82a324a47f4",
".git/refs/heads/main": "87a2111d8e692e93c28b9ea70bed5ef1",
".git/refs/heads/master": "da73d3d166d2f210d34876cf129bcda0",
".git/refs/remotes/origin/main": "87a2111d8e692e93c28b9ea70bed5ef1",
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
"assets/assets/images/img.png": "4e7396067d388ce92335b6940bb31fd2",
"assets/assets/images/img_1.png": "b9d1f3fb0331b7c885ef3d67a3a91f5f",
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
"CNAME": "44d6ed84884bab970a8ffb3c61f6a9bf",
"favicon.png": "c484852db50223136b363f95839013f7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2405c71fb859f27c214c1e253130e3f4",
"icons/Icon-192.png": "55b89f1e3342765732779483ce6727da",
"icons/Icon-512.png": "e119f396feae558f82d7768068ea6797",
"icons/Icon-maskable-192.png": "55b89f1e3342765732779483ce6727da",
"icons/Icon-maskable-512.png": "e119f396feae558f82d7768068ea6797",
"index.html": "e27fa0d86dd7971971efcaf349c79d72",
"/": "e27fa0d86dd7971971efcaf349c79d72",
"main.dart.js": "0ccfc63806eb0e93653c5e14704af242",
"manifest.json": "087866b556aaae6254386a523c71e809",
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
