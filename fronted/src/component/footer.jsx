import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



export default function Footer(){
    return(

        <div>
<footer className='bg-purple-950 py-2  mt-3'>
    <div className='md:flex md:justify-evenly md:items-center md:flex-row flex flex-col justify-between items-center '>
            <p className='text-white'> Copyright© 2026 PaperVault. All rights reserved.</p>

            <div className='md:flex gap-8 flex py-3'>


          <a
  href="https://www.instagram.com/rmlau_insider/"
>
  <InstagramIcon className="text-red-300 hover:text-pink-500 transition-colors" />
</a>

                <a
  href="">
                    <WhatsAppIcon className='text-green-400'/>

</a>


                <a
  href="https://www.facebook.com/Rmlau.Ayodhya1975/"
>

                    <FacebookIcon className='text-blue-400'/>

</a>


                <a
  href="https://in.linkedin.com/school/dr-ram-manohar-lohia-avadh-university/">
                    <LinkedInIcon className='text-blue-500'/>

</a>


-


            </div>
            
    </div>

</footer>


        </div>
    )
}