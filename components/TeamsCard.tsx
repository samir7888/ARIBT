import Image from "next/image";
import { FaDribbble, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TeamMember, TeamMemberList } from "../app/teams/Types/teams-types";
import { serverFetch } from "../libs/server-fetch";
import Link from "next/link";

const TeamsCard = async () => {
  const teams = await serverFetch<TeamMemberList>("teammembers");
  return (
    <div
      style={{ fontFamily: "Aeonik" }}
      className="   mx-auto grid space-y-12 mt-8"
    >
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit w-fit gap-8">
        {/* card */}

        {teams &&
          teams.map((team) => <BorderImage key={team.id} teams={team} />)}
      </div>
    </div>
  );
};

export default TeamsCard;

function BorderImage({ teams }: { teams: TeamMember }) {
  return (
    <section
      className="p-[1px] rounded-2xl "
      style={{
        background:
          "linear-gradient(to bottom, var(--color-gray-200), transparent)",
      }}
    >
      <div
        className="bg-white flex flex-col"
        style={{ borderRadius: "calc(var(--radius-3xl) - 1px)" }}
      >
        <div className=" aspect-auto max-w-fit overflow-hidden bg-linear-to-b from-gray-100 to-white rounded-2xl">
          <Image
            src={teams.image}
            alt={`Image of ${teams.name} || Teams of ARIBT`}
            width={800}
            height={500}
            className="object-cover aspect-square p-2 rounded-2xl "
          />
        </div>
        <h3 className="pt-3 pl-2 text-xl tracking-wide font-medium ">
          {teams.name}
        </h3>
        <p className="pl-2 text-gray-400 tracking-wide pt-1">
          {teams.position}
        </p>
        <div className="flex space-x-3 pt-3 pl-2 ">
          <Link href={teams.link}>
            <FaLinkedin className="text-blue-600" />
          </Link>
          <FaXTwitter />
          <span>
            <FaDribbble className="text-[#EA4C89]" />
          </span>
        </div>
      </div>
    </section>
  );
}
