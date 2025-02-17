import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab = ({ image } : GalleryTabProps) => {
    return ( 
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute w-full h-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            fill
                            src={image.url}
                            alt="img"
                            className="object-cover"
                        />
                    </span>
                    <span className={cn(
                        "absolute inset-0 rounded-md ring-2 ring-offset-2",
                        selected ? "ring-black" : "ring-transparent"
                    )}>
                    </span>
                </div>
            )}
        </Tab>
     );
}
 
export default GalleryTab;