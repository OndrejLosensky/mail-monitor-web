import React from 'react'
import logo from "../assets/logo.png"
const Body = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = 'https://drive.google.com/drive/u/0/folders/1B24hzapQYdFirVrDJSqBSKHCtiZuEq3g';
        downloadLink.download = 'MailMonitor.app';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

  return (
    <div className='w-full h-[600px] flex items-center justify-center'>
    {/* Left side */}
    <div className="w-1/2 px-8">
        <div className="text-center">
            <h2 className="text-6xl font-regular pb-6">MailMonitor</h2>
            <p className="text-lg">MailMonitor is Mac menubar application <br></br> for displaying unread emails from your inbox. <br></br> Also featuring auto reading, exporting <br></br>or generating report</p>
            <button onClick={handleDownload} className="border-borderBlack border-2 hover:bg-borderBlack hover:text-TextColor duration-300 text-bordeBlack font-bold py-4 px-12 rounded mt-6">
                Download
            </button>
        </div>
    </div>

    {/* Right side */}
    <div className="w-1/3">
        <img className='shadow-xl rounded-3xl' src={logo} alt='Icon'></img>
    </div>
</div>

  )
}

export default Body