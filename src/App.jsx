import drawersMobile from "./assets/drawers mobile.jpg";
import drawers from "./assets/drawers.jpg";
import avatar from "./assets/avatar-michelle.jpg";
import shareIcon from "./assets/icon-share.svg";
import faceBookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinteresticon from "./assets/icon-pinterest.svg";
import useIsMobile from "./hooks/useIsMobile";
import { useState } from "react";

function App() {
  const isMobile = useIsMobile();
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <section className=" grid place-content-center bg-Light-Grayish-Blue min-h-screen relative">
        <article className="max-w-[375px] md:max-w-3xl bg-white my-8 rounded-xl overflow-hidden flex flex-col md:flex-row ">
          <picture>
            <source media="(min-width: 769px)" srcSet={drawers} />
            <source media="(max-width: 769px)" srcSet={drawersMobile} />
            <img
              src="srcSet"
              alt="drawers image"
              className="min-w-full md:min-h-full"
            />
          </picture>

          <div className="">
            <div className="px-8 pt-8 pb-6">
              <h2 className="text-xl font-medium text-Very-Dark-Grayish-Blue">
                Shift the overall look and feel by adding these wonderful
                touches to furniture in your home
              </h2>
              <p className="text-sm my-4 leading-5 text-Very-Dark-Grayish-Blue">
                Ever been in a room and felt like something was missing? Perhaps
                it felt slightly bare and uninviting. I’ve got some simple tips
                to help you make any room feel complete.
              </p>
              {isToggled && !isMobile ? (
                <div className="flex gap-4 mt-8">
                  <img
                    src={avatar}
                    alt=" michelle avatar"
                    width={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-1 justify-between items-center">
                    <div>
                      <h3 className="text-Very-Dark-Grayish-Blue font-medium">
                        {" "}
                        Michelle Appleton
                      </h3>
                      <p className="text-sm text-Desaturated-Dark-Blue">
                        {" "}
                        28 Jun 2020
                      </p>
                    </div>
                    <button
                      onClick={handleClick}
                      className="px-2 h-8 rounded-full  bg-Light-Grayish-Blue"
                    >
                      <img src={shareIcon} alt="share icon " />
                    </button>
                  </div>
                </div>
              ) : !isToggled && (
                <div className="flex gap-4 mt-8">
                  <img
                    src={avatar}
                    alt=" michelle avatar"
                    width={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-1 justify-between items-center">
                    <div>
                      <h3 className="text-Very-Dark-Grayish-Blue font-medium">
                        {" "}
                        Michelle Appleton
                      </h3>
                      <p className="text-sm text-Desaturated-Dark-Blue">
                        {" "}
                        28 Jun 2020
                      </p>
                    </div>
                    <button
                      onClick={handleClick}
                      className="px-2 h-8 rounded-full  bg-Light-Grayish-Blue"
                    >
                      <img src={shareIcon} alt="share icon " />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {isToggled && (
              <>
                <div className="">
                  <div className="text-Light-Grayish-Blue bg-Very-Dark-Grayish-Blue flex items-center justify-between flex-1 md:w-64 px-8  py-4 md:absolute top-[330px] right-[220px]  z-20 md:rounded-2xl">
                    <div className="flex items-center gap-6">
                      <p className="uppercase text-sm text-Grayish-Blue tracking-widest">
                        Share
                      </p>
                      <img src={faceBookIcon} alt="facebook icon" />
                      <img src={twitterIcon} alt="twitte icon" />
                      <img src={pinteresticon} alt="pinterest icon" />
                    </div>
                    <button
                      onClick={handleClick}
                      className="px-2 h-8 rounded-full  bg-Light-Grayish-Blue md:hidden"
                    >
                      <img src={shareIcon} alt="share icon " />
                    </button>
                  </div>
                  <div className="hidden md:block  bg-transparent w-0 h-0 md:absolute top-[375px] right-[323px]  z-10 border-x-[16px] border-x-transparent border-t-[20px] border-solid border-Very-Dark-Grayish-Blue"></div>
                </div>
              </>
            )}
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
