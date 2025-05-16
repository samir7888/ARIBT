
import { ChevronRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../services/Types/service-types";
import ServiceBody from "./ServicesBody";
import ButtonEffect2 from "../../../components/Buttons/ButtonEffect2";

export function ServiceCards({ serviceData }: { serviceData: Service }) {
  return (
    <div className="border border-gray-200 rounded-2xl container grid grid-cols-1 !p-0 md:grid-cols-2 gap-6 mx-auto h-fit">
      <div className=" order-2 md:order-first p-8">
        <div className="space-y-6 ">
          <h2 style={{ fontSize: "clamp(2rem, 2vw, 2.5rem)" }}>
            {serviceData.title}
          </h2>
          <div
            className="text-gray-400"
            style={{ fontSize: "clamp(0.9rem, 1vw, 1.5rem)" }}
          >
            {/* todo summary needed */}
            <ServiceBody description={serviceData.description} />
          </div>
        </div>
        <Link href={`/services/${serviceData.id}`} className="inline-block">
         <ButtonEffect2 />
        </Link>
      </div>

      {/* Right Card */}
      <div className="p-8 bg-gray-200 rounded-xl">
        <div className="relative aspect-square ">
          <Image
            src={serviceData.file}
            fill
            alt={serviceData.title}
            className="object-cover aspect-auto  rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}
