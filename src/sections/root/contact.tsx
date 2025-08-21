"use client";

import EmailSend from "@/components/email-send";
import EmailSending from "@/components/email-sending";
import { sendEmail } from "@/lib/email";
import React, { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendMessage = () => {
    setIsSubmit(true);
    sendEmail(email, message)
      .then(() => {
        setEmail("");
        setMessage("");
        setIsSubmit(false);
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setIsSubmit(false);
        setEmailSent(false);
      });
  };

  return (
    <div className="my-[100px] p-[40px] px-[50px] rounded-4xl bg-gradient-to-r from-indigo-500/10 to-violet-500/20">
      <h1 className="text-5xl font-semibold lowercase text-center">Say Hi,</h1>
      <p className="text-lg mt-2 mb-4 w-full text-center mx-auto opacity-70">
        {emailSent ? (
          <>
            Thank you for reaching out! I appreciate your message and will get
            back to you as soon as possible.
          </>
        ) : (
          <>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </>
        )}
      </p>
      {isSubmit ? (
        <div className="flex items-center justify-center py-10">
          <EmailSending />
        </div>
      ) : emailSent ? (
        <div className="flex items-center justify-center py-10">
          <EmailSend />
        </div>
      ) : (
        <>
          <input
            type="email"
            className="bg-white rounded-3xl px-[20px] py-[15px] w-full placeholder:text-gray-500 mt-3 outline-none text-black"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="bg-white rounded-3xl px-[20px] py-[15px] w-full placeholder:text-gray-500 mt-3 outline-none text-black h-fit"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-3xl px-[20px] py-[15px] mt-3 mx-auto w-fit block cursor-pointer hover:opacity-90 transition-opacity duration-150"
            onClick={handleSendMessage}
          >
            Send Message
          </button>
        </>
      )}
    </div>
  );
};

export default Contact;
