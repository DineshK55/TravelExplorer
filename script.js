window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        const cardTop =
        card.getBoundingClientRect().top;

        const trigger = window.innerHeight - 100;

        if(cardTop < trigger){

            card.classList.add("show");
        }

    });

});