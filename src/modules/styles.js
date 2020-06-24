const style = () => {
	const style = document.createElement('style');
	style.textContent = `
        .active{
            display: block !important;
        transition: 0.4s; 
        }
        .none{
        display: none ;
        }
        .activel{
            display: inline-block !important;
        transition: 0.4s; 
        }
        .slaide-kontainer{
            overflow:hidden;
            position: relative;
            padding-left: 0px;
            padding-right: 0px;
            
           
        }
        .slaider-track{
            display:flex;
            transition: .2s;

        }
        .slaider-item{
            min-width:216px;
            transition: transform 0.6s ease;
        }

        `;// min-width:212px;
	document.head.appendChild(style);

};
export default style;
// .dot{
//     display: inline;
// }
