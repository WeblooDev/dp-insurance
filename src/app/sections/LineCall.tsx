import { Button } from '@/components/ui/button';

interface LineCallProps {
  title: string;
}

export default function LineCall({ title }: LineCallProps) {
  return (
<section className="w-full mx-auto px-4 sm:px-12 p-4">
<div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
<h1 className="font-ivar text-[30px] md:text-[40px]">
          {title}
        </h1>
        <Button
          size="lg"
          className="rounded-[45px] !bg-[#01B7E8] !text-white hover:bg-[#0193BA] hover:opacity-90 mx-auto md:mx-0"
        >
          Call us Now
        </Button>
      </div>
    </section>
  );
}
