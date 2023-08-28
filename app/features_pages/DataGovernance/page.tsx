import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import "../style.css"

import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/features/data-governance-removebg-preview.png"
const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead">Data Governance</h1>
        <br />
        <br />

        <h2 className="font-bold text-3xl font-sans">
          What is Data Governance?
        </h2>
        <br />
        <div className="flex flex-col md:flex-row">
          <p
            id="pone"
            className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0"
          >
            Data governance is everything you do to ensure data is secure,
            private, accurate, available, and usable. It includes the actions
            people must take, the processes they must follow, and the technology
            that supports them throughout the data life cycle.Data governance
            promotes the availability, quality, and security of an
            organization’s data through different policies and standards. These
            processes determine data owners, data security measures, and
            intended uses for the data. Overall, the goal of data governance is
            to maintain high-quality data that’s both secure and easily
            accessible for deeper business insights.
          </p>
          <div className="md:ml-6 rounded-lg  border-2">
        <Image className="w-auto md:w-400 h-auto md:h-400" src={img1} alt="DataGovernance" />
        </div>
        </div>
        <br />

        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
          What are the benefits of data governance?
        </h2>
        <br />
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 pl-9 ">
  <div className="border-2 w-full md:w-80 m-5 md:mr-2 rounded-md gap-5">
    <h1 className="font-bold text-2xl font-sans text-center">
      Make better, more timely decisions
    </h1>
    <p className="px-3 py-3">
      Users throughout your organization get the data they need to reach and
      service customers, design and improve products and services, and seize
      opportunities for new revenues.
    </p>
  </div>
  <div className="border-2 w-full md:w-80 m-5 md:mx-2 rounded-md gap-5">
    <h1 className="font-bold text-2xl font-sans text-center">
      Allow more personnel access to more data
    </h1>
    <p className="px-3 py-3">
      Strong data governance allows more personnel access to more data, with
      the confidence that these personnel get access to the right data and that
      this democratization of data does not negatively impact the organization.
    </p>
  </div>
  <div className="border-2 w-full md:w-80 m-5 md:ml-2 rounded-md gap-5">
    <h1 className="font-bold text-2xl font-sans text-center">
      Enhance regulatory compliance
    </h1>
    <p className="px-3 py-3">
      An increasingly complex regulatory climate has made it even more important
      for organizations to establish robust data governance practices. You avoid
      risks associated with noncompliance while proactively anticipating new
      regulations.
    </p>
  </div>
</div>

        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Related products and services
        </h2>
        <div className="box-border bg-gradient-to-r from-indigo-500">
  <ul className="flex flex-col items-center">
    <li className="bg-black hover:bg-blue-500 w-full max-w-xs m-2 border-2 rounded-lg p-3">
      <Link href={"https://cloud.google.com/dataplex"}>DataPlex</Link>
    </li>
    <li className="bg-black hover:bg-blue-500 w-full max-w-xs m-2 border-2 rounded-lg p-3">
      <Link href={"https://cloud.google.com/bigquery"}>BigQuery</Link>
    </li>
    <li className="bg-black hover:bg-blue-500 w-full max-w-xs m-2 border-2 rounded-lg p-3">
      <Link href={"https://cloud.google.com/dlp/"}>DLP</Link>
    </li>
    <li className="bg-black hover:bg-blue-500 w-full max-w-xs m-2 border-2 rounded-lg p-3">
      <Link href={"https://cloud.google.com/iam"}>CloudIAm</Link>
    </li>
  </ul>
</div>
  </div>

  <div className=" mt-10 bg-gradient-to-l from-black to-gray-400">
      {<Footer />}
      </div>

    </>
  );
};

export default printf;
