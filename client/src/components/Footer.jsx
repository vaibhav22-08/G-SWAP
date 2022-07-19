const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 '>
      {/* <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
    <img src={logo} alt="logo" className='flex flex-[0.5] justify-center items-center' />
      </div>
      <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
        <p className='text-white text-base text-center mx-2 cursor-pointer'>Market</p>
        <p className='text-white text-base text-center mx-2 cursor-pointer'>Exchanges</p>
        <p className='text-white text-base text-center mx-2 cursor-pointer'>Tutorials</p>
        <p className='text-white text-base text-center mx-2 cursor-pointer'>Wallets</p>
      </div>
      <div className='flex justify-center items-center flex-col mt-5'>
      <p className='text-white text-sm text-center'>info@gmail.com</p>
      </div> */}
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'></div>
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3 font-mono'>
        <div className='text-black text-sm text-center'>Design inspired by <span className='font-bold'><a href='https://www.azuki.com' target='_blank'>AZUKI</a></span></div>
        <div className='text-black text-sm text-center'>Designed and built by <span className='font-bold'><a href='https://vaibhav22-portfolio.netlify.app' target='_blank'>Vaibhav</a></span></div>
      </div>
    </div>
  )
};

export default Footer;