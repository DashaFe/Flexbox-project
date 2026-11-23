import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { useState } from "react";
const header = "_header_1cksy_1";
const inner = "_inner_1cksy_13";
const logo = "_logo_1cksy_21";
const logoMark = "_logoMark_1cksy_28";
const logoText = "_logoText_1cksy_36";
const menu = "_menu_1cksy_44";
const list$1 = "_list_1cksy_50";
const link = "_link_1cksy_56";
const active = "_active_1cksy_72";
const search = "_search_1cksy_82";
const input = "_input_1cksy_92";
const searchButton = "_searchButton_1cksy_108";
const burger = "_burger_1cksy_117";
const burgerLine = "_burgerLine_1cksy_129";
const menuOpen = "_menuOpen_1cksy_169";
const styles$9 = {
  header,
  inner,
  logo,
  logoMark,
  logoText,
  menu,
  list: list$1,
  link,
  active,
  search,
  input,
  searchButton,
  burger,
  burgerLine,
  menuOpen
};
const LINKS = [
  { href: "#about", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];
function Header() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx("header", { className: styles$9.header, children: /* @__PURE__ */ jsxs("div", { className: styles$9.inner, children: [
    /* @__PURE__ */ jsxs("a", { className: styles$9.logo, href: "#top", "aria-label": "Pex — Photoshop website template", children: [
      /* @__PURE__ */ jsx("span", { className: styles$9.logoMark, children: "pex" }),
      /* @__PURE__ */ jsx("span", { className: styles$9.logoText, children: "Photoshop Website template" })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: styles$9.burger,
        "aria-label": "Toggle menu",
        "aria-expanded": open,
        "aria-controls": "main-menu",
        onClick: () => setOpen(!open),
        children: [
          /* @__PURE__ */ jsx("span", { className: styles$9.burgerLine }),
          /* @__PURE__ */ jsx("span", { className: styles$9.burgerLine }),
          /* @__PURE__ */ jsx("span", { className: styles$9.burgerLine })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { id: "main-menu", className: `${styles$9.menu} ${open ? styles$9.menuOpen : ""}`, children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Main navigation", children: /* @__PURE__ */ jsx("ul", { className: styles$9.list, children: LINKS.map((link2, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          className: `${styles$9.link} ${index === 0 ? styles$9.active : ""}`,
          href: link2.href,
          onClick: () => setOpen(false),
          children: link2.label
        }
      ) }, link2.href)) }) }),
      /* @__PURE__ */ jsxs("form", { className: styles$9.search, role: "search", action: "#", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: styles$9.input,
            type: "search",
            name: "q",
            placeholder: "Search Website",
            "aria-label": "Search website"
          }
        ),
        /* @__PURE__ */ jsx("button", { className: styles$9.searchButton, type: "submit", "aria-label": "Search", children: /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: [
          /* @__PURE__ */ jsx("circle", { cx: "6.5", cy: "6.5", r: "5", fill: "none", stroke: "#a9a9b0", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("line", { x1: "10.5", y1: "10.5", x2: "15", y2: "15", stroke: "#a9a9b0", strokeWidth: "2", strokeLinecap: "round" })
        ] }) })
      ] })
    ] })
  ] }) });
}
const button = "_button_1ftk2_1";
const purple = "_purple_1ftk2_21";
const white = "_white_1ftk2_28";
const styles$8 = {
  button,
  purple,
  white
};
function Button({ href = "#contact", variant = "purple", children }) {
  const className = `${styles$8.button} ${variant === "white" ? styles$8.white : styles$8.purple}`;
  return /* @__PURE__ */ jsx("a", { className, href, children });
}
const hero = "_hero_1ugt9_1";
const image$2 = "_image_1ugt9_12";
const content$2 = "_content_1ugt9_22";
const title$5 = "_title_1ugt9_32";
const caption$1 = "_caption_1ugt9_41";
const styles$7 = {
  hero,
  image: image$2,
  content: content$2,
  title: title$5,
  caption: caption$1
};
const hero800 = "/assets/hero-800-vF-diai0.webp";
const hero1600 = "/assets/hero-1600-Cwl2c8JC.webp";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: styles$7.hero, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: styles$7.image,
        src: hero1600,
        srcSet: `${hero800} 800w, ${hero1600} 1600w`,
        sizes: "100vw",
        width: "1600",
        height: "1072",
        alt: "Starry night sky over a desert mountain range",
        fetchPriority: "high"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: styles$7.content, children: [
      /* @__PURE__ */ jsxs("h1", { className: styles$7.title, children: [
        "Designs your eyeballs",
        /* @__PURE__ */ jsx("br", {}),
        "will thank you for"
      ] }),
      /* @__PURE__ */ jsx(Button, { href: "#how-it-works", children: "Get Started Today" }),
      /* @__PURE__ */ jsx("p", { className: styles$7.caption, children: "Lorem ipsum dolor sit amet, consectetur" })
    ] })
  ] });
}
const features = "_features_qeda9_1";
const visuallyHidden = "_visuallyHidden_qeda9_7";
const list = "_list_qeda9_19";
const item = "_item_qeda9_26";
const title$4 = "_title_qeda9_32";
const text$5 = "_text_qeda9_40";
const styles$6 = {
  features,
  visuallyHidden,
  list,
  item,
  title: title$4,
  text: text$5
};
const ITEMS = [
  { title: "A fantastic heading" },
  { title: "Good day blokes" },
  { title: "Blaz Robar for president" },
  { title: "Vote for Robar" }
];
const TEXT = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
function Features() {
  return /* @__PURE__ */ jsxs("section", { className: styles$6.features, id: "how-it-works", "aria-labelledby": "features-title", children: [
    /* @__PURE__ */ jsx("h2", { id: "features-title", className: styles$6.visuallyHidden, children: "How it works" }),
    /* @__PURE__ */ jsx("ul", { className: styles$6.list, children: ITEMS.map((item2) => /* @__PURE__ */ jsxs("li", { className: styles$6.item, children: [
      /* @__PURE__ */ jsx("h3", { className: styles$6.title, children: item2.title }),
      /* @__PURE__ */ jsx("p", { className: styles$6.text, children: TEXT })
    ] }, item2.title)) })
  ] });
}
const cta$1 = "_cta_q8jd8_1";
const title$3 = "_title_q8jd8_30";
const text$4 = "_text_q8jd8_36";
const styles$5 = {
  cta: cta$1,
  title: title$3,
  text: text$4
};
function PinkCta() {
  return /* @__PURE__ */ jsxs("section", { className: styles$5.cta, id: "services", "aria-labelledby": "pink-cta-title", children: [
    /* @__PURE__ */ jsx("h2", { id: "pink-cta-title", className: styles$5.title, children: "Wicked & whack, bang bang boo!" }),
    /* @__PURE__ */ jsx("p", { className: styles$5.text, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut" }),
    /* @__PURE__ */ jsx(Button, { href: "#contact", variant: "white", children: "Get Started Today" })
  ] });
}
const split = "_split_10fom_1";
const reverse = "_reverse_10fom_8";
const media = "_media_10fom_13";
const image$1 = "_image_10fom_22";
const body = "_body_10fom_31";
const heading = "_heading_10fom_41";
const lead = "_lead_10fom_49";
const text$3 = "_text_10fom_55";
const styles$4 = {
  split,
  reverse,
  media,
  image: image$1,
  body,
  heading,
  lead,
  text: text$3
};
function Split({ id, reverse: reverse2 = false, heading: heading2, lead: lead2, text: text2, image: image2 }) {
  return /* @__PURE__ */ jsxs("section", { className: `${styles$4.split} ${reverse2 ? styles$4.reverse : ""}`, id, children: [
    /* @__PURE__ */ jsx("div", { className: styles$4.media, children: /* @__PURE__ */ jsx(
      "img",
      {
        className: styles$4.image,
        src: image2.src,
        srcSet: image2.srcSet,
        sizes: "(max-width: 900px) 100vw, 42vw",
        width: image2.width,
        height: image2.height,
        alt: image2.alt,
        loading: "lazy",
        decoding: "async"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: styles$4.body, children: [
      /* @__PURE__ */ jsx("h2", { className: styles$4.heading, children: heading2 }),
      /* @__PURE__ */ jsx("p", { className: styles$4.lead, children: lead2 }),
      /* @__PURE__ */ jsx("p", { className: styles$4.text, children: text2 })
    ] })
  ] });
}
const cta = "_cta_1y5er_1";
const content$1 = "_content_1y5er_24";
const title$2 = "_title_1y5er_32";
const text$2 = "_text_1y5er_38";
const caption = "_caption_1y5er_46";
const styles$3 = {
  cta,
  content: content$1,
  title: title$2,
  text: text$2,
  caption
};
function PurpleCta() {
  return /* @__PURE__ */ jsx("section", { className: styles$3.cta, id: "faq", "aria-labelledby": "purple-cta-title", children: /* @__PURE__ */ jsxs("div", { className: styles$3.content, children: [
    /* @__PURE__ */ jsx("h2", { id: "purple-cta-title", className: styles$3.title, children: "Experience the rush today" }),
    /* @__PURE__ */ jsx("p", { className: styles$3.text, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipisicing elit." }),
    /* @__PURE__ */ jsx(Button, { href: "#contact", children: "Get Started Today" }),
    /* @__PURE__ */ jsx("p", { className: styles$3.caption, children: "Lorem ipsum dolor sit amet, consectetur" })
  ] }) });
}
const wrapper = "_wrapper_1jspk_1";
const image = "_image_1jspk_9";
const shade = "_shade_1jspk_19";
const content = "_content_1jspk_28";
const tag = "_tag_1jspk_33";
const title$1 = "_title_1jspk_43";
const author = "_author_1jspk_51";
const avatar$1 = "_avatar_1jspk_57";
const name = "_name_1jspk_64";
const styles$2 = {
  wrapper,
  image,
  shade,
  content,
  tag,
  title: title$1,
  author,
  avatar: avatar$1,
  name
};
const article800 = "/assets/article-800-BGzyxNUw.webp";
const article1600 = "/assets/article-1600-BR0cGtrz.webp";
const avatar = "/assets/avatar-94-7uAksqH-.webp";
function Article() {
  return /* @__PURE__ */ jsxs("section", { className: styles$2.wrapper, "aria-labelledby": "article-title", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: styles$2.image,
        src: article1600,
        srcSet: `${article800} 800w, ${article1600} 1600w`,
        sizes: "100vw",
        width: "1600",
        height: "1066",
        alt: "",
        loading: "lazy",
        decoding: "async"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: styles$2.shade }),
    /* @__PURE__ */ jsxs("article", { className: styles$2.content, children: [
      /* @__PURE__ */ jsx("p", { className: styles$2.tag, children: "Photography" }),
      /* @__PURE__ */ jsx("h2", { id: "article-title", className: styles$2.title, children: "Lorem ipsum dolor sit amet consectetur adipisicing elit" }),
      /* @__PURE__ */ jsxs("p", { className: styles$2.author, children: [
        /* @__PURE__ */ jsx("img", { className: styles$2.avatar, src: avatar, width: "47", height: "47", alt: "Blaz Robar", loading: "lazy" }),
        /* @__PURE__ */ jsx("span", { className: styles$2.name, children: "Blaz Robar, god like web designer" })
      ] })
    ] })
  ] });
}
const contact = "_contact_1rxgd_1";
const title = "_title_1rxgd_8";
const text$1 = "_text_1rxgd_15";
const mail = "_mail_1rxgd_22";
const styles$1 = {
  contact,
  title,
  text: text$1,
  mail
};
function Contact() {
  return /* @__PURE__ */ jsxs("section", { className: styles$1.contact, id: "contact", "aria-labelledby": "contact-title", children: [
    /* @__PURE__ */ jsx("h2", { id: "contact-title", className: styles$1.title, children: "Get in touch" }),
    /* @__PURE__ */ jsx("p", { className: styles$1.text, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ jsx("a", { className: styles$1.mail, children: "help@help.com" })
  ] });
}
const footer = "_footer_qzb37_1";
const text = "_text_qzb37_8";
const styles = {
  footer,
  text
};
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: styles.footer, children: /* @__PURE__ */ jsx("p", { className: styles.text, children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) });
}
const pen800 = "/assets/pen-800-DML3zGZT.webp";
const pen1231 = "/assets/pen-1231-ChQUwE1t.webp";
const watch450 = "/assets/watch-450-ZMfOePIt.webp";
const watch900 = "/assets/watch-900-B-1TyJpI.webp";
const LEAD = "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
const SMALL = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(PinkCta, {}),
      /* @__PURE__ */ jsx(
        Split,
        {
          id: "about",
          heading: "A heading is what you need here",
          lead: LEAD,
          text: SMALL,
          image: {
            src: pen1231,
            srcSet: `${pen800} 800w, ${pen1231} 1231w`,
            width: 1231,
            height: 821,
            alt: "A hand in a knitted sleeve writing with a blue pen next to a cup of coffee"
          }
        }
      ),
      /* @__PURE__ */ jsx(PurpleCta, {}),
      /* @__PURE__ */ jsx(Article, {}),
      /* @__PURE__ */ jsx(
        Split,
        {
          reverse: true,
          heading: "A heading is what you need here",
          lead: LEAD,
          text: SMALL,
          image: {
            src: watch900,
            srcSet: `${watch450} 450w, ${watch900} 900w`,
            width: 900,
            height: 600,
            alt: "A wrist with a smart watch resting on a weathered wooden table"
          }
        }
      ),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function render() {
  return renderToString(/* @__PURE__ */ jsx(App, {}));
}
export {
  render
};
