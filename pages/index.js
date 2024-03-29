import Head from "next/head";

import classes from "@/styles/home.module.css";

import FormRegistrationHero from "@/components/home/form-registraion-hero";
import OnlineServiceHero from "@/components/home/online-service-hero";
import TutorHero from "@/components/home/tutor-hero";
import AboutInfo from "@/components/about/about-info";
import TuitionInfo from "@/components/tuition/tuition-info";
import Carousel from "@/components/home/carousel";
import ClassListSlider from "@/components/class/class-list-slider";

import classApi from "@/services/classApi";

export async function getServerSideProps() {
  const data = await loadClassList();

  return {
    props: { data },
  };
}

const loadClassList = async () => {
  try {
    const res = await classApi.getClassList({
      query: null,
      pagination: {
        itemsPerPage: 10,
        currentPage: 1,
      },
      sort: "1",
    });
    return res.data.classList;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Paputea</title>
        <meta
          name="description"
          content="Cầu nối giữa Gia sư - Phụ huynh - Học sinh. Tìm gia sư dạy kèm cho phụ huynh và học sinh. Tuyển gia sư dạy kèm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <>
        <Carousel />
        <div className={classes.main}>
          <div className={classes.container + " container"}>
            <FormRegistrationHero />
          </div>
          <svg
            className="ribbon h-auto w-100"
            width="1600"
            height="595"
            viewBox="0 0 1600 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
          </svg>
        </div>
        <div className="container box">
          <style jsx>{`
            .container {
              background-color: rgba(255, 255, 255, 0.5);
              -webkit-backdrop-filter: blur(3px);
              backdrop-filter: blur(3px);
            }
          `}</style>
          <section className="hero is-medium">
            <div className="hero-body py-1">
              <AboutInfo />
            </div>
          </section>
        </div>
        <section className="hero is-medium">
          <div className="hero-body">
            <TuitionInfo />
          </div>
        </section>
        <ClassListSlider classList={data} />
        <OnlineServiceHero />
        <TutorHero />
      </>
    </>
  );
}
