document.addEventListener("DOMContentLoaded", function () {
    const lazyHTML = document.querySelector(".lazyHTML");
    if (lazyHTML) {
      lazyHTML.innerHTML = `
      
    <section class="teacher">
        <div class="teacher__container container">
            <div class="teacher__top">
                <h2 class="teacher__title">Ustozingiz kim?</h2>
                <div class="hero__subBox">😍👇</div>
            </div>

            <img class="teacher__arrow" src="./images/arrow.avif" loading="lazy" alt="arrow">

            <div class="teacher__row">
                <ul class="teacher__col">
                    <li class="teacher__col__card">
                        <img class="teacher__col__card__img" src="./images/verfiy.png" loading="lazy" alt="verfiy">
                        <p class="teacher__col__card__text"><span>Oliy ma’lumotli</span> Nutritsiolog, Dietolog</p>
                    </li>
                    <li class="teacher__col__card">
                        <img class="teacher__col__card__img" src="./images/verfiy.png" loading="lazy" alt="verfiy">
                        <span class="">
                            <h3 class="teacher__col__card__title">Shaxsiy natija:</h3>
                            <p class="teacher__col__card__text">Tug’ruqdan so’ng 120kg dan <br class="only__mobile"> 60kg <br class="only__dasktop"> gacha ozganman,<br class="only__mobile">
                                <span>qayta semirishlarsiz</span>
                            </p>
                        </span>
                    </li>
                    <li class="teacher__col__card">
                        <img class="teacher__col__card__img" src="./images/verfiy.png" loading="lazy" alt="verfiy">

                        <span>
                            <h3 class="teacher__col__card__title">Mijozlar natijasi:</h3>
                            <span >
                                <p class="teacher__col__card__texts">2 oyda -5 kg dan -45 kg ozish</p>
                                <p class="teacher__col__card__texts">5 oyda -70 kg ozish</p>
                                <p class="teacher__col__card__texts">51 xildan ortiq kasalliklardan <br> shifo topish va
                                    farzandli
                                    bo’lish</p>
                            </span>
                        </span>
                    </li>
                </ul>

                <img class="speaker__images" src="./images/speaker.avif" width="243" height="304" loading="lazy"
                    decoding="async" alt="speaker img">
                <div class="speaker__gradient"></div>
            </div>

            <button class="button registerBtns">Ro’yxatdan o’tish</button>
        </div>
    </section>

    <section class="course">
        <div class="course__container container">
            <div class="course__top">
                <h2 class="teacher__title">Kursda nimalarni <br> o’rganasiz?</h2>
                <div class="hero__subBoxs">🤫🌱</div>
            </div>


            <div class="course__col">
                <div class="course__col__card">
                    <div class="course__col__card__img"></div>
                    <h3 class="course__col__title">Oldingi siz:</h3>

                    <ul class="course__col__card__list">
                        <li class="course__col__card__list__item"><span>Tug’ruqdan keyingi vazndan</span> qutila
                            olmagansiz, <br> hozirgi tashqi
                            ko’rinishingiz yoqmaydi</li>
                        <li class="course__col__card__list__item">Doimiy <span>shirinlik</span> va <span>nonga</span>
                            bo’lgan xohish sizni <br> qiynaydi,
                            ozish jarayonida ularni yeya <br> olmaganingizdan <span>asabiylashasiz</span></li>
                        <li class="course__col__card__list__item">Ozish uchun har xil marafon, sportlarga <br>
                            qatnashasiz, ozasiz ammo <span>natija esa <br>
                                vaqtinchalik, qayta semirasiz</span></li>
                        <li class="course__col__card__list__item"><span>Bo’g’imlaringizda og’riqlar</span> va tanangizni
                            <br> ba’zi qismlarida
                            qorayish,toshmalar bor
                        </li>
                    </ul>
                </div>

                <div class="course__col__card">
                    <div class="course__col__card__img"></div>
                    <h3 class="course__col__title">Kursdan keyingi siz:</h3>

                    <ul class="course__col__card__list">
                        <li class="course__col__card__list__item">Tug’ruqdan keyingi vazningizdan, teringiz <br>
                            osilmasdan oson qutilasiz va <span>yaxshi
                                ko’rgan <br> liboslaringizni kiya olasiz</span></li>
                        <li class="course__col__card__list__item">Ozishda <span>dieta va sport bilan
                                shug’ullanmaysiz,</span> <br> ammo 2 oyda -5kg dan -45kg
                            gacha qayta <br> semirmaydigan bo’lib ozasiz</li>
                        <li class="course__col__card__list__item">Dietasiz ozganingiz va Defitsitlaringiz <br>
                            yopilganligi hisobiga, asabiylik, uyqusizlik
                            sizni <br> tark etadi. <span>51 xil kasalligingizga davo topasiz</span></li>
                        <li class="course__col__card__list__item">Boshqa ozish marafonlariga qatnashmaysiz, <br> chunki
                            endi <span>qayta semirmaysiz</span>😉
                        </li>
                    </ul>
                </div>
            </div>

            <button class="button registerBtns">Ro’yxatdan o’tish</button>
        </div>
    </section>
      `;
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".results__col");
  
    function stopAllVideos() {
      document.querySelectorAll(".results__video").forEach((videoBox) => {
        const parent = videoBox.closest(".results__col");
        videoBox.remove();
        if (parent) parent.classList.remove("is-playing");
      });
    }
  
    cards.forEach((card) => {
      const playBtn = card.querySelector(".results__images");
      const videoUrl = card.dataset.video;
  
      if (!playBtn || !videoUrl) return;
  
      playBtn.addEventListener("click", function (e) {
        e.stopPropagation();
  
        stopAllVideos();
  
        if (card.classList.contains("is-playing")) {
          card.classList.remove("is-playing");
          return;
        }
  
        card.classList.add("is-playing");
  
        const videoWrapper = document.createElement("div");
        videoWrapper.className = "results__video";
  
        const src = `${videoUrl}?autoplay=1&rel=0`;
  
        videoWrapper.innerHTML = `
          <iframe
            src="${src}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        `;
  
        card.appendChild(videoWrapper);
      });
    });
  });
  