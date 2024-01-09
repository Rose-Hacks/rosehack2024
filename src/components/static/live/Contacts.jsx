import { CONTACTS } from "@/data/static/Contacts";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Contacts = () => {
  const { data: session } = useSession();
  return (
    <div className="flex space-x-5">
      {CONTACTS.map(
        (contact, index) =>
          (contact.text !== "discord" ||
            (session && session.user.roles.participants === 1)) && (
            <Link
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline text-2xl hover:cursor-pointer hover:!text-rosehack-teal hover:-translate-y-1 duration-200"
            >
              {contact.icon}
            </Link>
          )
      )}
    </div>
  );
};

export default Contacts;
