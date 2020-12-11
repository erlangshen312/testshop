import React from "react";
import data from './data.json'
import Details from "./Details";

function Dashboard() {
    const [isHide, setIsHide] = React.useState(false)
    const [detail, setDetails] = React.useState()

    const _handleAddToCheckout = async (item) => {
        try {
            const data = JSON.parse(localStorage.getItem('@data')) || [];
            data.push(item)
            await localStorage.setItem('@data', JSON.stringify(data))
        } catch (e) {
            console.warn(e)
        }
    }

    const _handleToDetails = (item) => {
        setIsHide(true)
        console.log("is hide", isHide)
        setDetails(item)
    }

    return (
        <>
            {
                isHide === false
                    ? (
                        data.map((item, index) => {
                            return (
                                <div id="menu" className="container mx-auto px-4 " key={item.id}>
                                    <div className="flex flex-wrap mt-12 justify-center">
                                        <div
                                            className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-4">
                                            <div className="col-span-2 sm:col-span-1 xl:col-span-1">
                                                <img
                                                    alt="..."
                                                    src={item.image}
                                                    className="h-24 w-30 rounded  mx-auto"
                                                />
                                            </div>
                                            <div className="col-span-2 sm:col-span-4 xl:col-span-4">
                                                <h3 className="font-semibold text-black">{item.title}</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                </p>
                                                <button
                                                    onClick={() => _handleAddToCheckout(item)}
                                                    className='bg-gray-700 text-gray-100 px-2 py-1 my-3 font-medium rounded'>
                                                    Добавить в корзину
                                                </button>
                                                <button
                                                    onClick={() => _handleToDetails(item)}
                                                    className='mx-3 bg-gray-700 text-gray-100 px-2 py-1 my-3 font-medium rounded'>
                                                    Подробнее
                                                </button>
                                            </div>
                                            <div
                                                className="col-span-2 sm:col-span-1 xl:col-span-1 italic ">{item.cost}$/шт
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                    : <Details detail={detail} _handleAddToCheckout={() => _handleAddToCheckout(detail)}
                               setIsHide={() => setIsHide(false)}/>
            }
        </>
    );
}

export default Dashboard;
