import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "../style.css"
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/features/bigdata-removebg-preview.png"
const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead"   >Big Data</h1>

        <h2 className="font-bold text-3xl font-sans">What is Big Data?</h2>
        <br />
        <div className="flex flex-col md:flex-row">
        <p id="pone" className="bg-gray-800 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          Put simply, big data is larger, more complex data sets, especially
          from new data sources. These data sets are so voluminous that
          traditional data processing software just can’t manage them. But these
          massive volumes of data can be used to address business problems you
          wouldn’t have been able to tackle before. big data By Bridget,
          Editorial Director, NewsStephen J. Bigelow, Senior Technology Editor
          What is big data? Big data is a combination of structured,
          semi structured and unstructured data collected by organizations that
          can be mined for information and used in machine learning projects,
          predictive modeling and other advanced analytics applications.
        </p>
        <div className="md:ml-6 rounded-lg  border-2">
    <Image className="w-full md:w-auto" src={img1} alt="DataLake" />
  </div>
        </div>
        <br />
        <br />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-black-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">          The three Vs of big data
</h2>
            {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
              <h2 className="h2 mb-3">Volume</h2>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">— The amount of data matters. With big data, you’ll have to process
              high volumes of low-density, unstructured data. This can be data
              of unknown value, such as Twitter data feeds, clickstreams on a
              web page or a mobile app, or sensor-enabled equipment. For some
              organizations, this might be tens of terabytes of data. For
              others, it may be hundreds of petabytes.</blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              <h2 className="h2 mb-3">              Velocity
</h2>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Velocity is the fast rate at which data is received and (perhaps)
              acted on. Normally, the highest velocity of data streams directly
              into memory versus being written to disk. Some internet-enabled
              smart products operate in real time or near real time and will
              require real-time evaluation and action.

</blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
              <h2 className="h2 mb-3">Variety</h2>
              
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">—  Variety refers to the many types of data that are available.
              Traditional data types were structured and fit neatly in a
              relational database. With the rise of big data, data comes in new
              unstructured data types. Unstructured and semistructured data
              types, such as text, audio, and video, require additional
              preprocessing to derive meaning and support metadata.</blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

          </div>

        </div>
      </div>






      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-black-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">                   How big data works

</h2>
            {/* <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p> */}
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
              <h2 className="h2 mb-3">Integrate</h2>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">—  Big data brings together data from many disparate sources and
              applications. Traditional data integration mechanisms, such as
              extract, transform, and load (ETL) generally aren’t up to the
              task. It requires new strategies and technologies to analyze big
              data sets at terabyte, or even petabyte, scale.</blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
              <h2 className="h2 mb-3">              Manage
</h2>
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Big data requires storage. Your storage solution can be in the
              cloud, on premises, or both. You can store your data in any form
              you want and bring your desired processing requirements and
              necessary process engines to those data sets on an on-demand basis
           

</blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
              <h2 className="h2 mb-3">              Analyze
</h2>
              
                {/* <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div> */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">—    Your investment in big data pays off when you analyze and act on
              your data. Get new clarity with a visual analysis of your varied
              data sets. Explore the data further to make new discoveries. Share
              your findings with others. Build data models with machine learning
              and artificial intelligence. Put your data to work.
        </blockquote>
              {/* <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Anastasia Dan</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">UX Board</a>
              </div> */}
            </div>

          </div>

        </div>
      </div>







       
        
      </div>
      <div className=" mt-10 bg-gradient-to-l from-black to-gray-400">
      {<Footer />}
      </div>

      
    </>
  );
};

export default printf;
