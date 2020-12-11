import React from "react";

function Checkout() {
    const [isOrder, setIsOrder] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [data, setData] = React.useState()
    React.useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const localData = await JSON.parse(localStorage.getItem('@data'))
        const res = localData && localData.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.id === thing.id && t.title === thing.title
            )
            )
        )
        const allCost = res && res.map(item => item.cost).reduce((prev, next) => prev + next);
        setData(res)
        setTotal(allCost)
    }

    const clear = async () => {
        await localStorage.clear()
        await getData()
    }

    function _handleIncrement(item) {
        setCount(count + 1)
    }

    const _handleDecrement = (item) => {
        setCount(count - 1)

    }

    const _handleOrder = async () => {
        alert(' Ожидайте товар. Спасибо что выбрали нас!');
        await localStorage.clear()
        await getData()
    }
    return (
        <div>
            <div className="w-full mt-8 mb-8 flex-shrink-0 order-1  lg:mb-0 lg:order-2">
                <div className="flex justify-center">
                    <div className="border rounded-md max-w-md w-full px-4 py-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-gray-700 font-medium">Всего товаров: {data && data.length}</h3>
                            <span className="text-gray-600 text-sm" onClick={() => clear()}>Очистить</span>
                        </div>
                        {data && data.map((it, i) => {
                            return <div className="flex justify-between mt-6" key={it.id}>
                                <div className="flex">
                                    <img className="h-20 w-26 object-cover rounded"
                                         src={it.image}
                                         alt=""/>
                                    <div className="mx-3">
                                        <h3 className="text-sm text-gray-600">{it.title}</h3>
                                        <div className="flex items-center mt-2">
                                            <button
                                                onClick={() => _handleIncrement(it)}
                                                className="text-gray-500 focus:outline-none focus:text-gray-600">
                                                <svg className="h-5 w-5" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path
                                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </button>
                                            <span className="text-gray-700 mx-2">{count}</span>
                                            <button
                                                onClick={() => _handleDecrement(it)}
                                                className="text-gray-500 focus:outline-none focus:text-gray-600">
                                                <svg className="h-5 w-5" fill="none" strokeLinecap="round"
                                                     strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                     stroke="currentColor">
                                                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-gray-600">{it.cost} $ / шт</span>
                            </div>
                        })}
                        <hr className='mt-8 mb-5'/>
                        <div className='flex justify-between  mb-3'>
                            <h2 className="font-medium">
                                Итого:
                            </h2>
                            <h3 className="font-bold">
                                {total} $
                            </h3>
                        </div>
                        <button
                            onClick={() => setIsOrder(!isOrder)}
                            className='bg-gray-700 text-gray-100 px-2 py-4 my-3 w-full font-medium rounded'>
                            Прододжить
                        </button>
                        {isOrder === true && <div>
                        <hr className='mt-4 mb-5'/>
                            <div className="leading-loose">
                                <form className="max-w-xl p-5 bg-white rounded shadow-xl">
                                    <p className="text-gray-800 font-medium">Customer information</p>
                                    <div className="">
                                        <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                                        <input className="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_name" name="cus_name" type="text" required=""
                                               placeholder="Your Name" aria-label="Name"/>
                                    </div>
                                    <div className="mt-2">
                                        <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_email" name="cus_email" type="text" required=""
                                               placeholder="Your Email" aria-label="Email"/>
                                    </div>
                                    <div className="mt-2">
                                        <label className=" block text-sm text-gray-600"
                                               htmlFor="cus_email">Address</label>
                                        <input className="w-full px-2 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_email" name="cus_email" type="text" required=""
                                               placeholder="Street" aria-label="Email"/>
                                    </div>
                                    <div className="mt-2">
                                        <label className="hidden text-sm block text-gray-600"
                                               htmlFor="cus_email">City</label>
                                        <input className="w-full px-2 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_email" name="cus_email" type="text" required=""
                                               placeholder="City" aria-label="Email"/>
                                    </div>
                                    <div className="inline-block mt-2 w-1/2 pr-1">
                                        <label className="hidden block text-sm text-gray-600"
                                               htmlFor="cus_email">Country</label>
                                        <input className="w-full px-2 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_email" name="cus_email" type="text" required=""
                                               placeholder="Country" aria-label="Email"/>
                                    </div>
                                    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                        <label className="hidden block text-sm text-gray-600"
                                               htmlFor="cus_email">Zip</label>
                                        <input className="w-full px-2 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_email" name="cus_email" type="text" required="" placeholder="Zip"
                                               aria-label="Email"/>
                                    </div>
                                    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                                    <div className="">
                                        <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                                        <input className="w-full px-2 py-4 text-gray-700 bg-gray-200 rounded"
                                               id="cus_name" name="cus_name" type="text" required=""
                                               placeholder="Card Number MM/YY CVC" aria-label="Name"/>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={() => _handleOrder()}
                                            className="
px-2 py-4 my-3 w-full font-medium rounded'

                                            px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                                            type="submit">
                                            Оплатить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Checkout;
