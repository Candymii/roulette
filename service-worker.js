// ==========================================
// Roulette Timer
// Service Worker
// ==========================================


const CACHE_NAME =
    "roulette-timer-v1";


const FILES = [

    "./",

    "./index.html",

    "./style.css",

    "./data.js",

    "./roulette.js",

    "./timer.js",

    "./settings.js",

    "./app.js"

];



// インストール

self.addEventListener(
    "install",
    event => {


        event.waitUntil(

            caches.open(CACHE_NAME)
            .then(
                cache =>
                    cache.addAll(FILES)
            )

        );

    }
);



// キャッシュ利用

self.addEventListener(
    "fetch",
    event => {


        event.respondWith(

            caches.match(
                event.request
            )
            .then(
                response => {

                    return response ||
                        fetch(event.request);

                }

            )

        );


    }
);