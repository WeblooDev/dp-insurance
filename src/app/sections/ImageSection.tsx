import Image from "next/image";

interface MediaSectionProps {
  mediaUrl: string;
  altText?: string;
}

export default function MediaSection({ mediaUrl, altText = "Media" }: MediaSectionProps) {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(mediaUrl); // Checks if the URL is a video

  return (
    <section className="w-full p-12 flex justify-center px-4 sm:px-12">
      <div className="w-full relative">
        {isVideo ? (
          <video
            src={mediaUrl}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover rounded-lg w-full h-auto min-h-[300px]"
          />
        ) : (
          <Image
            src={mediaUrl}
            alt={altText}
            width={100000} 
            height={0} 
            className="object-cover rounded-lg w-full h-auto"
            priority
          />
        )}
      </div>
    </section>
  );
}
