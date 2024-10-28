import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OrderStatus from "@/components/orderstatus";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const ProductPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Order Status" />

      <div className="flex flex-col gap-10">
        
        <OrderStatus />
        
      </div>
    </DefaultLayout>
  );
};

export default ProductPage;
