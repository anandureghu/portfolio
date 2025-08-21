import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export const sendEmail = async (email: string, message: string) => {
  return new Promise((resolve, reject) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID || "",
        {
          email,
          message,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY || ""
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          resolve(response);
        },
        (error) => {
          toast.error("Failed to send message. Please try again later.");
          reject(error);
        }
      );
  });
};
