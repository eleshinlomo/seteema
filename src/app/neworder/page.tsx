'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import MultiSelect from "@/components/FormElements/MultiSelect"
import DefaultLayout from "@/components/Layouts/DefaultLayout"

const NewOrderPage = () => {

    const id = '1'
    return (
        <>
        <DefaultLayout>
        <Breadcrumb pageName="New Order To Purchase" />
        <div className="md:max-w-lg ">
           <MultiSelect id={id} />
           <button className="bg-blue-500 rounded-2xl p-4 text-white">Place order</button>
        </div>
        </DefaultLayout>

        </>
    )
}

export default NewOrderPage