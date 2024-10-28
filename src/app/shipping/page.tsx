'use client'
import { useState } from "react"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import MultiSelect from "@/components/FormElements/MultiSelect"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import ShippingCountrySelect from "@/components/ShippingForm/ShippingCountrySelect"
import ProductMultiSelect from "@/components/ShippingForm/ProductMultiSelect"
import ShippingPortSelect from "@/components/ShippingForm/ShippingPortSelect copy"

const ShippingPage = () => {

    const [countryOne, setCountryOne] = useState('USA')
    const [countryTwo, setCountryTwo] = useState('UK')
    const [countryThree, setCountryThree] = useState('Canada')

    const id = '1'
    return (
        <>
        <DefaultLayout>
        <Breadcrumb pageName="New Order To Ship" />
        <div className="md:max-w-lg ">
           <ProductMultiSelect id={id} />
           <ShippingCountrySelect 
           countryOne={countryOne}
           countryTwo={countryTwo} 
           countryThree={countryThree}
           />
           <button className="bg-blue-500 rounded-2xl p-4 text-white">Place order</button>
        </div>
        </DefaultLayout>

        </>
    )
}

export default  ShippingPage