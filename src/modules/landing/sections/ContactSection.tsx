import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./ContactSection.scss";
import { IContact } from "../types";
import config from "../../../main/config/config";
import { toast } from "sonner";

const initialValues: IContact = {
  name: "",
  email: "",
  description: "",
  to_email: "dev.anandureghu@gmail.com",
};

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [data, setData] = useState<IContact>(initialValues);

  const handleDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData: Record<string, unknown> = {};
    Object.entries(data).forEach(([key, value]) => (newData[key] = value));

    const { serviceId, templateId, publicKey } = config.emailjs;

    emailjs
      .send(serviceId, templateId, newData, {
        publicKey,
      })
      .then(
        () => {
          setData(initialValues);
          toast.success("Email sent", {
            description: "Your email has sent successfully",
          });
        },
        () => {
          toast.error("Email sent failed", {
            description:
              "There was an issue while sending your mail, please re-verify or try again later",
          });
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__content--title">Say Hi👋</div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact__content--details">
            <input
              type="text"
              placeholder="Your name *"
              name="name"
              value={data.name}
              required
              onChange={handleDataChange}
            />
            <input
              type="text"
              placeholder="Your email *"
              name="email"
              required
              value={data.email}
              onChange={handleDataChange}
            />
            <textarea
              placeholder="Description *"
              name="description"
              required
              value={data.description}
              onChange={handleDataChange}
            ></textarea>
            <button type="submit">Send mail</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
