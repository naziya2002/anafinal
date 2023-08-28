import Footer from "@/components/ui/footer";
import "../style.css"

import Header from "@/components/ui/header";
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/features/datawarehouse1-removebg-preview.png"
const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead">Data Warehouse</h1>

        <h2 className="font-bold text-3xl font-sans">
          What Is a Data Warehouse?
        </h2>
        <br />
        <div className="flex flex-col md:flex-row">
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          A data warehouse is a type of data management system that is designed
          to enable and support business intelligence (BI) activities,
          especially analytics. Data warehouses are solely intended to perform
          queries and analysis and often contain large amounts of historical
          data. The data within a data warehouse is usually derived from a wide
          range of sources such as application log files and transaction
          applications. A data warehouse centralizes and consolidates large
          amounts of data from multiple sources.”
        </p>
        <div className="md:ml-6 rounded-lg  border-2">
    <Image className="w-full md:w-auto" src={img1} alt="DataLake" />
  </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          What Is a Data Warehouseing?
        </h2>
        <br />
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          Data warehousing is the process of constructing and using a data
          warehouse. A data warehouse is constructed by integrating data from
          multiple heterogeneous sources that support analytical reporting,
          structured and/or ad hoc queries, and decision making. Data
          warehousing involves data cleaning, data integration, and data
          consolidations.
        </p><br /><br />
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Benefits of a Data Warehouse
        </h2>
        <br />
        <br />

        <div className="border-2 w-full md:w-1/2">
          <ul className="m-2 p-2">
            <li className="font-bold mt-2 mb-2 text-blue-500">Unlock Data-Driven Capabilities</li>
            <li className="font-bold mt-2 mb-2 text-black-500"> Maintain Data Quality And Consistency</li>
            <li className="font-bold mt-2 mb-2 text-blue-500">Use Data From Numerous Sources</li>
            <li className="font-bold mt-2 mb-2 text-black-500">Realize The Power Of Automation</li>
            <li className="font-bold mt-2 mb-2 text-blue-500">Respond To Business Growth</li>
            <li className="font-bold mt-2 mb-2 text-black-500">Get Data Warehousing On A Subscription Model</li>
            <li className="font-bold mt-2 mb-2 text-blue-500">Learn More About Your Customers</li>
            <li className="font-bold mt-2 mb-2 text-black-500">Enjoy Interoperability Between Physical Solutions And The Cloud</li>
          </ul>
        </div>
      </div>

      <div className=" mt-10 bg-gradient-to-l from-black to-gray-400">
      {<Footer />}
      </div>    </>
  );
};

export default printf;
