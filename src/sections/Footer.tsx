import { LogoWhite } from "../assets";
import { footerLinks } from "../constants/constants";

function Footer() {
  return (
    <footer className="bg-secondary-0 text-white py-16 sm:px-32 xs:px-20 px-5">
      <div className="grid grid-cols-4">
        <a href="/">
          <img src={LogoWhite} />
        </a>
        {footerLinks.map((item) => (
          <div key={item.id}>
            <h1 className="text-left uppercase font-semibold opacity-90">
              {item.title}
            </h1>
            <ul className="text-left mt-10 grid gap-5 text-ph-0 font-medium">
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
    </footer>
  );
}

export default Footer;
