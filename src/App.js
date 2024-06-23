function App() {
    return (
        <div className="App">
            <header className="bg-purple-900 relative pb-32 rounded-bl-[100%_10%] rounded-br-[100%_10%] ">
                <div className="flex flex-row justify-between mx-4 items-center pt-8">
                    <img src="/assets/workit.svg" alt="logo" className="h-[24px]"/>
                    <p className="text-[16px] text-white font-body underline underline-offset-8 decoration-green-500">
                        Apply for access
                    </p>
                </div>

                <div className="mt-16 flex items-center mx-4 justify-center">
                    <h1 className="text-white text-5xl text-center font-abhaya font-light text-center w-96">Data <span className="underline decoration-green-500">tailored</span> to
                        your
                        needs.</h1>
                </div>

                <div className="mt-16 flex items-center justify-center">
                    <a href="#" className="px-4 py-4 bg-green-500 text-body font-bold">Learn more</a>
                </div>

                <div className="mt-16 flex items-center justify-center">
                    <img src="/assets/phone.png" alt="Phone Illustration" className="absolute top-[80%]"/>
                </div>
            </header>

            <main className="bg-white">
                <section
                    className="flex bg-gray-500 pt-32 rounded-bl-[100%_10%] rounded-br-[100%_10%] lg:pb-12 lg:flex-row lg:justify-center lg:items-center flex-col">
                    <div
                        className="flex flex-col items-center mx-2 md:flex-row md:items-center md:mx-8 lg:items-center lg:justify-center mt-16 lg:mt-0 lg:flex-col lg:text-center">
    <span
        className="h-12 w-12 p-4 rounded-full border-2 border-purple-900 flex justify-center items-center lg:text-center">
        <p className="font-abhaya text-xl">1</p>
    </span>
                        <div
                            className="flex flex-col items-center md:items-start md:ml-4 lg:text-center lg:justify-center lg:items-center">
                            <h2 className="font-abhaya text-4xl mt-4 lg:mt-0 text-purple-900 lg:text-center">Actionable
                                insight</h2>
                            <p className="text-center md:text-left font-manrope-regular mt-4 text-purple-900 lg:text-center">
                                Optimize your products, improve customer satisfaction and stay ahead of the competition
                                with our product data analytics.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center mx-2 md:flex-row md:items-center md:mx-8 lg:items-center lg:justify-center mt-16 lg:mt-0 lg:flex-col lg:text-center">
    <span
        className="h-12 w-12 p-4 rounded-full border-2 border-purple-900 flex justify-center items-center lg:text-center">
        <p className="font-abhaya text-xl">1</p>
    </span>
                        <div
                            className="flex flex-col items-center md:items-start md:ml-4 lg:text-center lg:justify-center lg:items-center">
                            <h2 className="font-abhaya text-4xl mt-4 lg:mt-0 text-purple-900 lg:text-center">Actionable
                                insight</h2>
                            <p className="text-center md:text-left font-manrope-regular mt-4 text-purple-900 lg:text-center">
                                Optimize your products, improve customer satisfaction and stay ahead of the competition
                                with our product data analytics.
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex flex-col items-center mx-2 md:flex-row md:items-center md:mx-8 lg:items-center lg:justify-center mt-16 lg:mt-0 lg:flex-col lg:text-center">
    <span
        className="h-12 w-12 p-4 rounded-full border-2 border-purple-900 flex justify-center items-center lg:text-center">
        <p className="font-abhaya text-xl">1</p>
    </span>
                        <div
                            className="flex flex-col items-center md:items-start md:ml-4 lg:text-center lg:justify-center lg:items-center">
                            <h2 className="font-abhaya text-4xl mt-4 lg:mt-0 text-purple-900 lg:text-center">Actionable
                                insight</h2>
                            <p className="text-center md:text-left font-manrope-regular mt-4 text-purple-900 lg:text-center">
                                Optimize your products, improve customer satisfaction and stay ahead of the competition
                                with our product data analytics.
                            </p>
                        </div>
                    </div>

                </section>

                <section className="pt-64 flex flex-col items-center relative lg:flex-row xl:mx-[20%]">
                    <div
                        className="flex bg-green-500 justify-center h-[300px] w-[300px] rounded-full mt-[-5rem] lg:ml-[4rem] lg:overflow-hidden">
                        <img src="/assets/preview.png" className="h-full w-full object-cover rounded-full"
                             alt="Illustration"/>
                    </div>

                    <div
                        className="bg-purple-900 mx-4 p-4 text-center absolute translate-y-1/2 w-[90%] md:w-auto lg:w-[85%] lg:right-0 lg:p-16 lg:text-left">
                        <h1 className="text-white text-4xl font-abhaya lg:text-left">Be the first to test</h1>
                        <p className="text-center text-white mt-4 font-manrope-regular lg:text-left">
                            Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta
                            tester for our app and kickstart your company. Apply for access below and I’ll be in touch
                            to schedule a call.
                        </p>
                        <div className="flex items-center justify-center mt-8 lg:items-start lg:justify-start">
                            <a href="#"
                               className="px-4 py-4 bg-green-500 text-body font-bold lg:justify-start lg:border-2 lg:border-green-500 lg:bg-purple-900 lg:text-green-500">Apply
                                for access</a>
                        </div>
                    </div>
                </section>

                <footer className="pt-80 flex justify-center flex-col mb-32">
                    <img src="/assets/workit-purple.svg" alt="logo" className="h-[24px]"/>
                    <div className="mt-8 flex flex-row justify-center w-full justify-evenly">
                        <img src="/assets/facebook.svg" className="h-[20px]" alt="Facebook"/>
                        <img src="/assets/twitter.svg" className="h-[20px]" alt="Twitter"/>
                        <img src="/assets/instagram.svg" className="h-[20px]" alt="Instagram"/>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default App;
