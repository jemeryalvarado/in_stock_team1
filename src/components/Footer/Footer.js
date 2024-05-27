import './Footer.scss';
import '../Main/EditInventory.scss';
import '../../pages/WarehouseDetailsPage/WarehouseDetailsPage.scss';

function Footer(){
    return(
        <footer className='footer'>
           <div className='footer__copyright'>
                 © InStock Inc. All Rights Reserved.
            </div> 
        </footer>
    )
}

export default Footer;