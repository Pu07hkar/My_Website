import image from "../../public/image4.jpg"
function Banner() {
  return (
    <>
      <div className="flex max-w-screen-2xl  container mx-auto md:px-20 px-4 flex-col md:flex-row">
        <div className="w-full md:order-1 order-2 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome!. Let's learn Something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-xl">
              "Struggling to choose the right coding path? I’ve got you covered!
              Explore well-structured coding materials, master concepts with
              ease, and kickstart your programming journey—all for free.
              CodeWithPushkar is here to make learning fun, practical, and
              accessible for everyone!"
            </p>
          </div>
        </div>
        <div className="w-full order-1 md:w-1/2 mt-12 md:mt-30 pt-10">
        <img 
      src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyfGVufDB8fDB8fHww"
      alt="new"
      />

        </div>
        
      </div>
    </>
  );
}

export default Banner;
