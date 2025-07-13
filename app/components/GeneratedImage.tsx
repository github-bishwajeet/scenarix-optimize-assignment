import Image from "next/image";

interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image src={imageUrl} priority alt="Generated artwork" loading="lazy" className="object-cover" />
      </div>
    </div>
  );
}
