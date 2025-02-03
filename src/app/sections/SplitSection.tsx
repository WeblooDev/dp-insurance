import Image from "next/image";

interface SplitSectionProps {
  imageUrl: string;
  content: Array<{ title: string; description: string }>;
  reverse?: boolean;
}

export default function SplitSection({ imageUrl, content, reverse = false }: SplitSectionProps) {
  return (
    <section className="w-full py-2 xl-custom:py-24 lg:py-12 ">
      <div
        className={`flex w-full flex-wrap xl-custom:flex-nowrap ${
          reverse ? "xl-custom:flex-row-reverse" : "xl-custom:flex-row"
        }`}
      >
        {/* Left Content Section */}
        <div className="w-full xl-custom:w-[40%] flex flex-col items-start justify-center gap-12  xl-custom:px-10 xl-custom:h-auto h-[50%] px-4 sm:px-12 p-4">
          {content.map((item, index) => (
            <div key={index} className="space-y-2">
              <h2 className="text-2xl xl-custom:text-3xl font-bold tracking-tighter sm:text-4xl">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Image Section */}
        <div className="w-full xl-custom:w-[60%] h-[50%]">
          <Image
            alt="Split section image"
            src={imageUrl}
            width={600}
            height={600}
            className="aspect-square w-full h-full max-h-[600px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
