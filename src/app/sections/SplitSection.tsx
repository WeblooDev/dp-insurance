import Image from "next/image";

interface SplitSectionProps {
  imageUrl: string;
  content: Array<{ title: string; description: string }>;
  reverse?: boolean;
}

export default function SplitSection({ imageUrl, content, reverse = false }: SplitSectionProps) {
  return (
    <section className="w-full py-2 xl-custom:py-12   ">
      <div
        className={`flex w-full flex-wrap xl-custom:flex-nowrap ${
          reverse ? "xl-custom:flex-row-reverse" : "xl-custom:flex-row"
        }`}
      >
        <div className="w-full xl-custom:w-[50%] flex flex-col items-center justify-center gap-12 
     xl-custom:px-16 xl-custom:h-auto h-[50%] p-8 sm:p-16">

        <div className="flex flex-col justify-center content-center w-full md:max-w-[80%] gap-6">
        {content.map((item, index) => (
            <div key={index} className="space-y-2  ">
              <h2 className="font-ivar text-[24px] md:text-[28px]  ">
                {item.title}
              </h2>
              <p className="text-[16px] md:text-[18px] max-w-[90%] ">{item.description}</p>
            </div>
          ))}
          </div>
        </div>

        <div className="w-full xl-custom:w-[50%] h-[50%]">
        <Image
          alt="Split section image"
          src={imageUrl}
          width={600}
          height={600}
          className={`aspect-square w-full h-full max-h-[600px] object-center object-cover 
            rounded-none md:${reverse ? "rounded-tr-[40px]" : "rounded-tl-[40px]"}`}
/>


        </div>
      </div>
    </section>
  );
}
