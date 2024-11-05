/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useRef, useState } from "react";

import emailJs from "@emailjs/browser";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Handles changes in form inputs and updates state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Remove errors when fields are corrected
    setErrors({ ...errors, [name]: "" });
  };

  // Check for valid input before submission
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check for empty or invalid name
    if (!form.name.trim()) {
      newErrors.name = "Please enter a valid name.";
      isValid = false;
    } else if (/[^a-zA-Z\s]/.test(form.name)) {
      newErrors.name =
        "Name must not contain special characters (e.g., @, #, $, etc.).";
      isValid = false;
    }

    // Check for empty email
    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
      isValid = false;
    }

    // Check for empty or too short message (20 words minimum)
    const wordCount = form.message.trim().split(/\s+/).length;
    if (!form.message.trim() || wordCount < 20) {
      newErrors.message = "Message must be at least 20 words.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handles form submission with emailJS integration
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload

    // Validate form before sending
    if (!validateForm()) {
      const errorMessages = Object.entries(errors)
        .filter(([_, msg]) => msg)
        .map(([field, msg]) => `${msg}`)
        .join("\n");

      alert(
        `Please address the following issues before submitting:\n\n${errorMessages}`
      );
      return;
    }

    setLoading(true);

    emailJs
      .send(
        "service_1udg5lg",
        "template_dqdqsof",
        {
          from_name: form.name,
          to_name: "Soroosh",
          from_email: form.email,
          to_email: "soroosh77aghaei@yahoo.com",
          message: form.message,
        },
        "9w-ab5-Kz7o2KAsxy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Your message has been sent successfully!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send message:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* form contact on the left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl " //flex-[0.75] ==> 3/4 of the screen
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name here..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email here..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* earth canvas on the right */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
