import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

interface FormProps {
  ig: string;
  email: string;
  handleIgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  ig,
  email,
  handleIgChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <Input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={handleEmailChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Input
          type="text"
          placeholder="Instagram Username"
          value={ig}
          onChange={handleIgChange}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <EnhancedButton
          variant="expandIcon"
          Icon={FaArrowRightLong}
          onClick={handleSubmit}
          iconPlacement="right"
          className="mt-2 w-full"
          disabled={loading}>
          {loading ? "Loading..." : "Join Waitlist!"}
        </EnhancedButton>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground">
        <p>For any queries, reach out at </p>
        <Link
          href="https://www.instagram.com/hashim_abdul_gafoor"
          rel="noopener noreferrer"
          target="_blank">
          <FaInstagram className="h-5 w-5 transition-all duration-200 ease-linear hover:text-primary" />
        </Link>
        or
        <Link
          href="https://www.linkedin.com/in/hashim-gafoor-k-m"
          rel="noopener noreferrer"
          target="_blank">
          <FaLinkedin className="ml-0.5 h-5 w-5 transition-all duration-200 ease-linear hover:text-primary" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
