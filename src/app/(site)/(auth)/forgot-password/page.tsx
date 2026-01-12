
import ForgotPassword from "@/app/components/auth/forgot-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | SOFTYSTA Agency",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
