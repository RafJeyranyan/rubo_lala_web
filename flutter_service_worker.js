'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "63429a53ac82eb10d9ce95a491ea09e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
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
".git/index": "f74e602597f7c71f9463bf286a515df6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1579ebd76b8ece9dba3b272e33c40b52",
".git/logs/refs/heads/dev": "1579ebd76b8ece9dba3b272e33c40b52",
".git/logs/refs/remotes/origin/dev": "a9e8775735ea258db960d6a9a8248f32",
".git/objects/0e/07518d2c59a59887383d5b65817528bed2618b": "3e72548713897c6a4c2b6b46d07a4e1b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/6d952d498024a4dd677aa5b0aac4cb9189bb11": "e6a1e3a6cda5125c97a5d8299f7ecaf0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/6496ba124922c55e64216152fbe2ad7c277f98": "3958c583e758d0b530e7e22e867b7c49",
".git/objects/2a/055ccaeb25d13154ba02fc6a55b81aa7391463": "8403ce2b88d0013b638c1611cba204f8",
".git/objects/2a/2a9e171e0f24a87e9730dc162d8436fb01e36f": "a992d558099e02c8f7a0159c8f8f9a3a",
".git/objects/2b/ded9739256a10c8308dd278bc3e31835977c5b": "688ae220fbb5a06d4ba063e11611418b",
".git/objects/38/066bba8b104f85239d60d8d627955aecbfa35c": "fbf0b48448aa6907f103fe7e0b3a56dd",
".git/objects/3c/47a6bc38378951533558409cf1153a89742c59": "92d529f293367c75dca0c6033bf3b5f8",
".git/objects/3c/8638a527180f18a2dffabd1e0f5518ec3ad64a": "3a191d9dae94117e8f261e68ec68817f",
".git/objects/43/506bfce678e46b0a580d060ed6b22d46cb4a5d": "f34104918e7f605254c442d8e71508c5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/542c38e95b77a8a822324cf081192e021ecff3": "d9da5e97aada51efdf6b30773595eaec",
".git/objects/50/6c88f4d81dc81eb57c58394d330b45dc72002c": "47781a66c807ed7b6445da0081a2100a",
".git/objects/51/a21058b47fe910c70d338ebf210543ce161eb7": "5ddc4fa89edf35d1e16c253611a70bae",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5d/125af52937a66b14ab9801226c8b1b4dbd53e4": "142ccab14f26a5360895c67bcddf526b",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6e/518b53a2f05af2e5224b756a7d353a7996edd1": "fa99823fa22b5e97eef2114949a0bf45",
".git/objects/70/d53a52d52d55d877b67e7efa00c95e38842efc": "195c2f1159ec1d74952552ea165e0918",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/8e7868f9effab2bb730fa33c149264c348307c": "a0d7b532564cbec42fc91eb503d518fd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/662344b04ac7fcaf6954352a71e9f59cb45a2b": "ff1f3c7a589086c2192afb3cb054a5f4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9f/f73ccfa62daeacb4bf81f4bf9d8eb84c40caf8": "e302f5526c782fef006db4bfe355970b",
".git/objects/b3/665b48a1503780620674d98c58306020220c50": "83326c89dafcbd14468b220b5f11e512",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/cf4d50f3b5cb9c983b7caf9866ddf18394fbd7": "c05ea32d7ccd480e47e85cf1943a2c4f",
".git/objects/c7/82502f3eb35accff02755ba051ebcec07b322d": "a53af51d6dc98908e004afecd1db140e",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/a1358659e2e9d93a6a40dec204339c915e9f9d": "c3b7452ae2e7ef7722abf91857d0191d",
".git/objects/d3/fb8ee28a140b79375d636d62bef56e910e2a51": "07200d2778b05c60890f0592bf5bf5fe",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/45741c79a5deb9f5f1087b1d1ac73bde1a4953": "93e6ed5309d248ca8583096624ddd9f6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/91238c2643bfd7eb4f608cfd6a3759050ee5e6": "4d4be17ddcc27cefab87e32500a667de",
".git/objects/d9/bf63adc8bafbd5016e02777e84c4c2da8a9916": "c883eaaed89f5aef5cd5c498645f48ed",
".git/objects/e9/d6b941387799cb1106a572030d00015c70c152": "385e5e9cd117090439373a45806fd3b5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/3e10a924d70fac0e654705a89bddb6534a973f": "a59503b92f4561aabcd51827e314feea",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/59f7fff04549207b3edfa3000af01b71eea8cc": "258523722f281165d4a487b0ca8358ce",
".git/refs/heads/dev": "1446277268c1289a5595db2fecace375",
".git/refs/remotes/origin/dev": "1446277268c1289a5595db2fecace375",
"assets/AssetManifest.bin": "9aba26710f31cc43754eafdaa83ce746",
"assets/AssetManifest.bin.json": "7880d60193d4ee46476bff6f5c4bb335",
"assets/AssetManifest.json": "b736c4e56b3c93ddea7071c7559ca63c",
"assets/assets/fonts/arian/Arian_Grqi_U.ttf": "7f27fa1f8e1601a4049b8aa92fa73b0c",
"assets/assets/fonts/arti/Arti_Regular.otf": "c179a5214ada20e7520f88a4b432858d",
"assets/assets/fonts/cosi/CosiArm.ttf": "fc9b5a8e6d236c893d2747bb15b3e5fb",
"assets/assets/fonts/poqrik/poqrik.ttf": "58a0453b39d87cafec0b34b19b9f38c5",
"assets/assets/fonts/tangerine/Tangerine_Bold.ttf": "64631f6503c63e20bb50fadee9ae92de",
"assets/assets/fonts/tangerine/Tangerine_Regular.ttf": "d1b4668c3fb0f99386a8025299fc72b3",
"assets/assets/images/camera.jpg": "e9b3af907ba8ed8a155949f994cc01ec",
"assets/assets/images/tree.jpg": "0fa03314c390bc2a9eec057a4c760f9e",
"assets/FontManifest.json": "1c7cf2460fbe550f1af102cc363f9273",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "c389cf406fdea40da243b3080f315ec1",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "23a3bfde11495b5ec8b3ed33680f6c3b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8acf6a1a81887049514de8538d6ba7dd",
"/": "8acf6a1a81887049514de8538d6ba7dd",
"main.dart.js": "40ae44cafd77dbcfb60c6fe301c734c3",
"manifest.json": "d0b37625f0fb2a6f371bf0c2a2629c09",
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
