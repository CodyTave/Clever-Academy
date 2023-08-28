import { Link } from "react-scroll";
import { LogoWhite } from "../assets";
import { footerLinks } from "../constants/constants";

function Footer() {
  return (
    <footer>
      <div className="bg-secondary-0 text-white py-16 sm:px-32 xs:px-20 px-5">
        <div className="grid xlg:grid-cols-4 mlg:grid-cols-3 sm:grid-cols-2  gap-y-10">
          <Link smooth to="top" className="w-fit h-fit cursor-pointer">
            <img src={LogoWhite} />
          </Link>
          {footerLinks.map((item) => (
            <div key={item.id}>
              <h1 className="text-left uppercase font-semibold opacity-90">
                {item.title}
              </h1>
              <ul className="text-left xlg:mt-10 mt-5 grid gap-5 text-ph-0 font-medium">
                {item.subLinks.map((link) => (
                  <li key={link.id} className="flex gap-2 items-center">
                    <span className="w-1 h-1 block rounded-full bg-primary-0"></span>
                    <a
                      className="hover:underline hover:text-white transall"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary-4 text-secondary-3 text-left p-5 xs:px-20 px-10 text-sm">
        <span>© 2023 Clever, tous droits réservés.</span>
      </div>
    </footer>
  );
}

export default Footer;
