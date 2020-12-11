import React from "react";

function Details({detail, _handleAddToCheckout, setIsHide}) {

    return (
            <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
                <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div className="lg:w-1/3">
                        <div
                            className="h-64 bg-cover lg:rounded-lg lg:h-full lg:justify-center lg:items-center"
                        >
                            <img src={detail && detail.image} alt={detail && detail.title} className='lg:items-center'/>
                        </div>
                    </div>
                    <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                        <h2 className="text-3xl text-gray-800 font-bold">{detail && detail.title}</h2>
                        <p className="text-2xl text-indigo-600">{detail && detail.cost + " USD"}</p>
                        <p className="mt-4 text-gray-600 ">{detail && detail.note}</p>
                        <div className="mt-8">
                            <button
                                onClick={()=>_handleAddToCheckout()}
                                className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Добавить в корзину
                            </button>
                            <button
                                onClick={()=>setIsHide()}
                                className="bg-gray-900 text-gray-100 px-5 py-3 mx-3 font-semibold rounded">Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Details;
