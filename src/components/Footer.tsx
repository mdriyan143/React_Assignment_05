import Logo from "./Logo";

function Footer() {
    return (
        <footer className="border-t border-slate-200">

            <div className="mx-auto max-w-6xl px-4 py-16">

                <div className="grid grid-cols-4 gap-10">


                    <div> <Logo />

                        <p className="mt-4 text-sm leading-6 text-slate-500">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="mt-5 flex gap-5 text-sm text-slate-600">
                            <span>GitHub</span>
                            <span>Twitter</span>
                            <span>LinkedIn</span>
                        </div>

                    </div>



                    <div>

                        <h3 className="text-sm font-bold text-slate-700">
                            PRODUCT
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>

                    </div>


                    <div>

                        <h3 className="text-sm font-bold text-slate-700">
                            COMPANY
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>

                    </div>


                    <div>

                        <h3 className="text-sm font-bold text-slate-700">
                            LEGAL
                        </h3>

                        <div className="mt-4 space-y-3 text-sm text-slate-500">
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>

                    </div>

                </div>


                <div className="mt-14 border-t border-slate-200 pt-8">

                    <div className="flex justify-between text-sm text-slate-400">

                        <p>© 2026 Dev Stack. All rights reserved.</p>

                        <div className="flex gap-6">
                            <span>Privacy</span>
                            <span>Terms</span>
                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;