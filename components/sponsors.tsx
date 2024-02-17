import localFont from "next/font/local";
const azonix = localFont({ src: "../assets/fonts/Azonix.otf" });

export default function Sponsors() {
  return (
    <section className=" body-font w-11/12 mx-auto" id="sponsors">
      <div className=" px-5 py-24 mx-auto">
        <div className="flex flex-col items-center py-4">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Silver Sponsors
          </h1>
          <div className="flex flex-wrap -m-2 justify-center">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <img
                alt="DEVFOLIO LOGO"
                className="w-full h-full"
                src="https://devfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F055de5cb-e9de-43cf-a87e-c2c43bd5a671%2F_Dark.png?table=block&id=001376d2-c0f1-4312-971e-a6d3588181a2&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Bronze Sponsors
          </h1>
          <div className="flex flex-wrap -m-2 justify-center">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <img
                alt="POLYGON LOGO"
                src="https://devfolio.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F884e6030-2f25-49bf-b85f-984a4e07a886%2FDark.png?table=block&id=c63d7b2e-475e-4d8f-b52d-6abc014b1fa6&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=870&userId=&cache=v2"
              />
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <img
                alt="ETHINDIA LOGO"
                src="https://devfolio.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5bc094c8-987c-4274-938f-8a9d3fad1a04%2F3a99e963-fed1-423a-81b2-8e13661c12ef%2FUntitled.png?table=block&id=b43f6ac2-f22d-4513-814d-a841fc5b6079&spaceId=5bc094c8-987c-4274-938f-8a9d3fad1a04&width=1740&userId=&cache=v2"
              />
            </div>
          </div>
        </div>
        {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/94x94"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Martin Eden
                </h2>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/94x94"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Martin Eden
                </h2>
                <p className="text-gray-600">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/98x98"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Boris Kitua
                </h2>
                <p className="text-gray-600">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/100x90"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Atticus Finch
                </h2>
                <p className="text-gray-600">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/104x94"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Alper Kamu
                </h2>
                <p className="text-gray-600">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/108x98"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p className="text-gray-600">Product Manager</p>
              </div>
            </div>
          </div> */}
      </div>
    </section>
  );
}
