import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center">
      <img
        src="./illustration-dashboard.png"
        className="my-10 md:my-5 w-[80%] md:w-[40%] block mx-auto"
      />
      <div className=" my-7 ">
        {" "}
        <FontAwesomeIcon
          icon={faFacebook}
          className="p-1 text-Blue-500 text-2xl hover:text-Blue-200"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className="p-1 text-Blue-500 text-2xl hover:text-Blue-200"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="p-1 text-Blue-500 text-2xl hover:text-Blue-200"
        />
      </div>
      <p className="text-Gray-400 text-sm font-normal">
        &copy; Copyright Ping. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
