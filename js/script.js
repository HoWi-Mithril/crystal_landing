

function glow_action() {
    let tl = gsap.timeline({ repeat: -1 });
    let elements_Trigger = document.querySelectorAll(".trigger")


    for (let i = 0; i < elements_Trigger.length; i++) {
        let elem_Class = elements_Trigger[i]
        tl.to(elem_Class, { delay: 2, opacity: 1, duration: 2 })
            .to(elem_Class, { delay: 2, opacity: 0, duration: 2, clearProps: "opacity" });

    };
}

onload = glow_action

document.getElementById("banner").addEventListener("click", poupup)

let banner_popup = document.getElementById("banner_popup");
let banner_popup_close = document.getElementById("banner_popup_close");

let banner_popup_img = document.getElementById("banner_popup_img");
let banner_popup_descr = document.getElementById("banner_popup_descr");


/* Answer from Server : */
let arr_rocks = {
    item_1: {
        name: "Quartz",
        img_link: "link",
        descr: "Rock 1 - Lorem Ipsum",
        color: "#FACCBF"
    },
    item_2: {
        name: "Pyrite",
        img_link: "link",
        descr: "Rock 2 - Lorem Ipsum",
        color: "#E3D8C1"
    },
    item_3: {
        name: "Shungite",
        img_link: "link",
        descr: "Rock 3 - Lorem Ipsum",
        color: "#878C8F"
    },
    item_4: {
        name: "Amethyst",
        img_link: "link",
        descr: "Rock 4 - Lorem Ipsum",
        color: "#C09DBD"
    },
    item_5: {
        name: "Selenite",
        img_link: "link",
        descr: "Rock 5 - Lorem Ipsum",
        color: "#FAEDA3"
    },
    item_6: {
        name: "Yamal",
        img_link: "link",
        descr: "Rock 6 - Lorem Ipsum"
    },
    item_7: {
        name: "United",
        img_link: "link",
        descr: "Rock 7 - Lorem Ipsum"
    },
    item_8: {
        name: "Instral",
        img_link: "link",
        descr: "Rock 8 - Lorem Ipsum"
    },
    item_9: {
        name: "Opal",
        img_link: "link",
        descr: "Rock 9 - Lorem Ipsum"
    },
    item_10: {
        name: "Polimdor",
        img_link: "link",
        descr: "Rock 10 - Lorem Ipsum"
    },
    item_11: {
        name: "Ametis",
        img_link: "link",
        descr: "Rock 11 - Lorem Ipsum"
    },
    item_12: {
        name: "Sorkis",
        img_link: "link",
        descr: "Rock 12 - Lorem Ipsum"
    }
}

function poupup(e) {

    if (e.target.className == "trigger") {
        banner_popup.classList.add('show');

        banner_popup_name.innerText = arr_rocks["item_" + e.target.dataset.img_number].name
        banner_popup_img.src = `../img/rocks/banner_rock_${e.target.dataset.img_number}.png`
        banner_popup_descr.innerText = arr_rocks["item_" + e.target.dataset.img_number].descr

    }
}

function hide_element(elem = banner_popup) {
    console.log("Function hide_element")
    if (elem.classList.contains('show')) {
        elem.classList.remove('show');
    }
}

banner_popup_close.addEventListener("click", () => hide_element(banner_popup))

/* Section top_items - change color of glow */

let top_items_list_rocks = document.getElementById("top_items_list_rocks");
top_items_list_rocks.addEventListener("click", changeBackgroundGradient)

function changeBackgroundGradient(e) {
    let gradientBG = "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, #FFFFFF 100%), "
    if (e.target.tagName = "LI") {
        console.log(e.target.dataset.rock_number)
        let bg = gradientBG + (arr_rocks["item_" + e.target.dataset.rock_number].color || "#FACCBF");
        document.getElementById("top_items_glow").style.background = bg
    }
}

/* Section Feedback - change Feedbacks */

let feedback_tl = gsap.timeline({ duration: 2, delay: 1, repeat: -1 });
let elements_Items = document.querySelectorAll(".feedback_comment_blockquote")

function feedback_show() {

    for (let i = 0; i < elements_Items.length; i++) {
        let elem_Class = elements_Items[i]

        feedback_tl
            .to(elem_Class, { opacity: 1, zIndex: 10 })
            .to(elem_Class, { duration: 10 })
            .to(elem_Class, { opacity: 0 })
    }

}

onload = feedback_show()


