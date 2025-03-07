import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Ads from "@/components/ads";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const AdsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Top Ad Platform" />

      <div className="flex flex-col gap-10">
        <Ads />
      </div>
    </DefaultLayout>
  );
};

export default AdsPage;
