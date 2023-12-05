import a2 from '../../assets/carousel__bottle.png'
import a3 from '../../assets/carousel__lemon.png'
import a4 from '../../assets/carousel__strawberry.png'
import "./carousel.css"


const Carousel = () => {
  return (
    <>
        <div className="carousel">
        <div className="carousel__box--left">
          <img
            className="carousel__img-bottle"
            src={a2}
            alt="Not Found"
          />
          <img
            className="carousel__img-strawberry"
            src={a4}
            alt="Not Found"
          />
        </div>
        <div className="carousel__box--right">
          <img
            className="carousel__img-orange"
            src={a3}
            alt="Not Found"
          />
          <div className="carousel__content">
            <p className="carousel__content-first">
              <span>W</span>
              <span>e</span>
              <span>l</span>
              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span>,</span>
            </p>
            <p className="carousel__content-second">
              <span>P</span>
              <span>h</span>
              <span>a</span>
              <span>t</span>
              <span>'s</span>
              &nbsp;
              <span>J</span>
              <span>u</span>
              <span>i</span>
              <span>c</span>
              <span>e</span>
              &nbsp;
              <span>B</span>
              <span>a</span>
              <span>r</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;



// export default function Carousel() {
//   return (
//     <>
      // <div className="carousel">
      //   <div className="carousel__box--left">
      //     <img
      //       className="carousel__img-bottle"
      //       src={a2}
      //       alt="Not Found"
      //     />
      //     <img
      //       className="carousel__img-strawberry"
      //       src={a4}
      //       alt="Not Found"
      //     />
      //   </div>
      //   <div className="carousel__box--right">
      //     <img
      //       className="carousel__img-orange"
      //       src={a3}
      //       alt="Not Found"
      //     />
      //     <div className="carousel__content">
      //       <p className="carousel__content-first">
      //         <span>W</span>
      //         <span>e</span>
      //         <span>l</span>
      //         <span>c</span>
      //         <span>o</span>
      //         <span>m</span>
      //         <span>e</span>
      //         <span>,</span>
      //       </p>
      //       <p className="carousel__content-second">
      //         <span>P</span>
      //         <span>h</span>
      //         <span>a</span>
      //         <span>t</span>
      //         <span>'s</span>
      //         &nbsp;
      //         <span>J</span>
      //         <span>u</span>
      //         <span>i</span>
      //         <span>c</span>
      //         <span>e</span>
      //         &nbsp;
      //         <span>B</span>
      //         <span>a</span>
      //         <span>r</span>
      //       </p>
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// }

