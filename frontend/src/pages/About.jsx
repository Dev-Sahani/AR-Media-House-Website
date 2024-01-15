import React from "react";
import { 
  Button, 
  RoundedCornersSection, 
  Heading, 
  StoryComponent, 
  Section, 
  Wonder, 
  BlackSection,
  HeroSectionWrapper,
  Circle,
  Triangle
} from "../components";

export default function About() {
  document.querySelector("title").innerHTML = "About - AR Media House";
  return (
    <>
      <HeroSectionWrapper className="!mb-0" whiteWaveBackground>
        <Heading
          heading="Get To Know"
          subHeading="Us better"
          subHeadingClassName="text-tertiary-500"
          className="w-full mt-10 items-center"
        />
        <Button
          arrow
          className="bg-primary-500 text-secondary-500 mx-auto mt-4"
        >
          Read our Story
        </Button>
        <img
          className="relative mt-4"
          src="/assets/About_banner.svg"
          alt="illustration"
        />
        {/* Shapes */}
        <Circle secondary className="top-5 left-10" />
        <Triangle secondary className="top-[24%] right-[5%]" />
      </HeroSectionWrapper>

      <Section
        heading="A Bumpy Road"
        subHeading="to success"
        text="Starting from an idea that emerged into the minds of two young
        friends, Rohit Ajmani and Sahil Walia while still in college
        exchanged their thoughts on creating something on their own. From
        successfully launching their first website, Newton007 to interacting
        with some of the most leading marketing intellectuals, they have
        come a long way and now have a better vision of enabling Idea Clan
        to turn into a Unicorn – a Billion dollar vision."
        textClassName="py-10 "
        illustration={ <img src="./assets/Youtube_Video.svg" alt="video" className="rounded-3xl"  />}
        backgroundClassName="bg-white !py-12"
        Shapes={
          <>
            <Circle className="top-[-24%] left-[50%]" />
            <Triangle className="bottom-[-10%] left-[20%]" />
          </>
        }
      />

      <img 
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
      />


      <section className="bg-tertiary-500 relative">
        
        <StoryComponent 
          heading="The journey begins"
          text="In 2020, Harish Parihar embarked on a solo journey, offering digital
          marketing services to local clients as a freelancer. This phase served
          as his foundational period, providing valuable insights into the basic
          structures of digital marketing. As he navigated through projects, his
          clientele steadily grew, laying the groundwork for what was to come."
          Image={
            <div className="rounded-full text-center w-[35vw] h-auto">
              <img src="/assets/Story_pic.png" alt=""  className=""/>
            </div>
          }
          direction={1}
          Year={2020}
          aboutPath={<img src="./assets/about-wave-1.svg" alt="path" className="absolute top-12 left-[45%]" />}
        />
        
        <StoryComponent 
          heading="Expansion and Franchise Endeavours"
          text="The year 2021 marked a pivotal moment as Harish's client base expanded significantly. Towards the year's end, he took a bold step, delving into a franchise model, forming a partnership with Amazon's Easy Store. This ambitious move involved selling franchises through the renowned platform, signalling a significant leap forward in his entrepreneurial journey."
          Image={
            <div className="rounded-full text-center w-[45vw] h-auto">
              <img src="/assets/Story_pic.png" alt=""  className=""/>
            </div>
          }
          direction={-1}
          Year={2021}
          aboutPath={<img src="./assets/about-wave-2.svg" alt="path" className="absolute bottom-[-50%] left-[25%]" />}
        />

        <StoryComponent 
          heading="Adversity and Pivot"
          text="Unfortunately, 2022 presented unexpected challenges when Amazon discontinued its operations, leading to the closure of the franchise model. Undeterred, Harish pivoted his approach, founding a full-stack digital marketing company, recognizing the need for a broader spectrum of services. The focus shifted towards data generation and expansion, signifying resilience in the face of adversity."
          Image={
            <div className="rounded-full text-center w-[40vw] h-auto">
              <img src="/assets/Story_pic.png" alt=""  className=""/>
            </div>
          }
          direction={1}
          Year={2022}
          aboutPath={<img src="./assets/about-wave-3.svg" alt="path" className="absolute bottom-[-46%] left-[37%]" />}
        />

        <StoryComponent 
          heading="Collaborative Innovations"
          text="In 2023, fate brought Harish together with like-minded visionaries, Raj Maheshwari and Shelendra Mukati, during a summit. Engaging in spirited discussions, they explored innovative ideas, particularly around lead generation. Their synergy and shared aspirations led to the inception of Lead Bank—a revolutionary model empowered by an in-house software boasting unlimited data sources."
          Image={
            <div className="rounded-full text-center w-[40vw] h-auto">
              <img src="/assets/Story_pic.png" alt=""  className=""/>
            </div>
          }
          direction={-1}
          Year={2023}
          aboutPath={<img src="./assets/about-wave-2.svg" alt="path" className="absolute bottom-[-50%] left-[25%]" />}
        />

        <StoryComponent 
          heading="Global Ventures and Sectoral Diversification"
          text="The year 2024 heralded a transformative phase for Lead Bank. With a well-established model in place, they successfully onboarded foreign and domestic clients, amplifying their impact across diverse sectors—from Indian businesses to digital products, ecommerce ventures, and educational initiatives. Their collaborative efforts aimed at empowering entities to thrive in the ever-evolving landscape of the online realm."
          Image={
            <div className="rounded-full text-center w-[40vw] h-auto">
              <img src="/assets/Story_pic.png" alt=""  className=""/>
            </div>
          }
          direction={1}
          Year={2024}
        />

        <img src="./assets/triple-wave-white-1.svg" alt="" className="w-full bg-white rotate-180" />

        <Circle className="top-[18%] left-[5%]" />
        <Triangle className="top-[52%] right-[5%]" />
        <Triangle className="bottom-[2%] right-[5%]" />
        <Circle className="top-[58%] left-[5%]" />
      </section>
        
      <Section
        heading="We are a team of"
        subHeading="focused individuals"
        text="We’ve established a people-focused workplace and their contributions
        have had a great impact on the company’s overall mission."
        backgroundClassName="py-10"
        textClassName="w-[40vw] py-6"
        illustration={
          <div className="rounded-full text-center w-[40vw] h-auto">
            <img src="/assets/Individuals_About.svg" alt=""  className=""/>
          </div>
        }
        Button1={
          <Button className="bg-primary-500 text-secondary-500 mt-6 mb-12" arrow>
            Let's Connect
          </Button>
        }
      />

      <Wonder className="!bg-tertiary-500" linearGradient={{"backgroundImage": "linear-gradient(0deg, #080403 50%, white 50%)"}}/>
    </>
  );
}
