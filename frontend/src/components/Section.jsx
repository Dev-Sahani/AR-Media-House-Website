import classNames from "classnames";
import { FadeIn, FadeInUp, Heading } from "./";


export default function Section({
    heading, 
    middleLine, 
    subHeading, 
    headingClassName, 
    middleLineClassName, 
    subHeadingClassName, 
    allHeadingClassName,
    text,
    textClassName,
    Button1, 
    Button2,
    direction, 
    backgroundClassName,
    illustration,
    Shapes,
    largeFlex
}) {

  const bgClasses = classNames("flex justify-between px-screen-padding items-center lg:gap-16 gap-4 relative", {
    [backgroundClassName]: backgroundClassName,
    "flex-col lg:flex-row":largeFlex,
    "flex-col md:flex-row-reverse": !largeFlex && direction && 1*direction<0,
    "flex-col md:flex-row": !largeFlex && (!direction || 1*direction>0),
  })
  const headingClasses = classNames("", {
    [headingClassName]: headingClassName,
  })
  const subHeadingClasses = classNames("", {
    [subHeadingClassName]: subHeadingClassName,
  })
  const allHeadingClasses = classNames("", { 
    [allHeadingClassName]: allHeadingClassName,
  })

  const textClasses = classNames("text-sm sm:text-base" , {
    [textClassName]: textClassName,
    "text-secondary-500": !textClassName,
  })
  const divClasses = classNames("flex flex-col justify-center basis-1/2", {})

  return (
    <section className={bgClasses}>
      <div className={divClasses}>
        <Heading
          heading={heading}
          middleLine={middleLine}
          subHeading={subHeading}
          headingClassName={headingClasses}
          middleLineClassName={middleLineClassName}
          subHeadingClassName={subHeadingClasses}
          className={allHeadingClasses}
        />

        {
          text && 
          <FadeInUp downLength={10} className={textClasses}>
            {text}
          </FadeInUp>
        }

        {
          Button1 && Button1
        }
        {
            Button2 && Button2
        }
      </div>
        {
          illustration && illustration
        }
        {
          Shapes && Shapes
        }
    </section>
  )
}
