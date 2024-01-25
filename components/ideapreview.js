'use client'
import Logo from "./logo";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles provided by the react-pdf-viewer packages
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Comment from "./comment";

const Ideaview = () => {
    const pdfUrl = 'my.pdf';
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="text-center text-gray-400">
        Your Success is our algorithm
      </div>
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-2">
        <div className="w-[100%]">
          {/* title */}
          <div className="font-extrabold text-2xl text-green-800">
            Title goes on here
          </div>
          {/* category */}
          <div className="text-gray-400">software, computer</div>
        </div>
      </div>
      {/* project team */}
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
        <div className="w-[100%]">
          {/* title */}
          <div className="font-bold text-lg text-green-800 underline text-center">
            Project Team
          </div>
          <div className="font-bold text-lg text-green-800 underline">
            Sugam Gelal
          </div>
          {/* Qualification */}
          <div className="text-gray-400">computer Engineer</div>
          <div className="text-gray-400">
            Email: <span className="text-black">sugamgelal@gmail.com</span>
          </div>
          <div className="text-gray-400">
            Phone: <span className="text-black">+977 9815397684</span>
          </div>
          <div className="text-gray-400">
            No of idea uploaded: <span className="text-black">10</span>
          </div>
        </div>
      </div>
      {/* project pricing */}
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
        <div className="w-[100%]">
          <div className="text-gray-400">
            Estimated Budget: <span className="text-black">1000</span>
          </div>
        </div>
      </div>

      {/* Summary of project */}
      
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
      <div className="font-bold text-lg text-green-800 underline ">
            Project Summary
          </div>
        <div className="w-[100%]">
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu ipsum dignissim, vestibulum turpis ut, eleifend nulla. Fusce at
            venenatis nibh. Ut eu nibh mollis, pellentesque dui ut, eleifend
            nisl. Sed iaculis sapien eget tellus consectetur, vitae blandit
            ligula porta. Sed ultricies leo venenatis, tempus arcu non, sagittis
            nunc. Suspendisse eu risus metus. Phasellus venenatis, elit id
            hendrerit imperdiet, massa mi faucibus turpis, non condimentum eros
            nunc a augue. Suspendisse et risus justo. Suspendisse porttitor
            tempus sem. Fusce ac elit in elit pretium vestibulum nec et ante.
            Donec a nunc rhoncus, porta augue ac, placerat lectus. Cras
            venenatis arcu id libero vehicula, ut hendrerit nisl pharetra.
            Vivamus ex sapien, aliquam id tempor ac, viverra nec turpis. Sed nec
            erat dignissim, pretium purus in, mattis ex. Fusce ac sapien
            finibus, volutpat ipsum id, ultrices urna. Maecenas magna nibh,
            cursus sit amet consequat sit amet, hendrerit in tellus. Donec
            finibus eu erat vitae porttitor. Curabitur non enim non purus tempor
            dictum id eget erat. Morbi erat sapien, pellentesque ut vehicula
            posuere, rhoncus in turpis. Nulla ac eleifend metus, et consectetur
            ante. Donec pulvinar pharetra felis, vitae maximus ipsum varius vel.
            Aliquam felis orci, iaculis a sapien vitae, semper pulvinar magna.
            Mauris justo enim, pretium porttitor eros eu, porta iaculis ante.
            Sed tempor hendrerit magna ac dignissim. Ut nec venenatis mi,
            pellentesque consectetur nisl. Suspendisse hendrerit sed nisl quis
            tincidunt. Praesent non sem massa. In sed lorem placerat, ultrices
            lectus a, consequat ex. Duis in sollicitudin tellus, ac ultrices
            elit. Maecenas finibus urna nibh, non pharetra dolor dictum id.
            Nullam nibh quam, vestibulum sed ante quis, mattis ullamcorper urna.
            Duis facilisis leo vitae enim luctus accumsan. Pellentesque sit amet
            mattis neque. Integer vestibulum tortor ac sodales rutrum. In
            iaculis erat quis orci mattis pulvinar. Phasellus fringilla est et
            diam mattis, ac dictum quam.
          </div>
        </div>
      </div>
      

      {/* pdf viewer */}

      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
      <div className="font-bold text-lg text-green-800 underline ">
            Project proposal
          </div>
        <div className="w-[100%]">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>

        </div>
        </div>

        <Comment/>
      
    </div>
  );
};

export default Ideaview;
