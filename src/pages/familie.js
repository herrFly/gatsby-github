import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import Media from "react-media";

import { StaticImage } from "gatsby-plugin-image";

import "@fontsource/lato/300.css";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import { slide as Menu } from "react-burger-menu";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../../static/assets/css/main.css";
import "../../static/assets/css/noscript.css";
import "../../static/assets/css/fontawesome-all.min.css";

import MyForm from "./../pages/kontakt";
import MyFooter from "./../components/footer";

import familiePreisliste from "../../static/img/FAMILIE/Familie Preisliste_Final.png";

import f09 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg";
import f10 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-hamburger_wappen-claudia_nuernberger.jpg";
import f11 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg";
import f12 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-blankenburg-harz-claudia_nuernberger.jpg";
import f13 from "../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-barnim-claudia_nuernberger.jpg";
import f14 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-museumsinsel-claudia_nuernberger.jpg";
import f15 from "../../static/img/FAMILIE/paarfotos-berlin-brandenburg-claudia_nuernberger.jpg";
import f16 from "../../static/img/FAMILIE/familienfotos-berlin-brandenburg-hennigsdorf-claudia_nuernberger.jpg";

const style = {
  textAlign: "center",
  background: "none",
  padding: "4rem 0px 0px 0px",
  fontSize: "0px",
};

const properties1 = {
  duration: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div
      style={{
        width: "30px",
        marginRight: "-2.05rem",
        marginTop: "4rem",
        class: "arrowRechtsKleine",
      }}
    >
      <i className="fas fa-chevron-circle-left"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.6rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),
};

const properties2 = {
  duration: 3000,
  slidesToShow: 2,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-left"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.8rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),
};

