import type { V2_MetaFunction } from "@remix-run/node";
import HelloSA from "~/components/sidebarScroll/HelloSA";
import CityBranding from "~/components/sidebarScroll/CityBranding";

export const meta: V2_MetaFunction = () => {
  return [
    { 
      title: "devMountain San Antonio" ,
      desciption: "This is a demo page introducing San Antonio to devMountain and Strayer University."
    }
  ];
};

export default function Index() {

  return (
    <>
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <div className="relative flex w-full lg:pointer-events-auto lg:ml-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pr-[max(4rem,calc(50%-38rem))]">
        <div className="p-6 mx-auto max-w-lg lg:mx-0 lg:flex lg:max-w-xl lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pb-16 sm:pb-20 lg:py-20">
            <div className="relative">
              <HelloSA />
              <CityBranding />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}