import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "../style.css"

import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/features/datalakehouse-removebg-preview.png"
const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead">Data LakeHouse</h1>

        <h2 className="font-bold text-3xl font-sans">
          What is data lakehouse?
        </h2>
        <br />
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          A data lakehouse features the flexibility and cost-efficiency of a
          data lake with the contextual and high-speed querying capabilities of
          a data warehouse. Data lakehouses combine the key aspects of lakes and
          warehouses. This enables enterprises to use the single-repository
          model of data warehouses for unified storage without sacrificing the
          analytical flexibility of data lakes, allowing data lakehouses to
          excel at both analytical and machine learning workloads.
        </p>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Data Lakehouse Key features
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row">
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          As previously noted, data lakehouses combine the best features within
          data warehousing with the most optimal ones within data lakes. It
          leverages similar data structures from data warehouses and pairs it
          with the low cost storage and flexibility of data lakes, enabling
          organizations to store and access big data quickly and more
          efficiently while also allowing them to mitigate potential data
          quality issues. It supports diverse data datasets, i.e. both
          structured and unstructured data, meeting the needs of both business
          intelligence and data science workstreams. It typically supports
          programming languages like Python, R, and high performance SQL.
        </p>
        <div className="md:ml-6 rounded-lg  border-2">
    <Image className="w-full md:w-auto" src={img1} alt="DataLake" />
  </div>
        </div>

        <br />
        <br />
        
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Data Lakehouse Archeitecture
        </h2>
        <br />
        <br />
        <h2>
          {" "}
          <b>Ingestion layer</b>
        </h2>
        <br />
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          This first layer gathers data from a range of different sources and
          transforms it into a format that can be stored and analyzed in a
          lakehouse. The ingestion layer can use protocols to connect with
          internal and external sources such as database management systems,
          NoSQL databases, social media, and others. As the name suggests, this
          layer is responsible for the ingestion of data.
        </p>
        <br />
        <br />
        <h2>
          {" "}
          <b>Metadata layer</b>
        </h2>
        <br />
        <p id="pone" className="bg-gradient-to-l from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          The metadata layer is the foundation of the data lakehouse. It’s a
          unified catalog that delivers metadata for every object in the lake
          storage, helping organize and provide information about the data in
          the system. This layer also gives user the opportunity to use
          management features such as ACID transactions, file caching, and
          indexing for faster query. Users can implement predefined schemas
          within this layer, which enable data governance and auditing
          capabilities.
        </p>
        <br />
        <br />
        <h2>
          {" "}
          <b>Storage layer</b>
        </h2>
        <br />
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          In this layer, the structured, unstructured, and semi-structured data
          is stored in open-source file formats, such as such as Parquet or
          Optimized Row Columnar (ORC). The real benefit of a lakehouse is the
          system’s ability to accept all data types at an affordable cost.
        </p>
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
        Benefits  of a data lakehouse
        </h2>
        <div className="border-2 w-full md:w-1/2">
  <ul className="m-2 p-2">
    <li className="font-bold mt-2 mb-2">Reduced data redundancy</li>
    <li className="font-bold mt-2 mb-2">Cost-effective</li>
    <li className="font-bold mt-2 mb-2">Supports wide variety of workloads</li>
    <li className="font-bold mt-2 mb-2">More scale</li>
    <li className="font-bold mt-2 mb-2">Streaming support</li>
  </ul>
</div>

      </div>

      <div className=" mt-10 bg-gradient-to-l from-black to-gray-400">
      {<Footer />}
      </div>    </>
  );
};

export default printf;
