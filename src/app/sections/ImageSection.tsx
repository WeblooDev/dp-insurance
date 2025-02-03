import Image from "next/image";

interface ImageSectionProps {
  imageUrl: string;
  altText?: string;
}

export default function ImageSection({ imageUrl, altText = "Image" }: ImageSectionProps) {
  return (
    <section className="w-full p-12 flex justify-center px-4 sm:px-12 p-4">
      <div className="w-full  relative">
        <Image
          src={imageUrl}
          alt={altText}
          width={100000} 
          height={0} 
         
          className="object-cover rounded-lg w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
