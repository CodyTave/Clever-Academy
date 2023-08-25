import { address, phone } from "../assets";
import { contactInfo } from "../constants/constants";

function Contact() {
  return (
    <div className="mt-20 h-[460px] relative">
      <iframe
        className="w-full h-full  border-0"
        src={contactInfo.map}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute grid gap-6 -top-16 md:left-32 md:mx-0  sm:mx-32 xs:mx-20 mx-0 xs:p-10 p-5  sm:py-20 py-12 bg-secondary-0 text-left">
        <div className="block relative">
          <div className="absolute  h-32  w-[2px] hover:h-10 bottom-0 left-0 bg-primary-0 transall " />
          <h1 className="uppercase font-black md:text-3xl xs:text-2xl text-xl text-secondary-3 pl-8">
            CONTACTEZ-NOUS
          </h1>
        </div>
        <a
          href={`mailto:${contactInfo.email}`}
          className="text-white bg-[#3a3c8e] w-fit hover:opacity-70 transall p-2 px-5 rounded-full"
        >
          {contactInfo.email}
        </a>
        <div className="flex items-center gap-5">
          <img className="w-12" src={phone} />
          <div className="text-white">
            {contactInfo.phone.map((num, index) => (
              <a className="block" href={`tel:${num}`} key={index}>
                {num}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img className="w-12" src={address} />
          <a
            target="_blank"
            href={contactInfo.location}
            className="text-white max-w-[18rem]"
          >
            {contactInfo.address}
          </a>
        </div>
        <div className="flex gap-3 mt-5">
          {contactInfo.socialMedia.map((link) => (
            <a target="_blank" href={link.link} key={link.id}>
              <img
                className="w-10 transall opacity-70 hover:opacity-100"
                src={link.icon}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
