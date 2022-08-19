import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaMailBulk,
    FaPhone,
    FaSearchLocation,
    FaTwitter,
} from "react-icons/fa";
const Footer = () => {
    return (
        <section className=" bg-dark-minor px-5 py-5 gap-5 lg:py-10 flex lg:flex-row justify-between flex-col items-center">
            <ul className="flex flex-col gap-2 lg:w-2/3 w-full">
                <li className="flex items-center gap-8">
                    <FaSearchLocation></FaSearchLocation>{" "}
                    <span>
                        123 Acme St. <b>Houston, Tx</b>
                    </span>
                </li>
                <li className="flex items-center gap-8">
                    <FaPhone></FaPhone> <b>1-800-123-1234</b>
                </li>
                <li className="flex items-center gap-8">
                    <FaMailBulk></FaMailBulk> <b>trips@galaxy.com</b>
                </li>
            </ul>
            <div className="flex flex-col gap-2 lg:w-1/3 w-full">
                <h1 className="text-xl lg:text-3xl">About the company</h1>
                <p className="text-xs lg:text-base">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
                    in illum odit iusto cupiditate vero saepe eligendi vel nulla repellat,
                    illo corrupti ipsum nam. Officia hic explicabo mollitia impedit
                    molestiae?
                </p>
                <ul className="flex justify-center lg:justify-start items-center gap-4">
                    <li className="cursor-pointer lg:text-xl"><FaFacebookF></FaFacebookF> </li>
                    <li className="cursor-pointer lg:text-xl"><FaLinkedinIn></FaLinkedinIn> </li>
                    <li className="cursor-pointer lg:text-xl"><FaTwitter></FaTwitter> </li>
                </ul>
            </div>
        </section>
    );
};

export default Footer;
