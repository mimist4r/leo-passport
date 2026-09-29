```javascript
/* =========================
   LEO PASSPORT
   JAVASCRIPT
========================= */


/* ENTER PASSPORT */

function enterPassport() {

    const cover = document.getElementById("cover");
    const passport = document.getElementById("passport");

    cover.style.display = "none";
    passport.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   DEMO STAMP SYSTEM
========================= */

/*
   This is ONLY for testing the website.

   Later, we will connect this to the
   real Leo database so YOU can give
   members stamps from your dashboard.
*/

let stamps = 0;

function addDemoStamp() {

    if (stamps >= 5) {
        return;
    }

    stamps++;

    const stamp = document.getElementById("stamp" + stamps);

    if (stamp) {
        stamp.classList.remove("empty");
        stamp.classList.add("collected");

        stamp.querySelector("span").textContent = "✦";
        stamp.querySelector("small").textContent =
            "LEO STAMP";
    }

    document.getElementById("stampCount").textContent = stamps;
}
```
