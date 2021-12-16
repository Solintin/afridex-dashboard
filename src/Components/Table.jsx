import afridex_coin from "../assets/images/afridex_coin.svg";
export default function BasicTable() {



  return <>
  







  <div className='table-section max-w-6xl mt-10 lg:mt-10 rounded-2xl bg-white shadow-2xl py-2'>
    

      <div className='table-wrapper  w-full overflow-x-scroll lg:overflow-x-hidden pb-6'>
        <table className='w-full items-center table-auto'>
          <thead>
          <tr className='border-b border-gray-200 font-bold text-xs text-gray-400 leading-5'>
           
            <th className='py-3 '>
           Coin
            </th>
            <th className='py-3 '>
              Transaction ID
            </th>
            <th className='py-3 '>
           Amount
            </th>
            <th className='py-3 '>
              Date
            </th>
            <th className='py-3 '>
             Categories
            </th>
            <th className='py-3'>
              Fees
            </th>
           
          </tr>
          </thead>
          <tbody className=''>
       
          {
            [...Array(10)].map( (i, idx) =>{
              return (
                <tr key={idx} className='border-b border-gray-200 py-3 cursor-pointer odd:bg-gray-100s'>
          
                <td className=' px-3 whitespace-nowrap pr-6'>
                  <div className='flex justify-center items-center space-x-4'>
                    <img className='rounded-full w-36px h-36px' src={afridex_coin } alt=''/>
                    <div className='name'>
                    USDC
                    </div>
                  </div>
                </td>
                <td className='text-sm px-3 leading-5 text-center whitespace-nowrap text-afridex-core font-medium'>
                2716w821
                </td>
                <td className='text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium'>
                $100,000
                </td>
                <td className='text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium'>
                 <span className="mr-2">10/10/2021 </span>  <span>10:09pm
                 </span>                </td>
                <td className='text-sm px-3 leading-5 text-center whitespace-nowrap text-black font-medium'>
                
                  <div className="bg-blue-100 rounded-xl py-1 flex justify-center items-center">
                  <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-bold text-xs text-blue-500">USDT Purchase</span>
                  </div>

                </td>
                <td className='text-sm px-3 flex justify-center items-center whitespace-nowrap leading-5  text-afridex font-medium'>
                <div className='rounded-full text-center mb-3 px-4   py-2'>
                $0.5
                </div>
                </td>
    
              
    
    
              </tr>
              )
            })
          }
          </tbody>
        </table>

        <div className='see-more flex justify-center items-center mt-6'>
          <a href='/' className='text-center mx-auto text-gray-700  font-bold underline text-sm leading-5'>See All Transactions</a></div>
      </div>
    </div>






  </>;
}
