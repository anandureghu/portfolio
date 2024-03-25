const env = import.meta.env;

export default {
  serviceId: env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: env.VITE_APP_EMAILJS_PUBLIC_KEY,
};
