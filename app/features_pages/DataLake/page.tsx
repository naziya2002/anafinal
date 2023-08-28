import Footer from "@/components/ui/footer";
import "../style.css"
import Header from "@/components/ui/header";
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/features/datalake-removebg-preview.png"
import img2 from "@/public/images/features/data-lake-solution.png"

const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead" >Data Lake</h1>

        <h2 className="font-bold text-3xl font-sans   md:text-lg lg:text-xl">What is DataLake?</h2>
        <br />
        <div id="lakeBox" className="flex flex-col md:flex-row">
  <p
    id="pone"
    className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0"
  >
    A data lake is a centralized repository designed to store, process, and secure large amounts of structured, semistructured, and unstructured data. It can store data in its native format and process any variety of it, ignoring size limits. A data lake provides a scalable and secure platform that allows enterprises to: ingest any data from any system at any speed—even if the data comes from on-premises, cloud, or edge-computing systems; store any type or volume of data in full fidelity; process data in real time or batch mode; and analyze data using SQL, Python, R, or any other language, third-party data, or analytics application.
  </p>
  <div className="md:ml-6 rounded-lg  border-2">
    <Image className="w-full md:w-auto" src={img1} alt="DataLake" />
  </div>
</div>

        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Why do you need a data lake?
        </h2>
        <br />
        <div className="flex flex-col md:flex-row">
  <p
    id="pone"
    className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0"
  >
    Organizations that successfully generate business value from their data, will outperform their peers. An Aberdeen survey saw organizations who implemented a Data Lake outperforming similar companies by 9% in organic revenue growth. These leaders were able to do new types of analytics like machine learning over new sources like log files, data from click-streams, social media, and internet connected devices stored in the data lake. This helped them to identify, and act upon opportunities for business growth faster by attracting and retaining customers, boosting productivity, proactively maintaining devices, and making informed decisions.
  </p>
</div>

        <br />
        <br />

        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6 ">
          DataLake Solutions
        </h2>
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-indigo-900 w-full md:pl-10 p-4 md:p-0">
  <div className="bg-gray-80 box-border md:box-content md:w-32 h-32 p-6 border-2 md:mr-10 rounded-l-lg mt-2 mb-2 md:mr-2 md:ml-2 bg-gradient-to-r hover:from-blue-500 hover:to-black">
    <p className="font-extrabold">Various interfaces, APIs and endpoints</p>
  </div>
  <div className="bg-gray-80 box-border md:box-content md:w-32 h-32 p-6 border-2 md:ml-10 md:mr-10 mt-2 mb-2 bg-gradient-to-r rounded-r-lg hover:from-blue-500 hover:to-black">
    <p className="font-extrabold">Support for or connection to processing and analytics layers</p>
  </div>
  <div className="bg-gray-80 box-border md:box-content md:w-32 h-32 p-6 border-2 md:ml-10 md:mr-10 mt-2 mb-2 bg-gradient-to-r rounded-r-lg hover:from-blue-500 hover:to-black">
    <p className="font-extrabold">Robust search and cataloging features</p>
  </div>
  <div className="bg-gray-80 box-border md:box-content md:w-32 h-32 p-6 border-2 md:ml-10 md:mr-10 mt-2 mb-2 bg-gradient-to-r rounded-r-lg hover:from-blue-500 hover:to-black">
    <p className="font-extrabold">Security and access control</p>
  </div>
  <div className="bg-gray-80 box-border md:box-content md:w-32 h-32 p-6 border-2 md:ml-10 mt-2 mb-2 rounded-r-lg md:mr-2 bg-gradient-to-l hover:from-blue-500 hover:to-black">
    <p className="font-extrabold">Flexibility and scalability</p>
  </div>
</div>


        <div>
          <br />
          <br />
          <h2 className="font-bold text-3xl font-sans mb-5">
           
            Best Data Lake Solution Vendors at present
          </h2>
          <div className="box-border bg-gradient-to-r from-indigo-500 flex flex-col sm:flex-row">
  <div className="box w-full sm:w-2/3 p-4 sm:pl-6">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
        <Link
          href="https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/"
          className="block"
        >
          Amazon Web Services
        </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
        <Link
          href="https://www.cloudera.com/products/sdx/data-lake-service.html"
          className="block"
        >
          Databricks
        </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
        <Link
          href="https://www.databricks.com/product/data-lakehouse"
          className="block"
        >
          Cloudera
        </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
        <Link
          href="https://www.domo.com/platform/leverage-the-cloud"
          className="block"
        >
          Domo
        </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
        <Link href="https://www.ibm.com/data-lake" className="block">
          IBM
        </Link>
      </li>
    </ul>
  </div>
  <div className="w-full sm:w-1/3 p-4 sm:p-0 mt-3">
    <Image className="mx-auto sm:mx-0" src={img2} alt="DataLakeSolution" />
  </div>
</div>
  <div>
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
