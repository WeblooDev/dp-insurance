
export default function ImageGallery() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {["/pure.svg", "/berkley-dr.svg", "/cincinnati.svg"].map((src, index) => (
          <div key={index} className="relative max-w-sm flex items-center justify-center ">
            <img
              src={src}
              alt={`Image ${index + 1}`}
             
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
