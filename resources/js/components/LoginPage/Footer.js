import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineChatBubble, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <img src= "/images/logow.png" alt="NVP Sole'O" />
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-contact">
          <div className="contact-item">
            <MdOutlineChatBubble />
            <span>Chatbot</span>
          </div>
          <div className="contact-item">
            <MdOutlinePhone />
            <span>+63 911 223-4455</span>
          </div>
          <div className="contact-item">
            <MdOutlineMail />
            <span>shoes@gmail.com</span>
          </div>
        </div>

        {/* Middle Right Section - Links */}
        <div className="footer-links">
          <div className="link-item">
            <IoBookOutline />
            <span>About Us</span>
          </div>
          <div className="link-item">
            <FiHelpCircle />
            <span>Help Center</span>
          </div>
          <div className="link-item">
            <BiMessageSquareDetail />
            <span>FAQs</span>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="footer-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="footer-bottom">COPYRIGHTS 2025</div>
    </footer>
  );
};

export default Footer;
