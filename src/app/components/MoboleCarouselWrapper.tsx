const MobileCarouselWrapper = ({children}) => {
    return(
        <div>
            <div className="flex justify-center my-10">
                <div>                   
                    {children}                  
                </div>
            </div>
        </div>
    );
}

export default MobileCarouselWrapper;