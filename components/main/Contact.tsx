"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { CiMail } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    setIsLoading(true);
    const data = {
      to_name: "shay",
      from_name: name,
      message: `${message} sent by ${email}`,
      reply_to: email,
    };

    if (data) {
      emailjs.send(SERVICE_ID!, TEMPLATE_ID!, data, PUBLIC_KEY!).then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setMessage("");
          setName("");
          setIsLoading(false);
          toast.success("Email sent successfully", {
            duration: 5000,
            icon: <CiMail size={20} />,
          });
        },
        (error) => {
          console.log(error.text);
          setEmail("");
          setMessage("");
          setName("");
          setIsLoading(false);
          toast.error("Failed to send email", {
            duration: 5000,
            icon: <MdErrorOutline size={20} />,
          });
        }
      );
    }
  };

  const isFormValid = () => {
    let isValid = true;

    if (name.trim() === "") {
      isValid = false;
    }

    if (email.trim() === "" || !email.includes("@") || !email.includes(".")) {
      isValid = false;
    }

    if (message.trim() === "") {
      isValid = false;
    }

    setIsValid(isValid);

    if (!isValid) {
      alert("Please fill in all required fields.");
    }

    return isValid;
  };

  return (
    <div
      onSubmit={handleSubmit}
      id="contact"
      className="flex flex-col items-center justify-center pb-20 z-50">
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Contact Me
      </h1>
      <div className="w-[90%] max-w-[1000px] flex flex-col gap-y-2 mx-auto">
        <span className="text-white font-bold pl-2">
          Your Name: <span className="text-rose-600">*</span>
        </span>
        <input
          type="text"
          name="user_name"
          placeholder="What's your name?"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className={`h-[64px] text-white bg-[#03001440] border 
          border-[#7042f87b] text-2xl pl-2 mb-4 rounded-lg placeholder:text-xl
          ${!isValid && name.trim() === "" ? "border-red-500" : ""}`}
        />
        <span className="text-white font-bold pl-2">
          Your Email: <span className="text-rose-600">*</span>
        </span>
        <input
          type="email"
          name="user_email"
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={`h-[64px] text-white bg-[#03001440] border 
          border-[#7042f87b] text-2xl pl-2 mb-4 rounded-lg placeholder:text-xl
          ${!isValid && name.trim() === "" ? "border-red-500" : ""}`}
        />
        <span className="text-white font-bold pl-2">
          Your Message: <span className="text-rose-600">*</span>
        </span>
        <textarea
          placeholder="What do you want to say?"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className={`h-[64px] text-white bg-[#03001440] border 
          border-[#7042f87b] text-2xl pl-2 mb-4 rounded-lg placeholder:text-xl
          ${!isValid && name.trim() === "" ? "border-red-500" : ""}`}
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`text-white bg-[#623bd97b] h-[64px] rounded-lg text-xl 
          ${
            isLoading ? "bg-[#4626a565] cursor-wait" : "hover:bg-[#633bd99f]"
          }`}>
          {isLoading ? "Submiting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
