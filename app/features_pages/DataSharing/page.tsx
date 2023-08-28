import Footer from "@/components/ui/footer";
import "../style.css"

import Header from "@/components/ui/header";
import MobileMenu from "@/components/ui/mobile-menu";
import Image from "next/image";
import Link from "next/link";
import img2 from "@/public/images/features/datasharing1-removebg-preview.png"
import img1 from "@/public/images/features/datasharing2-removebg-preview.png"
import img3 from "@/public/images/features/data_sharing4.png"


const printf = () => {
  return (
    <>
      <div id="divone" className="max-w-8xl mx-auto px-4 sm:px-6 md:ml-0 bg-gradient-to-d from-black to-gray-100">
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="mainhead">Data Sharing</h1>

        <h2 className="font-bold text-3xl font-sans">What is DataSharing?</h2>
        <br />
        <div className="flex flex-col md:flex-row">
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          Data sharing is the process of making the same data resources
          available to multiple applications, users, or organizations. It
          includes technologies, practices, legal frameworks, and cultural
          elements that facilitate secure data access for multiple entities
          without compromising data integrity. Data sharing improves efficiency
          within an organization and fosters collaboration with vendors and
          partners. Awareness of the risks and opportunities of shared data is
          integral to the process.
        </p>
        <div className="md:ml-6 rounded-lg  border-2">
        <Image className="w-auto md:w-400 h-auto md:h-auto" src={img3} alt="DataLakeSolution" />
        </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans">
          Importance of DataSharing for Enterprise
        </h2>
        <br />
        <br />
        <div className="flex flex-col md:flex-row">
        <p id="pone" className="bg-gradient-to-r from-indigo-500 md:w-2/5 border text-sm md:text-lg lg:text-xl rounded-lg md:mr-6 md:mb-0 mb-6 md:mt-0 p-4 md:p-0">
          Data sharing benefits the researcher, research sponsors, data
          repositories, the scientific community, and the public. It encourages
          more connection and collaboration between scientists, and better
          science leads to better decisionmaking.
          <br />
          Data sharing reduces inefficiencies, leading to healthier bottom lines. It also increases collaboration and subsequently opens up new opportunities between business leaders.
        </p>
        <div className="md:ml-6 rounded-lg  border-2">
        <Image className="w-auto md:w-auto h-auto md:h-auto" src={img1} alt="DataLakeSolution" />
        </div>
        </div>
        <br />
        <br />
        <h2 className="font-bold text-3xl font-sans mb-6">
        What are the risks of data sharing?
        </h2>
        <div className="">
          <ul>
            <li className="font-bold mt-2 mb-2">
            Privacy disclosure
            </li>
            <li className="font-bold mt-2 mb-2">
            Data misinterpretation
            </li>
            <li className="font-bold mt-2 mb-2">
            Low data quality
            </li>
          </ul>
        
        </div>

        <div>
          <br />
          <br />
          <h2 className="font-bold text-3xl font-sans mb-5">
            Best Data Sharing technologies
          </h2>
          
        


          <div className="box-border bg-gradient-to-r from-indigo-500 flex flex-col sm:flex-row">
  <div className="box w-full sm:w-2/3 p-4 sm:pl-6">
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
                <Link
                  href={
                    "https://www.oracle.com/in/database/what-is-a-data-warehouse/"
                  }
                >
                  Data warehousing
                </Link>
              </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
      <Link
                  href={
                    "https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces"
                  }
                >
                  APIs
                </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
      <Link
                  href={"https://research.ibm.com/blog/what-is-federated-learning"}
                >
                  Federated learning
                </Link>
      </li>
      <li className="bg-black hover:bg-blue-500 border-2 rounded p-3">
      <Link href={"https://www.ibm.com/topics/blockchain"}>
                Blockchain technology
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