const properties3 = {
  duration: 0.1,
  slidesToShow: 3,
  slidesToScroll: 1,
  indicators: true,
  autoplay: false,
  arrows: true,
  prevArrow: (
    <div style={{ width: "30px", marginRight: "-30px", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-left" id="leftArrowHZ1"></i>
    </div>
  ),
  nextArrow: (
    <div style={{ width: "30px", marginLeft: "-2.8rem", marginTop: "4rem" }}>
      <i className="fas fa-chevron-circle-right"></i>
    </div>
  ),
};
const arrowStylesNext = {
  color: "#ccc",
};

const arrowStyles = {
  color: "#ccc",
  position: "absolute",
  zIndex: 2,
  top: "calc(91%)",
};

const familie = () => (
  <>
    <Helmet>
      <title>Lichtbild-Enthusiastin - Claudia N??rnberger</title>
    </Helmet>
    <Menu>
      <Link to="/" className="menu-item">
        Startseite
      </Link>
      <br />
      <Link to="/ueberMich" className="menu-item">
        ??ber Mich
      </Link>
      <Link to="/familie" className="menu-item">
        Familie
      </Link>
      <Link to="/hochzeiten" className="menu-item">
        Hochzeiten
      </Link>
      <Link to="/babybauch" className="menu-item">
        Babybauch
      </Link>
      <Link to="/hunde" className="menu-item">
        Hunde
      </Link>
      <br />
      <Link to="/faq" className="menu-item">
        FAQ
      </Link>

      <a
        href="https://www.instagram.com/lichtbild_enthusiastin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram" id="insta-logo"></i>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=4903091579337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp" id="whatsapp-logo"></i>
      </a>
    </Menu>
    <header></header>
    <main>
      <div className="slider">
        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)",
          }}
        >
          {(matches) => (
            <div>
              {matches.small && (
                <Slide {...properties1}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Junger Mann tr??gt seine Freundin Huckepack. Beide lachen und ihre Haare fliegen im Wind. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Ein Kleinkind liegt auf einem wei??en Fell vor einer Blumenwiese. Sie tr??gt ein Haarband und schaut l??chelnd nach links. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Paar l??uft H??ndchenhaltend einen Feldweg entlang. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Mutter umarmt ihre Tochter. Ihre Hand h??lt den Kopf des kleinen M??dchens. Die Augen der Frau sind geschlossen und sie l??chelt gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-claudia_nuernberger.jpg"
                      alt="Neugeborenes Baby schl??ft auf einer kuschligen Decke zugedeckt mit einem Leinentuch. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Eine Familie mit zwei Kindern sitzen gemeinsam in einem Feld. Alle gucken direkt den Betrachter an und l??cheln. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Fu?? eines neugeborenen Babys liegt auf der Hand seiner gro??en Schwester. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-regierungsviertel-claudia_nuernberger.jpg"
                      alt="Ein junges Paar k??sst sich innig. Er h??lt ihr Gesicht liebevoll mit seinen H??nden umfasst. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-oranienburg-claudia_nuernberger.jpg"
                      alt="Kleines M??dchen h??lt einen Teddy in ihrem Arm und schaut etwas sch??chtern mit gro??en Augen direkt in die Kamera. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg"
                      alt="Eine Mutter hebt ihre Tochter im Kindergartenalter ??ber ihren Kopf und spielt mit ihr Flieger. Beide lachen sich ausgelassen an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
              {matches.medium && (
                <Slide {...properties2}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Junger Mann tr??gt seine Freundin Huckepack. Beide lachen und ihre Haare fliegen im Wind. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Ein Kleinkind liegt auf einem wei??en Fell vor einer Blumenwiese. Sie tr??gt ein Haarband und schaut l??chelnd nach links. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Paar l??uft H??ndchenhaltend einen Feldweg entlang. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Mutter umarmt ihre Tochter. Ihre Hand h??lt den Kopf des kleinen M??dchens. Die Augen der Frau sind geschlossen und sie l??chelt gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-claudia_nuernberger.jpg"
                      alt="Neugeborenes Baby schl??ft auf einer kuschligen Decke zugedeckt mit einem Leinentuch. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Eine Familie mit zwei Kindern sitzen gemeinsam in einem Feld. Alle gucken direkt den Betrachter an und l??cheln. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Fu?? eines neugeborenen Babys liegt auf der Hand seiner gro??en Schwester. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-regierungsviertel-claudia_nuernberger.jpg"
                      alt="Ein junges Paar k??sst sich innig. Er h??lt ihr Gesicht liebevoll mit seinen H??nden umfasst. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-oranienburg-claudia_nuernberger.jpg"
                      alt="Kleines M??dchen h??lt einen Teddy in ihrem Arm und schaut etwas sch??chtern mit gro??en Augen direkt in die Kamera. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg"
                      alt="Eine Mutter hebt ihre Tochter im Kindergartenalter ??ber ihren Kopf und spielt mit ihr Flieger. Beide lachen sich ausgelassen an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
              {matches.large && (
                <Slide {...properties3}>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Junger Mann tr??gt seine Freundin Huckepack. Beide lachen und ihre Haare fliegen im Wind. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Ein Kleinkind liegt auf einem wei??en Fell vor einer Blumenwiese. Sie tr??gt ein Haarband und schaut l??chelnd nach links. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Paar l??uft H??ndchenhaltend einen Feldweg entlang. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Mutter umarmt ihre Tochter. Ihre Hand h??lt den Kopf des kleinen M??dchens. Die Augen der Frau sind geschlossen und sie l??chelt gl??cklich. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-claudia_nuernberger.jpg"
                      alt="Neugeborenes Baby schl??ft auf einer kuschligen Decke zugedeckt mit einem Leinentuch. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-harz-claudia_nuernberger.jpg"
                      alt="Eine Familie mit zwei Kindern sitzen gemeinsam in einem Feld. Alle gucken direkt den Betrachter an und l??cheln. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/newborn-berlin-brandenburg-bernau-claudia_nuernberger.jpg"
                      alt="Fu?? eines neugeborenen Babys liegt auf der Hand seiner gro??en Schwester. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/paarfotos-berlin-brandenburg-regierungsviertel-claudia_nuernberger.jpg"
                      alt="Ein junges Paar k??sst sich innig. Er h??lt ihr Gesicht liebevoll mit seinen H??nden umfasst. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/kinderfotos-berlin-brandenburg-oranienburg-claudia_nuernberger.jpg"
                      alt="Kleines M??dchen h??lt einen Teddy in ihrem Arm und schaut etwas sch??chtern mit gro??en Augen direkt in die Kamera. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                  <div style={style}>
                    <StaticImage
                      src="../../static/img/FAMILIE/familienfotos-berlin-brandenburg-panketal-claudia_nuernberger.jpg"
                      alt="Eine Mutter hebt ihre Tochter im Kindergartenalter ??ber ihren Kopf und spielt mit ihr Flieger. Beide lachen sich ausgelassen an. Fotografin: Claudia N??rnberger"
                      placeholder="blurred"
                      layout="constrained"
                    />
                  </div>
                </Slide>
              )}
            </div>
          )}
        </Media>
      </div>

      <div className="divided">
        <section className="wrapper style1 content-align-left startDesktop">
          <div className="inner">
            <h2 className="align-center">Familie</h2>

            <p>
              F??r mich gibt es nichts Sch??neres als nat??rliche Familienfotos.
              Mit viel Erfahrung und einer ordentlichen Prise Humor begleite ich
              Euch gerne bei Euren gro??en und kleinen Momenten.
            </p>
            <p>
              Es bereitet mir enorme Freude, Kinder so zu fotografieren, wie sie
              sind! Mal laut, mal leise, mal wild oder auch zur??ckhaltend.
            </p>
            <p>
              F??r ein sch??nes Foto hocke ich gerne im Sandkasten, hangle mich
              vom Kletterger??st zur Rutsche, renne den kleinen Wirbelwinden
              hinterher oder ziehe bl??de Grimassen.
            </p>
            <p>
              Das Lachen, die Emotionen, aber auch die stillen und ruhigen
              Momente sind das, was ich versuche bei unserem Termin einzufangen.
            </p>
            <p>
              Ich freue mich jetzt schon Euch kennenzulernen und f??r Euch
              unvergessliche Erinnerung mit meiner Kamera festzuhalten!
            </p>
            <p>
              Vor Eurem Termin bekommt Ihr von mir einen kleinen digitalen
              Leitfaden mit Tipps und Tricks zugesendet, aber nat??rlich stehe
              ich Euch auch f??r weitere Fragen oder bei der Wahl der richtigen
              Location mit Rat und Tat zur Seite.
            </p>
          </div>

          <div className="align-center">
            <img className="preislisten" src={familiePreisliste} alt="Preisliste Fotos"></img>

            <Media
              queries={{
                small: "(max-width: 599px)",
                mediumAndOver: "(min-width: 600px)",
              }}
            >
              {(matches) => (
                <div>
                  {matches.small && (
                    <Carousel
                      infiniteLoop
                      showThumbs={true}
                      dynamicHeight={false}
                      showStatus={false}
                      showIndicators={false}
                      swipeable={true}
                      width={25 + "%"}
                      showArrows={false}
                      className="hochkantCarousel"
                      renderArrowPrev={(onClickHandler, hasPrev) =>
                        hasPrev && (
                          <i
                            className="fas fa-chevron-circle-left leftArrowCarousel"
                            id="leftArrowC1"
                            onClick={onClickHandler}
                            style={{ ...arrowStyles }}
                          ></i>
                        )
                      }
                      renderArrowNext={(onClickHandler, hasNext) =>
                        hasNext && (
                          <i
                            className="fas fa-chevron-circle-right rightArrowCarousel"
                            id="leftArrowC2"
                            onClick={onClickHandler}
                            style={{ ...arrowStylesNext }}
                          ></i>
                        )
                      }
                    >
                      <div>
                        <img src={f09} alt="Kleines M??dchen schaukelt wild auf einer Schaukel. Sie lacht herzlich und guckt rechts am Betrachter vorbei. Ihre Haare fliege im Wind. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={f10} alt="Ein Junge und ein kleineres M??dchen stehen auf einem Felsen R??cken an R??cken und schauen runter auf den Betrachter und l??cheln. Fotografin: Claudia N??rnberger" />
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={f11} alt="Kleines M??dchen rennt einen Weg entlang direkt zum Betrachter hin. Unter jedem Arm hat sie einen Teddyb??ren. Ihr Blick geht l??chelnd gen Boden. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f12} alt="Ein Geschwisterpaar steht in einer H??hle. Im Hintergrund sieht man den Ausgang der H??hle. Beide stehen sich gegen??ber und halten sich gegenseitig ihre H??nde. Sie l??cheln und blicken sich direkt an. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f13} alt="Ein M??dchen im Grundschulalter steht in einer Blumenwiese und pfl??ckt grade einen kleinen Blumenstrau??. Sie schaut zu den Blumen herunter und l??chelt. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f14} alt="Paar sitzt zusammen auf einer Steintreppe. Sie sitzt eine Stufe ??ber ihr und h??lt liebevoll seinen Arm um sie. Beide gucken l??chelnd direkt den Betrachter an.  Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f15} alt="Junges P??rchen laufen Hand in Hand. Beide strahlen sich an und ihre langen Haare fliegen im Wind. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f16} alt="Eine Mutter hebt ihr kleines M??dchen hoch. Beide lachen gl??cklich in die Kamera. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel>
                  )}
                  {matches.mediumAndOver && (
                    <Carousel
                      infiniteLoop
                      showThumbs={true}
                      dynamicHeight={false}
                      showStatus={false}
                      showIndicators={false}
                      swipeable={true}
                      width={25 + "%"}
                      className="hochkantCarousel"
                      showArrows={false}
                    >
                      <div>
                        <img src={f09} alt="Kleines M??dchen schaukelt wild auf einer Schaukel. Sie lacht herzlich und guckt rechts am Betrachter vorbei. Ihre Haare fliege im Wind. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 1</p>
                      </div>
                      <div>
                        <img src={f10} alt="Ein Junge und ein kleineres M??dchen stehen auf einem Felsen R??cken an R??cken und schauen runter auf den Betrachter und l??cheln. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 2</p>
                      </div>
                      <div>
                        <img src={f11} alt="Kleines M??dchen rennt einen Weg entlang direkt zum Betrachter hin. Unter jedem Arm hat sie einen Teddyb??ren. Ihr Blick geht l??chelnd gen Boden. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f12} alt="Ein Geschwisterpaar steht in einer H??hle. Im Hintergrund sieht man den Ausgang der H??hle. Beide stehen sich gegen??ber und halten sich gegenseitig ihre H??nde. Sie l??cheln und blicken sich direkt an. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f13} alt="Ein M??dchen im Grundschulalter steht in einer Blumenwiese und pfl??ckt grade einen kleinen Blumenstrau??. Sie schaut zu den Blumen herunter und l??chelt. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f14} alt="Paar sitzt zusammen auf einer Steintreppe. Sie sitzt eine Stufe ??ber ihr und h??lt liebevoll seinen Arm um sie. Beide gucken l??chelnd direkt den Betrachter an.  Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f15} alt="Junges P??rchen laufen Hand in Hand. Beide strahlen sich an und ihre langen Haare fliegen im Wind. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                      <div>
                        <img src={f16} alt="Eine Mutter hebt ihr kleines M??dchen hoch. Beide lachen gl??cklich in die Kamera. Fotografin: Claudia N??rnberger"/>
                        <p className="legend">Legend 3</p>
                      </div>
                    </Carousel>
                  )}
                </div>
              )}
            </Media>
          </div>
        </section>
        <MyForm />
        <footer className="wrapper style1 align-center randDesktop">
          <MyFooter />
        </footer>
      </div>
    </main>
  </>
);
export default familie;
